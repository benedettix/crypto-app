import React, { useState } from "react";
import DatePicker from "react-multi-date-picker";
import "./Search.scss";
import SearchIcon from "../../img/search.png";
import DatePict from "../../img/date.png";

import { MultiSelect } from "react-multi-select-component";
function Search() {
  const optionUsernames = [
    { label: "User 1", value: "grapes" },
    { label: "User 2", value: "mango" },
    { label: "User 3", value: "strawberry", disabled: true },
  ];
  const optionAccounts = [
    { label: "Account 1 ", value: "grapes" },
    { label: "Account 2 ", value: "mango" },
    { label: " Account 3", value: "strawberry", disabled: true },
  ];
  const today = new Date();
  const tomorrow = new Date();

  tomorrow.setDate(tomorrow.getDate() + 1);

  const [values, setValues] = useState([today, tomorrow]);
  const [selectedUsernames, setSelectedUsernames] = useState([
    { label: "Username" },
  ]);
  const [selectedAccounts, setSelectedAccounts] = useState([
    { label: "Account" },
  ]);
  return (
    <div className="search">
      <h3 className="search__h3">Tweets</h3>
      <div className="search__wrapper">
        <div className="search__wrapper__input">
          <img src={SearchIcon} alt="" />
          <input placeholder="Search" type="text" />
        </div>
        <div className="search__wrapper__date">
          <img src={DatePict} alt="" />
          <DatePicker
            format="MMMM DD YYYY"
            range
            value={values}
            onChange={setValues}
          />
        </div>

        <div className="search__wrapper__username">
          <MultiSelect
            options={optionUsernames}
            value={selectedUsernames}
            onChange={setSelectedUsernames}
            labelledBy="Select"
          />
        </div>
        <div className="search__wrapper__accounts">
          <MultiSelect
            options={optionAccounts}
            value={selectedAccounts}
            onChange={setSelectedAccounts}
            labelledBy="Select"
          />
        </div>
      </div>
    </div>
  );
}

export default Search;
