function FormTableText({isNew}) {
    return (
        <div className="px-5">
            {!isNew ? 
            <span id="enter-table-text" className="text-secondary text-sm">Ingresa el nombre de la mesa a la que accederás</span> : 
            <span id="create-table-text" className="text-secondary text-sm">Escoge un nombre que identifique tu mesa</span>
            }
        </div>
    )
};

export {FormTableText};