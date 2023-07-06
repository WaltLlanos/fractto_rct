function FormTableInput({setTableName}) {

    return (
        <div className="w-8/12 truncate">
            <span className="ml-5 text-white font-bold">fractto.co/</span>
            <input
                id="table-address"
                className="bg-transparent w-7/12 text-white placeholder-white placeholder-opacity-50 focus:placeholder-opacity-0 focus:outline-none"
                placeholder="CumpleDeMary"
                required=""
                onKeyUp={(e)=> { 
                    let tableAddress = e.target.value;
                    tableAddress = tableAddress.replace(/\W|_/g, '');
                    e.target.value = tableAddress
                    setTableName(tableAddress)
                }}
            />
        </div>
    )
};

export {FormTableInput};