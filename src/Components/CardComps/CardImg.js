
function CardImg({isSmall, resHandle, page}) {
    let smallClasses = "h-20 xs:aspect-[4/3] w-full bg-slate-400 bg-cover bg-center";
    let bigClasses = "aspect-[4/2.5] xs:aspect-[4/3] w-full bg-slate-400 bg-cover bg-center";

    return (
    <div className={page == "info" || page == "table" || page == "closed" ? smallClasses:bigClasses} style={{backgroundImage: `url(/img/${resHandle}_header.jpg)`}}>
    </div>
 )
}

export {CardImg};