import React from "react";
import "./Table.scss";

import Copy from "../../img/copy.png";
import Previous from "../../img/previous.png";
import Next from "../../img/next.png";
import NextNotActive from "../../img/next-notactive.png";
function Table({ data, headers, type }) {
  console.log(headers[0]);
  return (
    <div className="table">
      {/* <div className="table__header">
        <h3 className="table__header__h3">{tableName}</h3>
        <img src={Dots} alt="" />
      </div> */}
      <div className="table__wrapper">
        <div className="table__wrapper__body">
          <table className="table__wrapper__body__table">
            <tr className="table__wrapper__body__table__header">
              {/* <th>Tweet</th>
            <th>Username</th>
            <th>Reetweet_count</th>
            <th>Favorite_count</th>
            <th>Date</th>
            <th>Link</th> */}
              {headers.map((header) => {
                return <th>{header}</th>;
              })}
            </tr>

            {type === "Tweet"
              ? data.map((res) => {
                  return (
                    <tr className="table__wrapper__body__table__body">
                      <td className={type === "Tweet" ? "w-25" : ""}>
                        {res.tweet}
                      </td>
                      <td>{res.username}</td>
                      <td>{res.retweet_count}</td>
                      <td>{res.favorite_count}</td>
                      <td>{res.date}</td>
                      <td>
                        <img src={Copy} alt="" />
                      </td>
                    </tr>
                  );
                })
              : null}

            {type === "Projects"
              ? data.map((res) => {
                  return (
                    <tr className="table__wrapper__body__table__body">
                      <td className={type === "Tweet" ? "w-25" : ""}>
                        {res.username}
                      </td>

                      <td>{res.favorite_count}</td>
                      <td>{res.favorite_count}</td>
                      <td>{res.favorite_count}</td>
                      <td>{res.retweet_count}</td>
                      <td>{res.retweet_count}</td>
                    </tr>
                  );
                })
              : null}

            {type === "Narratives"
              ? data.map((res) => {
                  return (
                    <tr className="table__wrapper__body__table__body">
                      <td className={type === "Tweet" ? "w-25" : ""}>
                        {res.tweet.slice(0, 35)}
                      </td>

                      <td>{res.username}</td>

                      <td>{res.retweet_count}</td>
                      <td>{res.favorite_count}</td>
                      <td>
                        <img src={Copy} alt="" />
                      </td>
                    </tr>
                  );
                })
              : null}

            {type === "Users"
              ? data.map((res) => {
                  return (
                    <tr className="table__wrapper__body__table__body">
                      <td className={type === "Tweet" ? "w-25" : ""}>
                        {res.username}
                      </td>

                      <td>{res.account_id}</td>
                      <td>{res.favorite_count}</td>
                      <td>{res.retweet_count}</td>
                    </tr>
                  );
                })
              : null}

            {/* <tr className="table__wrapper__body__table__body">
              <td>
                The crypto #AI narrative is a firestorm! 50x overvaluations in
                the next bull run are likely Research now and find the next AI
                $ETH OR $BTC 🧵16 AI projects that are on FIRE right now👇
                https://t.co/d1cTWsLqiP
              </td>
              <td>thehiddenmaze</td>
              <td>3</td>
              <td>10</td>
              <td>02.03. 2023, 17:08:24</td>
              <td>
                <img src={Copy} alt="" />
              </td>
            </tr> */}
          </table>
          <div className="table__wrapper__body__footer">
            <div className="table__wrapper__body__footer__left">
              <img src={Previous} alt="" /> <span>Previous</span>
            </div>

            <div className="table__wrapper__body__footer__middle">
              <span className="table__wrapper__footer__middle__span table__wrapper__body__footer__middle__span--active">
                1
              </span>
              <span className="table__wrapper__body__footer__middle__span">
                2
              </span>
              <span className="table__wrapper__body__footer__middle__span">
                3
              </span>
              <span className="table__wrapper__body__footer__middle__span">
                ...
              </span>
              <span className="table__wrapper__body__footer__middle__span">
                1777
              </span>
              <span className="table__wrapper__body__footer__middle__span">
                1778
              </span>
              <span className="table__wrapper__body__footer__middle__span">
                1779
              </span>
            </div>

            <div className="table__wrapper__body__footer__right">
              <span>Next</span> <img src={Next} alt="" />
              {/* NextNotActive */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;
