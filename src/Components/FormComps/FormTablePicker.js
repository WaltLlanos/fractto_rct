function FormTablePicker(props) {
  return (
    <div className="flex">
        {props.children}
    </div>
  );
}
function FormTablePickerLeft({isActive, text, onClick}) {
  return (
      <div
      id="create-table-title"
      className={isActive?`w-1/2 h-20 bg-primary text-white rounded-tl-2xl text-center pt-3 text-sm font-bold cursor-pointer`:`w-1/2 h-20 bg-blue-200 text-white rounded-tl-2xl text-center pt-3 text-sm font-bold cursor-pointer`}
      onClick={onClick}
    >
      {text}
    </div>
  );
}
function FormTablePickerRight({isActive, text, onClick}) {
  return (
      <div
      id="create-table-title"
      className={!isActive?`w-1/2 h-20 bg-blue-200 text-blue-50 rounded-tr-2xl text-center pt-3 text-sm font-bold cursor-pointer`:`w-1/2 h-20 bg-primary text-blue-50 rounded-tr-2xl text-center pt-3 text-sm font-bold cursor-pointer`}
      onClick={onClick}
    >
      {text}
    </div>
  );
}

export { FormTablePickerLeft };
export { FormTablePickerRight };
export { FormTablePicker };
