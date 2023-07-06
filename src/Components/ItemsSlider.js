function ItemsSlider(props) {
    return (
        <div className={`w-auto h-auto ${props.isAvatar ? "items-center" : "items-start"} overflow-x-auto overscroll-x-contain flex space-x-7 scrollbar-hide px-5`}>
            {props.children}
        </div>
    )
}

export {ItemsSlider};