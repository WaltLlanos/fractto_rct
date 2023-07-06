import { useState, useRef, useEffect } from "react"
import { FormTable } from "./FormTable";
import { Item } from "./Item";
import { ItemsSlider } from "./ItemsSlider";
import { SectionTitle } from "./SectionTitle";

const avatars = [
    {
        avatarId:"av1",
        avatarImage:"av1.png",
    },
    {
        avatarId:"av2",
        avatarImage:"av2.png",
    },
    {
        avatarId:"av3",
        avatarImage:"av3.png",
    },
    {
        avatarId:"av4",
        avatarImage:"av4.png",
    },
    {
        avatarId:"av5",
        avatarImage:"av5.png",
    },
]

function Form({setTableName, page, setPage, user, setUser}) {
    const [newTable, setNewTable] = useState(false);
    const [descriptiveText, setDescriptiveText] = useState("Efectivo");
    const containerRef = useRef(null);


    const handleClick = () => {
        if (containerRef.current) {
          const container = containerRef.current;
          const containerRect = container.getBoundingClientRect();
          const items = container.querySelectorAll(".item");
          let nextItem = null;
      
          // Find the next item based on the current scroll position
          for (let i = 0; i < items.length; i++) {
            const item = items[i];
            const itemRect = item.getBoundingClientRect();
      
            if (itemRect.top > containerRect.top) {
              nextItem = item;
              break;
            }
          }
      
          if (nextItem) {
            nextItem.scrollIntoView({ behavior: "smooth", block: "center" });
          }
        }
      };

    useEffect(() => {
    const container = containerRef.current;
    if (container) {
        const handleScroll = () => {
        const visibleItems = Array.from(container.getElementsByClassName("item")).filter((item) =>
            isElementVisible(item)
        );
        if (visibleItems.length > 0) {
            const currentItem = visibleItems[0];
            const currentItemText = currentItem.getAttribute("data-text");
            if (currentItemText) {
                setDescriptiveText(currentItemText);
                setUser((prevUser) => {
                    return {...prevUser,personMethod: currentItem.getAttribute("data-value")};
                  });

            }
        }
        };

        container.addEventListener("scroll", handleScroll);

        return () => {
        container.removeEventListener("scroll", handleScroll);
        };
    }
    }, []);

    const isElementVisible = (element) => {
        const container = containerRef.current;
        if (!container) return false;
        const containerRect = container.getBoundingClientRect();
        const elementRect = element.getBoundingClientRect();
        return elementRect.top >= containerRect.top && elementRect.bottom <= containerRect.bottom;
    };

    return (
        <form>
            <SectionTitle
                    titleText={"Tu nombre"}
                    hasLink={false}
                    hasCounter={false}
                />
            <div id="userName" className="mx-5">
                <div className="flex w-full justify-between">
                    <input
                        className="w-9/12 h-16 bg-alternate2 rounded-2xl flex items-center justify-start pl-5"
                        placeholder="John Doe"
                        value={user.personName}
                        onChange={(e) => {
                            setUser((prevUser) => {
                                return {...prevUser,personName: e.target.value};
                              });
                        }}
                    />
                    <div className="-mt-6 flex flex-col items-end">
                        <span className="text-xs mb-1 w-full text-center truncate">
                        {descriptiveText}
                        </span>
                        <div>
                            <div ref={containerRef} className="w-16 h-16 overflow-y-auto overscroll-y-contain flex flex-col space-y-3 scrollbar-hide bg-alternate2 rounded-2xl snap-y snap-mandatory">
                                <div className="item h-full w-full flex justify-center items-center flex-none snap-center" data-text="Efectivo" data-value="cash">
                                <span className="text-3xl">💵</span>
                                </div>
                                <div className="item h-full w-full flex justify-center items-center flex-none snap-center" data-text="Tarjeta" data-value="card">
                                <span className="text-3xl">💳</span>
                                </div>
                                <div className="item h-full w-full flex justify-center items-center flex-none snap-center" data-text="Transferencia" data-value="transfer">
                                <span className="text-3xl">📲</span>
                                </div>
                                <div className="item h-full w-full flex justify-center items-center flex-none snap-center" data-text="No pagaré" data-value="free">
                                <span className="text-3xl">🆓</span>
                                </div>
                            </div>
                            <div className="text-3xl -mt-2 text-gray-300 w-full text-center"
                            onClick={handleClick}
                            >
                                ⌄
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <SectionTitle
                    titleText={"Tu avatar"}
                    hasLink={false}
                    hasCounter={false}
                />
            <ItemsSlider
                isAvatar={true}
            >
                {avatars.map(avatar => (
                    <Item
                        key= {avatar.avatarId}
                        itemImage= {avatar.avatarImage}
                        isAvatar={true}
                        selectedAvatar={user.personAvatar}
                        setSelectedAvatar={()=>{
                            setUser((prevUser) => {
                                return {...prevUser,personAvatar: avatar.avatarImage};
                              });
                        }}
                    />
                ))}
            </ItemsSlider>
            <SectionTitle
                    titleText={"Tu mesa"}
                    hasLink={false}
                    hasCounter={false}
                />
            <FormTable
                isNew={newTable}
                toggler={setNewTable}
                setTableName={setTableName}
                page={page}
                setPage={setPage}
            />
            
            
        </form>

    )
}

export {Form};