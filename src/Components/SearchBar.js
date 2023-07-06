
function SearchBar({
    searchValue,
    setSearchValue
}) {

    return (
        <section id="searchbar" className="fixed bottom-1 w-full p-5 flex justify-between items-center">
            <input 
            className="w-10/12 h-16 bg-alternate1 rounded-2xl flex items-center justify-start pl-5" 
            placeholder="🔍  Busca tu restaurante..."
            value={searchValue}
            onChange={(e) => {
                setSearchValue(e.target.value)
            }}
            />
            <div className="h-12 aspect-square rounded-full bg-primary flex justify-center items-center">
                <div className="text-3xl">📍</div>
            </div>
        </section>
    )
}

export {SearchBar};