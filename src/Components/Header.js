function Header({logoClick, page, tableName, setSearchValue}) {
    return(
      <section id="header" className="flex h-14 w-full bg-white">
        <div className="flex h-full w-1/3 justify-start" 
        onClick={()=>{logoClick(); setSearchValue('')}}
        >
          <div
            id="logo-header"
            className="my-auto ml-4 flex h-8 items-center justify-center"
          >
            <span>🧮</span>
            <span className="font-bold ml-2 text-xl">fractto</span>
          </div>
        </div>
        {page !== "home" && page !== "info" ? <div className="flex h-full w-1/3 justify-center">
          <h1 className="my-auto text-center text-2xl">{tableName}</h1>
        </div>:""}
        {page !== "home" && page !== "info" ? <div className="flex h-full w-1/3 justify-end">
          <div className="my-auto mr-4 flex h-8 items-center justify-center">
            <span>👩🏿‍🦰</span>
          </div>
        </div>:""}
      </section>
    )
  }

function Alert() {
  return(
    <section id="alert" className="flex flex-col justify-center w-full h-10 bg-blue-100">
        <div className="w-full text-center text-alternate1 text-sm">
            <span>Hoy 30%OFF en <span className="underline">Crepe de Pollo!</span></span>
        </div>
    </section>
  )
}

export {Header};
export {Alert};