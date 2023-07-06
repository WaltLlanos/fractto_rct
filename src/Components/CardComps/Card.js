import { CardImg } from "./CardImg";
import { CardInfo } from "./CardInfo";
import { CardShareInfo } from "./CardInfo";
import { CardOrderInfo } from "./CardInfo";

function Card({
  isSmall,
  resHandle,
  onClick,
  resName,
  resAddress,
  tableName,
  page,
  setPage,
  setSearchValue,
  visible,
  setVisible,
  user,
  setUser,
  orderValue,
  setOrderValue
}) {
  return (
    <div className="w-full rounded-2xl overflow-hidden flex-none snap-center">
      <CardImg isSmall={isSmall} resHandle={resHandle} page={page} />
      {page == "share" && <CardShareInfo tableName={tableName} />}
      <CardInfo
        onClick={onClick}
        resName={resName}
        resAddress={resAddress}
        resHandle={resHandle}
        setPage={setPage}
        page={page}
        setSearchValue={setSearchValue}
        visible={visible}
        setVisible={setVisible}
      />
      {visible && (
        <CardOrderInfo
          tableName={tableName}
          setVisible={setVisible}
          user={user}
          setUser={setUser}
        />
      )}
    </div>
  );
}

export { Card };
