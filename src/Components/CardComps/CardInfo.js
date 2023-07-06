import { useEffect, useState } from "react";
import { OrderItem, OrderItemTitle } from "../OrderItem";
import { OrderTip } from "./OrderTip";

function CardInfo({
  onClick,
  resName,
  resAddress,
  resHandle,
  page,
  setPage,
  setSearchValue,
  visible,
  setVisible,
}) {
  return (
    <div
      id="card-bottom"
      className={`h-20 w-full ${page !== "closed" ? "bg-alternate1" : "bg-orange-500 text-white"} p-4 flex justify-between`}
    >
      <div className="flex items-center w-2/3">
        <div className="max-h-12 h-full aspect-square bg-red-200 rounded-lg bg-cover overflow-hidden">
          <img src={`/img/${resHandle}_logo.jpg`} />
        </div>
        <div className="ml-2 flex flex-col">
          <span className="text-left font-bold text-sm xs:text-lg w-36 xs:w-44 truncate">
            {resName}
          </span>
          <span
            id="card-bottom-left-text-location"
            className="text-left font-light text-xs xs:text-sm w-32 xs:w-44 truncate"
          >
            {resAddress}
          </span>
        </div>
      </div>
      <div id="card-bottom-right" className="h-full flex items-center">
        <CardButton
          onClick={onClick}
          page={page}
          setPage={setPage}
          setSearchValue={setSearchValue}
          resName={resName}
          visible={visible}
          setVisible={setVisible}
        />
        <button
          id="card-button-share"
          className="w-auto py-3 px-4 bg-primary rounded-xl text-white font-light text-sm truncate hidden"
        >
          ¡Listo!
        </button>
        <button
          id="card-button-order"
          className="w-auto py-3 px-4 bg-primary rounded-xl text-white font-light text-sm truncate hidden"
        >
          Mi Orden
        </button>
      </div>
    </div>
  );
}

function CardButton({
  onClick,
  page,
  setPage,
  setSearchValue,
  resName,
  visible,
  setVisible,
}) {
  return (
    <div>
      {page !== "info" && !visible && page !== "closed" ? (
        <button
          id="card-button-enter"
          className="w-auto py-3 px-4 bg-primary rounded-xl text-white font-light text-sm truncate"
          onClick={() => {
            page == "home" && setSearchValue(resName);
            page == "home" && onClick();
            page == "share" && setPage("table");
            page == "table" && setVisible(true);
          }}
        >
          {page == "home" && "Ingresar"}
          {page == "share" && "¡Listo!"}
          {page == "table" && "Mi Orden"}
        </button>
      ):""}
    </div>
  );
}

