import { FormTableButton } from "./FormComps/FormTableButton";
import { FormTableInput } from "./FormComps/FormTableInput";
import { FormTablePicker, FormTablePickerLeft, FormTablePickerRight } from "./FormComps/FormTablePicker";
import { FormTableText } from "./FormComps/FormTableText";

function FormTable({isNew, toggler, setTableName, page, setPage}) {
    return (
        <div>
            <FormTableText
                isNew={isNew}
            />
            <div id="tableName" className="mx-5 flex flex-col">
                <div className="mt-5">
                    <FormTablePicker>
                        <FormTablePickerLeft
                            isActive={isNew}
                            text={"Crear Mesa"}
                            onClick={()=>toggler(true)}
                        />
                        <FormTablePickerRight
                            isActive={!isNew}
                            text={"¡Tengo un link!"}
                            onClick={()=>toggler(false)}
                        />
                    </FormTablePicker>
                    <div className="w-full h-16 rounded-2xl bg-orange-500 flex justify-between items-center -mt-8 relative">
                        <FormTableInput
                            setTableName={setTableName}
                        />
                        <FormTableButton
                            isNew={isNew}
                            setPage={setPage}
                        />
                    </div>
                </div>
                {isNew&&<span
                id="create-table-instructions"
                className="text-xs text-blue-300 text-center mt-2"
                >
                * No puede contener espacios ni carácteres especiales.
                </span>}
            </div>
        </div>
    )
};

export {FormTable};