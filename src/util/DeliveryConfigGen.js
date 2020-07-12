const _ = require('lodash')
const merge = require('deepmerge')


const file = {
    "importVehicles": [
        {
            "1111extra":"'1234'",
            "certified": true,
            "door": "4.0",
            "engine": {
                "newCylinder": "6.0",
                "power": "24.0"
            },
            "prices": {
                "prices": [
                    {
                        "amount": "11000.0",
                        "type": "msrp",
                        "tatti":{
                            'emailllll':'rishab'
                        }
                    },
                    {
                        "c1": "USD",
                        "type": "msrp",
                        "tatti":{
                            'address2':'rishab'
                        }
                    }
                ]
            },
        },
        {
            "extra":"'1234'",
            "certified": true,
            "engine": {
                "cylinders": "6.0",
                "power": "24.0"
            },
            "exterior": {
                "baseColor": "Black",
            },
            "prices": {
                "prices": [
                    {
                        "amount": "11000.0",
                        "type": "msrp",
                        "tatti":{
                            'emailllll':'rishab'
                        }
                    },
                    {
                        "c1": "USD",
                        "type": "msrp",
                        "tatti":{
                            'address':'rishab'
                        }
                    }
                ]
            },
            // "options": [
            //     {
            //         "optionCode": "CodeA",
            //         "prices": {
            //             "prices": [
            //                 {
            //                     "amount": "15000.0",
            //                     "currencyCode": "USD",
            //                     "type": "msrp"
            //                 }
            //             ]
            //         }
            //     },
            //     {
            //         "optionCode": "CodeB",
            //         "type": "FACTORY",
            //         "prices": {
            //             "prices": [
            //                 {
            //                     "amount": "17000.0",
            //                     "currencyCode": "USD",
            //                     "type": "msrp"
            //                 }
            //             ]
            //         }
            //     }
            // ],
            "dealerFeatures": [
                {
                    "description": "Remote power door locks"
                },
                {
                    "description": "Remote power door locks"
                }
            ]
        }
    ]
};

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

printPretty('comb_file', parseObject(deepReduceObject(file)))
