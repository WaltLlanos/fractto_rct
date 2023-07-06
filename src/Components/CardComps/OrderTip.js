function OrderTip({setVisible, orderValue}) {
    return(
        <div className="w-full h-24 bg-alternate1 flex flex-col justify-between">
            <div className="w-full flex items-center mt-4">
            <div className="w-2/3 flex items-center justify-between pl-5 truncate">
                <span className="w-1/6 text-2xl">🪙</span>
                <form className="w-5/6 flex justify-around">
                <div className="w-1/4">
                    <input
                    id="no-tip"
                    name="tip"
                    type="radio"
                    defaultValue={0}
                    className="peer appearance-none"
                    />
                    <label
                    htmlFor="no-tip"
                    className="text-gray-400  peer-checked:text-black peer-checked:font-bold"
                    >
                    0%
                    </label>
                </div>
                <div className="w-1/4">
                    <input
                    id="low-tip"
                    name="tip"
                    type="radio"
                    defaultValue={5}
                    className="peer appearance-none"
                    />
                    <label
                    htmlFor="low-tip"
                    className="text-gray-400  peer-checked:text-black peer-checked:font-bold"
                    >
                    5%
                    </label>
                </div>
                <div className="w-1/4">
                    <input
                    id="mid-tip"
                    name="tip"
                    type="radio"
                    defaultValue={10}
                    className="peer appearance-none"
                    defaultChecked=""
                    />
                    <label
                    htmlFor="mid-tip"
                    className="text-gray-400 peer-checked:text-black peer-checked:font-bold"
                    >
                    10%
                    </label>
                </div>
                <div className="w-1/4">
                    <input
                    id="top-tip"
                    name="tip"
                    type="radio"
                    defaultValue={12}
                    className="peer appearance-none"
                    />
                    <label
                    htmlFor="top-tip"
                    className="text-gray-400 peer-checked:text-black peer-checked:font-bold"
                    >
                    12%
                    </label>
                </div>
                </form>
            </div>
            <div className="w-1/3 flex items-center justify-end pr-5">
                <span className="">{orderValue}</span>
            </div>
            </div>
            <button
            id="orderBackButton"
            className="text-5xl font-extralight text-gray-400 w-full text-center"
            onClick={() => setVisible(false)}
            >
            ^
            </button>
      </div>
    )
};

export {OrderTip};
