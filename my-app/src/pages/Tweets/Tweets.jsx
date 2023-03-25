import React, { useEffect, useState } from "react";
import Search from "../../components/Search/Search";
import "./Tweets.scss";
import Dots from "../../img/dots.png";
import datadb from "../../db/tweets";
import Table from "../../components/Table/Table";
function Tweets() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const slicedData = datadb.slice(0, 6);
    setData(slicedData);
  }, []);
  return (
    <div className="tweets">
      <Search />
      <div className="tweets__body">
        <div className="tweets__body__header">
          <h3 className="tweets__body__header__h3">Users</h3>
          <img src={Dots} alt="" />
        </div>

        <div className="tweets__body__tablewrapper">
          <div className="tweets__body__tablewrapper__minitable">
            <div className="tweets__body__tablewrapper__minitable__h3">
              <h3>Username</h3>
            </div>
            <h3 className="tweets__body__tablewrapper__minitable__count">2</h3>
          </div>
          <div className="tweets__body__tablewrapper__table">
            <Table
              data={data}
              headers={[
                "Username",
                "Occurence",
                "Favorite_count",
                "Retweet__count",
              ]}
              type={"Users"}
            />
          </div>
        </div>
        <div className="tweets__body__header">
          <h3 className="tweets__body__header__h3">Tweets</h3>
          <img src={Dots} alt="" />
        </div>
        <Table
          data={data}
          headers={[
            "Tweet",
            "Username",
            "Retweet_count",
            "Favorite_count",
            "Date",
            "Link",
          ]}
          type={"Tweet"}
        />
      </div>
    </div>
  );
}

export default Tweets;
