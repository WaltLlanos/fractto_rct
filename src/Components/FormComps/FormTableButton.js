function FormTableButton({isNew, setPage}) {
    return (
        <button
        className="w-3/12 mr-5 py-2 px-4 bg-white rounded-xl text-black font-bold text-sm truncate"
        onClick={()=>setPage('share')}
        >
        {isNew?"Crear":"Ingresar"}
        </button>
    )
};

export {FormTableButton};