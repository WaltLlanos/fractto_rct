
function Item({
  itemImage,
  itemName,
  itemBgColor,
  itemOverlay,
  isAvatar,
  selectedAvatar,
  setSelectedAvatar,
}) {
  const isSelected = selectedAvatar === itemImage;

  const handleClick = () => {
    if (isAvatar && !itemOverlay) {
      setSelectedAvatar();
    }
  };

  const itemClass = isSelected ? "w-[4.3rem]" : "w-16";

  return (
    <div className={`relative ${itemClass}`} onClick={handleClick}>
      <div
        className={`rounded-2xl ${itemClass} aspect-square ${itemBgColor} flex justify-center items-center overflow-hidden ${!isAvatar && "p-2"}`}
      >
        {!itemOverlay && !isAvatar ? (
          <img src={`/img/apps/${itemImage}`} />
        ) : (
          ""
        )}
        {isAvatar && <img src={`/img/avatars/${itemImage}`} />}
        {itemOverlay && isAvatar ? (
          <div className="absolute right-0 top-9 w-7 h-7 bg-[#FEE036] rounded-tl-2xl rounded-br-2xl flex justify-center items-center p-[0.3rem]">
            <img src={`/img/icons/${itemOverlay}.png`} />
          </div>
        ) : (
          ""
        )}
      </div>
      <div className={`w-16 leading-snug font-light text-center text-xs mt-1 ${itemOverlay && "truncate"}`}>
        {itemName}
      </div>
    </div>
  );
}

export { Item };
