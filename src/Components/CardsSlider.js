
function CardsSlider(props) {
    const { page } = props;

    return (
        <div 
        id="res-cards-slider" 
        className={`${page == "closed" && "sticky top-[-5.75rem]"} w-auto h-auto items-center overflow-x-auto overscroll-x-contain flex space-x-3 scrollbar-hide px-5 py-3 snap-x snap-mandatory snap-always`}
        >
            {props.children}
        </div>

    )
}

export {CardsSlider};