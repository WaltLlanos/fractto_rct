function GuestSelectorContainer() {
    return (
        <div
            id="guest-selector-container"
            className="w-full h-44 bg-alternate1 rounded-t-2xl flex flex-col justify-between items-center p-5"
        >
            <span className="w-full text-left font-bold">
            ¿Pagarás por alguien mas?
            </span>
            <div className="w-auto h-auto items-start overflow-x-auto overscroll-x-contain flex space-x-7 scrollbar-hide px-5">
                <div className="">
                    <div className="rounded-2xl w-16 aspect-square bg-blue-400 bg-cover flex justify-end items-end">
                        <div className="w-7 h-7 bg-[#FEE036] rounded-tl-2xl rounded-br-2xl" />
                    </div>
                    <div className="w-16 leading-snug font-light text-center text-xs mt-1">
                    Mónica P.
                    </div>
                </div>
                <div className="">
                    <div className="rounded-2xl w-16 aspect-square bg-purple-400 bg-cover flex justify-end items-end">
                        <div className="w-7 h-7 bg-[#FEE036] rounded-tl-2xl rounded-br-2xl" />
                    </div>
                    <div className="w-16 leading-snug font-light text-center text-xs mt-1">
                    Camila T.
                    </div>
                </div>
            </div>
        </div>
    )
};

export {GuestSelectorContainer};