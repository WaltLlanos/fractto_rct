
function OrderItemTitle({ name, icon, addItem }) {
  return (
    <div className="w-full bg-white sticky top-0 flex border-b-2 border-[#F6F8FF]">
      <div className="w-full h-16 pl-3 flex justify-start items-center">
        <span className="mx-5">{icon}</span>
        <span className="font-bold">{name}</span>
      </div>
      <div className="w-3/12 h-16 pr-3 flex items-center justify-end">
        <button 
          className="h-12 aspect-square bg-white rounded-2xl text-xl text-gray-500"
          onClick={addItem}
          >
          ➕
        </button>
      </div>
    </div>
  );
}

function OrderItem({ items, namePlaceholder, valuePlaceholder, setOrders, orderValue }) {
  return (
    <div className="mt-3">
      {items.map((item, index) => (
        <div
          className="w-auto h-auto overflow-x-auto overscroll-x-contain flex scrollbar-hide snap-x snap-mandatory snap-always"
          key={item.id}
        >
          <div className="flex-none w-full snap-start">
            <div className="w-full flex px-3 justify-between mb-3">
              <input
                className="w-[63%] h-16 border-[#F6F8FF] border-2 rounded-xl flex justify-start items-center px-5 truncate"
                placeholder={namePlaceholder}
                value={item.name}
                onChange={(e) => {
                  setOrders((orders) => {
                    return orders.map((o, i) => {
                      if (i === index) {
                        return { ...o, name: e.target.value };
                      } else {
                        return o;
                      }
                    });
                  });
                }}
              />
              <input
                className="w-4/12 h-16 border-[#F6F8FF] border-2 rounded-xl flex justify-end items-center text-gray-700 text-right px-5 truncate"
                type="number"
                min={1}
                placeholder={valuePlaceholder}
                value={item.value}
                onInput={(e) => {
                  let input = e.target.value;
                  input = input.replace(/\W|_/g, '');
                  e.target.value = input
                  
                  setOrders((orders) => {
                    return orders.map((o, i) => {
                      if (i === index) {
                        return { ...o, value: e.target.value };
                      } else {
                        return o;
                      }
                    });
                  });
                }}
              />
            </div>
          </div>
          <div className={`w-20 h-16 bg-red-500 flex-none ${item.name || item.value ? "snap-start" :"!bg-red-300"} `}>
            <button 
            className="w-full h-full flex justify-center items-center invert"
            onClick={() => {
              setOrders((orders) => {
                return orders.map((o, i) => {
                  if (i === index) {
                    if (i === 0 && items.length === 1) {
                      return { ...o, value: "", name: "" };
                    }
                    return false; // Exclude this item from the updated array
                  }
                  return o; // Keep all other items in the array
                }).filter(Boolean); // Remove any false values from the array
              });
            }}
            >
              <img className="w-5" src={`/img/icons/trash.png`} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export { OrderItemTitle };
export { OrderItem };
