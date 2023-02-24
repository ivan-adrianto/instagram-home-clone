import React from "react";
import NavbarShare from "../Share/NavbarShare";
import SearchContact from "../Share/SearchContact";
import ShareActionSection from "../Share/ShareActionSection";
import SuggestionList from "../Share/SuggestionList";

function ShareContainer() {
  return (
    <div className="overflow-hidden h-screen max-w-[470px]">
      <NavbarShare />
      <SearchContact />
      <SuggestionList />
      <ShareActionSection />
    </div>
  );
}

export default ShareContainer;
