import React, {useState} from 'react';
import DeliveryConfigComponent from "../deliveryConfigComponent";
import AddFieldComponent from "../addFieldComponent";
import SelectComponent from "../selectComponent";

const FieldComponent = ({
                            fieldInfo,
                            index,
                            handleSelect,
                            handleSubfieldUpdate,
                            handleDelete,
                            schemaFields
                        }) => {
    // const schemaFields =
    const handleAdd = () => {
        // Object.keys(fieldInfo)
    }

    return <div key={index}>
        <div>
            <SelectComponent
                options={schemaFields}
                field={fieldInfo["customFieldName"]}
                index={index}
                isObject={!!fieldInfo.subFields && fieldInfo.rule !== 'asListRule'}
                handleSelect={handleSelect}
                handleDelete={handleDelete}
            />
        </div>
        {!!fieldInfo.subFields &&
        <div>
            <DeliveryConfigComponent
                fieldsJson={fieldInfo["subFields"]}
                index={index}
                // handleSubfieldUpdate={handleUpdate}
                // schemaFields={}
                handleUpdate={(e) => handleSubfieldUpdate(e, index)}
            />
        </div>}
        {(!!fieldInfo.subFields && fieldInfo.rule !== 'asListRule') &&
        <div>
            <AddFieldComponent
                handleAdd={handleAdd}
                fieldList={fieldInfo.subFields}
            />
        </div>}
    </div>
}

export default FieldComponent;
