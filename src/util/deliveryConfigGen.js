const _ = require('lodash')
const merge = require('deepmerge')

const deepReduceObject = (object) => {
    for (const [key, value] of Object.entries(object)){
        if(value instanceof Array)
            object[key]=deepMergeArray(value)
        else if(value instanceof Object)
            object[key]=deepReduceObject(value)
    }
    return object
}

const deepMergeArray = (array) => {
    let unionObject = merge.all(array)
    deepReduceObject(unionObject)
    return new Array(unionObject)
}

const printPretty=(name, object) =>{
    console.log(name, '-->', JSON.stringify(object, null, 2))
}

const newField = (customFieldName, rule=null) => {
    return {
        "field": null,
        customFieldName,
        rule,
        // "staticValue": false
    }
}

const parseArray= (array) => {
    return array.reduce((cdArray, element) => {
        if(element instanceof Array)//CAN THIS NEVER HAPPEN?
            return parseArray(element)
        else if (element instanceof Object)
        {
            const ttt=parseObject(element)
            return _.uniqWith(_.union(cdArray, ttt), _.isEqual)
        }
        return newField(element.valueOf())//SHOULD NEVER HAPPEN
    }, [])
}

const parseObject= (object) =>{
    let newArray=[];
    for (const [key, value] of Object.entries(object)) {
        let new_Field = newField(key)

        if(value instanceof Array)
        {
            new_Field.subFields = (parseArray(value))
            new_Field.rule = 'asListRule'
        }
        else if (value instanceof Object)
            new_Field.subFields = (parseObject(value))

        newArray.push(new_Field)
    }
    return newArray;
}

const configGenerator = (file) =>{
    return parseObject(deepReduceObject(file))
}

export default configGenerator;