function CardOrderInfo({setVisible, user, setUser}) {
  const [lastAssignedId, setLastAssignedId] = useState(1);

  const starters = Object.values(user.personOrder.starters);
  const mains = Object.values(user.personOrder.mains);
  const drinks = Object.values(user.personOrder.drinks);
  const desserts = Object.values(user.personOrder.desserts);

  const addItem = (itemType) => {
    const items = Object.values(user.personOrder[itemType]);
    const isAnyItemEmpty = items.some((item) => item.name === "" && item.value === "");

    if (items.length >= 1 && !isAnyItemEmpty) {
      setUser((currentUser) => {
        const newItem = { id: `i${lastAssignedId + 1}`, name: "", value: "" };
        const updatedItems = [...currentUser.personOrder[itemType], newItem];
        console.log(lastAssignedId);
        return {
          ...currentUser,
          personOrder: { ...currentUser.personOrder, [itemType]: updatedItems },
        };
      });
      setLastAssignedId((prevId) => prevId + 1);
    }
  };
  
  // Calculate the total order value
  const calculateTotal = (user) => {
    const startersTotal = user.personOrder.starters.reduce(
      (total, item) => total + (item.value ? Number(item.value) : 0),
      0
    );
    const mainsTotal = user.personOrder.mains.reduce(
      (total, item) => total + (item.value ? Number(item.value) : 0),
      0
    );
    const drinksTotal = user.personOrder.drinks.reduce(
      (total, item) => total + (item.value ? Number(item.value) : 0),
      0
    );
    const dessertsTotal = user.personOrder.desserts.reduce(
      (total, item) => total + (item.value ? Number(item.value) : 0),
      0
    );

    return startersTotal + mainsTotal + drinksTotal + dessertsTotal;
  };

  const orderValue = calculateTotal(user);

  useEffect(() => {
    setUser((prevUser) => ({
      ...prevUser,
      personOrderValue: orderValue,
    }));
  }, [orderValue, setUser]);

  return (
    <div id="order-info" className="px-3 bg-alternate1">
      <div id="order-info-scroller" className="w-full aspect-[4/3.9] bg-white rounded-2xl flex flex-col items-center overflow-y-auto overscroll-y-auto scrollbar-hide">
        <div>
          <OrderItemTitle
            name="Entrada"
            icon="🫒"
            addItem={() => addItem('starters')}
          />
          <OrderItem
            items={starters}
            namePlaceholder="Ensalada de la Barra"
            valuePlaceholder={17200}
            orderValue={orderValue}
            setOrders={(updateOrders) => {
              setUser((currentUser) => {
                const updatedStarters = updateOrders(
                  currentUser.personOrder.starters
                );
                return {
                  ...currentUser,
                  personOrder: {
                    ...currentUser.personOrder,
                    starters: updatedStarters,
                  },
                };
              });
            }}
          />
        </div>
        <div>
          <OrderItemTitle 
            name="Plato Fuerte" 
            icon="🍛"             
            addItem={() => addItem('mains')}
            />
          <OrderItem
            items={mains}
            namePlaceholder="Crepe Pollo y Queso"
            valuePlaceholder={23700}
            setOrders={(updateOrders) => {
              setUser((currentUser) => {
                const updatedMains = updateOrders(
                  currentUser.personOrder.mains
                );
                return {
                  ...currentUser,
                  personOrder: {
                    ...currentUser.personOrder,
                    mains: updatedMains,
                  },
                };
              });
            }}
          />
        </div>
        <div>
          <OrderItemTitle name="Bebida" icon="🥤" addItem={() => addItem('drinks')}/>
          <OrderItem
            items={drinks}
            namePlaceholder="Coca-Cola Zero"
            valuePlaceholder={7500}
            setOrders={(updateOrders) => {
              setUser((currentUser) => {
                const updatedDrinks = updateOrders(
                  currentUser.personOrder.drinks
                );
                return {
                  ...currentUser,
                  personOrder: {
                    ...currentUser.personOrder,
                    drinks: updatedDrinks,
                  },
                };
              });
            }}
          />
        </div>
        <div>
          <OrderItemTitle 
            name="Postre" 
            icon="🍨" 
            addItem={() => {
              addItem('desserts');
              setTimeout(() => {
                const container = document.getElementById("order-info-scroller");
                if (container) {
                  container.scrollTop = container.scrollHeight;
                }
              }, 100);
              }}/>
          <OrderItem
            items={desserts}
            namePlaceholder="Helado de Vainilla"
            valuePlaceholder={5500}
            setOrders={(updateOrders) => {
              setUser((currentUser) => {
                const updatedDesserts = updateOrders(
                  currentUser.personOrder.desserts
                );
                return {
                  ...currentUser,
                  personOrder: {
                    ...currentUser.personOrder,
                    desserts: updatedDesserts,
                  },
                };
              });
            }}
          />
        </div>
      </div>
      <OrderTip
        setVisible={setVisible}
        orderValue={user.personOrderValue}
      />
    </div>
  );
}

function CardShareInfo({ tableName }) {
  return (
    <div
      id="share-info"
      className="w-full h-64 bg-alternate1 px-5 flex flex-col items-center"
    >
      <span className="font-bold text-lg text-center mt-7">
        ¡Excelente!, ya tienes una mesa.
      </span>
      <span className="text-center mt-7">
        Invita a tus amigos a tu mesa compartiendo el siguiente link:
      </span>
      <div className="w-full h-16 bg-white rounded-2xl flex justify-between items-center mt-7">
        <div className="ml-5 font-mono">
          <span>www.fractto.co/</span>
          <span>{tableName}</span>
        </div>
        <span className="mr-5">✉️</span>
      </div>
    </div>
  );
}

export { CardInfo };
export { CardOrderInfo };
export { CardShareInfo };
