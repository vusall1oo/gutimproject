import React, { useState } from "react";
import "../ClassTables/ClassTables.scss";

const ClassTimetable = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  const shouldShowClass = (tsmeta) => {
    if (activeFilter === "all") {
      return true;
    }
    return activeFilter === tsmeta;
  };

  return (
    <section className="classes-timetable spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h2>Class Timetable</h2>
            </div>
            <div className="nav-controls">
              <ul>
                <li
                  className={activeFilter === "all" ? "active" : ""}
                  onClick={() => handleFilterClick("all")}
                >
                  All Class
                </li>
                <li
                  className={activeFilter === "gym" ? "active" : ""}
                  onClick={() => handleFilterClick("gym")}
                >
                  Gym
                </li>
                <li
                  className={activeFilter === "crossfit" ? "active" : ""}
                  onClick={() => handleFilterClick("crossfit")}
                >
                  Crossfit
                </li>
                <li
                  className={activeFilter === "cardio" ? "active" : ""}
                  onClick={() => handleFilterClick("cardio")}
                >
                  Cardio
                </li>
                <li
                  className={activeFilter === "body" ? "active" : ""}
                  onClick={() => handleFilterClick("body")}
                >
                  Body
                </li>
                <li
                  className={activeFilter === "yoga" ? "active" : ""}
                  onClick={() => handleFilterClick("yoga")}
                >
                  Yoga
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="schedule-table">
              <table>
                <thead>
                  <tr>
                    <th></th>
                    <th>Monday</th>
                    <th>Tuesday</th>
                    <th>Wednesday</th>
                    <th>Thursday</th>
                    <th>Friday</th>
                    <th>Saturday</th>
                    <th>Sunday</th>
                  </tr>
                </thead>
                <tbody>
                <tr>
  <td className="workout-time">10.00</td>
  {shouldShowClass('gym') ? (
    <>
    <td className="hover-bg ts-item" data-tsmeta="gym">
      <h6>Gym</h6>
      <span>10.00 - 11.00</span>
      <div className="trainer-name">
        John Smith
      </div>
    </td>

   <td></td>
    </>
  ) : <></>}
 
  {shouldShowClass('yoga') ? (
   <>
   
   <td className="hover-bg ts-item" data-tsmeta="yoga">
      <h6>Yoga</h6>
      <span>10.00 - 12.00</span>
      <div className="trainer-name">
        John Smith
      </div>
    </td>
    <td></td>
    </>
  ) : <td></td>}
  {shouldShowClass('body') ? (
  <>
    <td className="hover-bg ts-item" data-tsmeta="body">
      <h6>Body</h6>
      <span>10.00 - 12.00</span>
      <div className="trainer-name">
        John Smith
      </div>
    </td>

    <td></td>
  </>
  ) : <td></td>}
 
 
  {shouldShowClass('cardio') ? (
   <>

  <td className="hover-bg ts-item" data-tsmeta="cardio">
      <h6>Cardio</h6>
      <span>10.00 - 11.00</span>
      <div className="trainer-name">
        John Smith
      </div>
          </td>
   
   </>
  ) : <td></td>}

 
</tr>

                  <tr>
                    <td className="workout-time">14.00</td>
                    <td></td>
                    {shouldShowClass("crossfit") ? (
                      <td className="hover-bg ts-item" data-tsmeta="crossfit">
                        <h6>Running</h6>
                        <span>14.00 - 16.00</span>
                        <div className="trainer-name">John Smith</div>
                      </td>
                    ) : (
                      <td></td>
                    )}
                    <td></td>
                    {shouldShowClass("crossfit") ? (
                      <td className="hover-bg ts-item" data-tsmeta="crossfit">
                        <h6>Box</h6>
                        <span>14.00 - 15.00</span>
                        <div className="trainer-name">John Smith</div>
                      </td>
                    ) : (
                      <td></td>
                    )}
                    <td></td>
                    {shouldShowClass("gym") ? (
                      <td className="hover-bg ts-item" data-tsmeta="gym">
                        <h6>Gym</h6>
                        <span>14.00 - 16.00</span>
                        <div className="trainer-name">John Smith</div>
                      </td>
                    ) : (
                      <td></td>
                    )}
                  </tr>
                  <tr>
                    <td className="workout-time">16.00</td>
                    {shouldShowClass("cardio") ? (
                      <td className="hover-bg ts-item" data-tsmeta="cardio">
                        <h6>Cardio</h6>
                        <span>16.00 - 18.00</span>
                        <div className="trainer-name">John Smith</div>
                      </td>
                    ) : (
                      <td></td>
                    )}
                    <td></td>
                    {shouldShowClass("gym") ? (
                      <td className="hover-bg ts-item" data-tsmeta="gym">
                        <h6>Gym</h6>
                        <span>16.00 - 19.00</span>
                        <div className="trainer-name">John Smith</div>
                      </td>
                    ) : (
                      <td></td>
                    )}
                    <td></td>
                    {shouldShowClass("yoga") ? (
                      <td className="hover-bg ts-item" data-tsmeta="yoga">
                        <h6>Yoga</h6>
                        <span>16.00 - 18.00</span>
                        <div className="trainer-name">John Smith</div>
                      </td>
                    ) : (
                      <td></td>
                    )}
                    <td></td>
                    {shouldShowClass("gym") ? (
                      <td className="hover-bg ts-item" data-tsmeta="gym">
                        <h6>Gym</h6>
                        <span>16.00 - 20.00</span>
                        <div className="trainer-name">John Smith</div>
                      </td>
                    ) : (
                      <td></td>
                    )}
                  </tr>
                  <tr>
                    <td className="workout-time">18.00</td>
                    {shouldShowClass("crossfit") ? (
                      <td className="hover-bg ts-item" data-tsmeta="crossfit">
                        <h6>Crossfit</h6>
                        <span>18.00 - 21.00</span>
                        <div className="trainer-name">John Smith</div>
                      </td>
                    ) : (
                      <td></td>
                    )}
                    {shouldShowClass("body") ? (
                      <td className="hover-bg ts-item" data-tsmeta="body">
                        <h6>Body</h6>
                        <span>18.00 - 20.00</span>
                        <div className="trainer-name">John Smith</div>
                      </td>
                    ) : (
                      <td></td>
                    )}
                    <td></td>
                    {shouldShowClass("crossfit") ? (
                      <td className="hover-bg ts-item" data-tsmeta="crossfit">
                        <h6>Crossfit</h6>
                        <span>18.00 - 21.00</span>
                        <div className="trainer-name">John Smith</div>
                      </td>
                    ) : (
                      <td></td>
                    )}
                    <td></td>
                    {shouldShowClass("cardio") ? (
                      <td className="hover-bg ts-item" data-tsmeta="cardio">
                        <h6>Cardio</h6>
                        <span>18.00 - 22.00</span>
                        <div className="trainer-name">John Smith</div>
                      </td>
                    ) : (
                      <td></td>
                    )}
                    <td></td>
                  </tr>
                  <tr>
                    <td className="workout-time">20.00</td>
                    <td></td>
                    {shouldShowClass("gym") ? (
                      <td className="hover-bg ts-item" data-tsmeta="gym">
                        <h6>Gym</h6>
                        <span>20.00 - 12.00</span>
                        <div className="trainer-name">John Smith</div>
                      </td>
                    ) : (
                      <td></td>
                    )}
                    {shouldShowClass("body") ? (
                      <td className="hover-bg ts-item" data-tsmeta="body">
                        <h6>Body</h6>
                        <span>20.00 - 21.00</span>
                        <div className="trainer-name">John Smith</div>
                      </td>
                    ) : (
                      <td></td>
                    )}
                    <td></td>
                    {shouldShowClass("cardio") ? (
                      <td className="hover-bg ts-item" data-tsmeta="cardio">
                        <h6>Cardio</h6>
                        <span>20.00 - 22.00</span>
                        <div className="trainer-name">John Smith</div>
                      </td>
                    ) : (
                      <td></td>
                    )}
                    <td></td>
                    {shouldShowClass("crossfit") ? (
                      <td className="hover-bg ts-item" data-tsmeta="crossfit">
                        <h6>Crossfit</h6>
                        <span>20.00 - 21.00</span>
                        <div className="trainer-name">John Smith</div>
                      </td>
                    ) : (
                      <td></td>
                    )}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClassTimetable;
