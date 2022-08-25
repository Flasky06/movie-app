import React from "react";
import Categories from "./Categories";
import Search from "./Search";

function TopBar() {
  return (
    <div>
      <Search />
      <Categories />
      <hr />
    </div>
  );
}

export default TopBar;
