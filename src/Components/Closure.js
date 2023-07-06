import { useState, useEffect, useRef  } from "react"
import { GuestSelectorContainer } from "./GuestSelectorContainer";

function Closure({totalSatPeople, setPage, page, orderValue, setOrderValue}) {
    const [confirm, setConfirm] = useState(false);
    const closureRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
        if (closureRef.current && !closureRef.current.contains(event.target)) {
            setConfirm(false);
        }
        };

        document.addEventListener("click", handleClickOutside);

        return () => {
        document.removeEventListener("click", handleClickOutside);
        };
    }, []);
  
    return (
    <section
      id="closure"
      className="fixed bottom-1 w-full p-5 flex flex-col justify-between items-center"
      ref={closureRef}
    >
        {confirm && totalSatPeople !== 1 ? <GuestSelectorContainer
            confirm={confirm}
            setConfirm={setConfirm}
        />:""}
        <div className="w-full flex justify-between items-center">
            {!confirm && <div id="table-value" className="w-2/5 h-full">
                <span className="font-bold text-lg">Total:</span>
                <span className="text-lg text-alternate1 text-right">{orderValue}</span>
            </div>}
            <div
            id="close-table-container"
            className={`h-16 ${!confirm ? "w-3/5" : "w-full"} rounded-2xl bg-orange-500 flex justify-between items-center`}
            status="open"
            >
                <div className="rounded-xl ml-5 mr-2 w-10 aspect-square bg-orange-400 bg-cover flex-none" />
                {confirm == true && <span
                    id="close-empty-table-disclaimer"
                    className="text-white text-sm w-5/12"
                >
                    {totalSatPeople === 1 ? "¿Quieres cerrar la mesa sin haber ordenado?" : "¿Quieres cerrar la mesa y dividir la cuenta?"}
                </span>}
                <span
                    id="close-table-guest-disclaimer"
                    className="hidden text-white text-sm w-5/12"
                >
                    Pagaré por<span className="font-bold"> Camila T.</span>
                </span>
                <button
                    id="close-table-button"
                    className="py-2 px-4 mr-2 text-white truncate border-white border rounded-full"
                    onClick={() => {
                        confirm == false && setConfirm(true);
                        confirm == true && setPage("closed");
                      }}
                >
                    {confirm == false ? "Cerrar mesa" : "Continuar"}
                </button>
            </div>
        </div>
    </section>
  );
}

export { Closure };
