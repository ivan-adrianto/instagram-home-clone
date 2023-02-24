import React from "react";
import NavbarShare from "../Share/ShareHeader";
import SearchContact from "../Share/SearchContact";
import ShareActionSection from "../Share/ShareActionSection";
import SuggestionList from "../Share/SuggestionList";

function ShareContainer() {
  return (
    <div className="overflow-hidden h-screen max-w-md">
      <NavbarShare />
      <SearchContact />
      <SuggestionList />
      <ShareActionSection />
    </div>
  );
}

export default ShareContainer;
