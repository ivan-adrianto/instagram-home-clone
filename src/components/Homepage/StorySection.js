import React, { useRef, useState } from "react";
import myProfile from "../../assets/images/my-profile.jpeg";
import { ReactComponent as PlusIcon } from "../../assets/icons/small-plus-icon.svg";
import { ReactComponent as ChevronIcon } from "../../assets/icons/rounded-chevron.svg";
import contacts from "../../dummyData/contacts";
import ProfilePhoto from "../common/ProfilePhoto";

function StorySection() {
  const ref = useRef(null);
  const [scrollX, setScrollX] = useState(0);
  const scrollRight = () => {
    ref.current.scrollTo({ left: scrollX + 370, behavior: "smooth" });
    setScrollX((prev) => prev + 370);
  };
  const scrollLeft = () => {
    ref.current.scrollTo({ left: scrollX - 370, behavior: "smooth" });
    setScrollX((prev) => prev - 370);
  };
  return (
    <div
      className="flex overflow-auto gap-4 px-4 pt-3 pb-2 hide-scrollbar bg-zinc-50 lg:bg-white border-b lg:border-0"
      ref={ref}
    >
      <div className="relative min-w-fit h-14">
        <ProfilePhoto noBorder photo={myProfile}/>
        <PlusIcon className="absolute bottom-0 right-0 bg-white rounded-full" />
      </div>
      <ChevronIcon
        className={`w-6 h-6 absolute right-4 top-[70px] z-10 cursor-pointer hidden ${
          scrollX < 1000 && "lg:block"
        }`}
        onClick={scrollRight}
      />
      <ChevronIcon
        className={`w-6 h-6 absolute left-4 top-[70px] z-10 cursor-pointer hidden rotate-180 ${
          scrollX > 0 && "lg:block"
        }`}
        onClick={scrollLeft}
      />
      {contacts.map((contact) => (
        <div key={contact.name} className="flex flex-col items-center">
          <ProfilePhoto photo={contact.photo} />
          <p className="text-xxs mt-1">
            {contact.name.length > 10
              ? contact.name.slice(0, 10) + "..."
              : contact.name}
          </p>
        </div>
      ))}
    </div>
  );
}

export default StorySection;
