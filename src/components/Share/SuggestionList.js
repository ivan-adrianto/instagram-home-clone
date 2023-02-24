import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setReceivers } from "../../redux/actionCreators";
import { ReactComponent as CheckIcon } from "../../assets/icons/check-icon.svg";
import ProfilePhoto from "../common/ProfilePhoto";

function SuggestionList() {
  const dispatch = useDispatch();
  const { suggestions, receivers } = useSelector((state) => state);

  const select = (value) => {
    if (!receivers.includes(value)) {
      dispatch(setReceivers([...receivers, value]));
    } else {
      const arr = [...receivers].filter((item) => item !== value);
      dispatch(setReceivers(arr));
    }
  };

  return (
    <div
      className={`px-4 h-full lg:h-[451px] overflow-auto ${
        receivers.length > 0 ? "pb-[270px] lg:pb-0" : "pb-40 lg:pb-0"
      }`}
    >
      <p className="text-sm font-bold my-3">Suggested</p>
      {suggestions.map((contact, index) => (
        <div
          key={index}
          className="flex justify-between items-center mb-4 cursor-pointer"
          onClick={() => select(contact)}
        >
          <div className="flex gap-3">
            <ProfilePhoto photo={contact.photo} md noBorder />
            <div>
              <p className="text-sm font-bold">{contact.name}</p>
              <p className="text-sm text-gray-500">{contact.alias}</p>
            </div>
          </div>
          {receivers.includes(contact) ? (
            <CheckIcon />
          ) : (
            <div className="rounded-full h-6 w-6 border-[2px] border-gray-800"></div>
          )}
        </div>
      ))}
    </div>
  );
}

export default SuggestionList;
