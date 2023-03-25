import React, { useEffect, useState } from "react";
import Dots from "../../img/dots.png";
import Table from "../../components/Table/Table";
import datadb from "../../db/tweets";
import "./Home.scss";

function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const slicedData = datadb.slice(0, 6);
    setData(slicedData);
  }, []);

  return (
    <div className="home">
      <div className="home__header">
        <h3 className="home__header__h3">Welcome back, Maks</h3>
        <div className="home__header__date">
          <p className="home__header__date__p">1 Day</p>
          <p className="home__header__date__p">7 Days</p>
          <p className="home__header__date__p">1 Month</p>
        </div>
      </div>
      <div className="home__tableheader">
        <h3 className="home__tableheader__h3">Tweets</h3>
        <img src={Dots} alt="" />
      </div>
      <Table
        data={data}
        headers={[
          "Tweet",
          "Username",
          "Reetweet_count",
          "Favorite_count",
          "Date",
          "Link",
        ]}
        type={"Tweet"}
      />
      <div className="d-flex gap-5 justify-content-center flex-grow ">
        <div className="w-50">
          <div className="home__tableheader">
            <h3 className="home__tableheader__h3">Projects</h3>
            <img src={Dots} alt="" />
          </div>

          <Table
            data={data}
            headers={[
              "Account",
              "Distinct...",
              "Total...",
              "Favorite...",
              "Retweet...",
              "Record...",
            ]}
            type={"Projects"}
          />
        </div>
        <div className="w-50">
          <div className="home__tableheader">
            <h3 className="home__tableheader__h3">Narratives</h3>
            <img src={Dots} alt="" />
          </div>
          <Table
            data={data}
            headers={[
              "Tweet",
              "Username",
              "Reetweet...",
              "Favorite...",
              "Link",
            ]}
            type={"Narratives"}
          />
        </div>
        {/* <Projects />
        <Narratives /> */}
      </div>
    </div>
  );
}

export default Home;
