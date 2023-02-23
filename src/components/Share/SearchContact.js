import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setReceivers, setSuggestionList } from "../../redux/actionCreators";

function SearchContact() {
  const dispatch = useDispatch();
  const search = (value) => {
    dispatch(setSuggestionList(value));
  };
  const { receivers } = useSelector((state) => state);
  const onKeyDown = (e) => {
    if (e.code === "Backspace" && !e.target.value) {
      const arr = [...receivers];
      arr.pop();
      dispatch(setReceivers(arr));
    }
  };
  return (
    <div className="flex items-center min-h-14 gap-3 px-4 border-b pb-3 pt-2 flex-wrap mt-11">
      <p className="font-bold">To: </p>
      <div className="flex gap-3 max-w-[100vw] overflow-auto hide-scrollbar">
        {receivers.map((receiver, index) => (
          <p
            key={index}
            className="text-sm text-sky-500 bg-sky-100 px-2 py-1 rounded-full"
          >
            {receiver.name}
          </p>
        ))}
        <input
          type="text"
          className="outline-none border-none"
          placeholder="Search..."
          onChange={(e) => search(e.target.value)}
          onKeyDown={(e) => onKeyDown(e)}
        />
      </div>
    </div>
  );
}

export default SearchContact;
