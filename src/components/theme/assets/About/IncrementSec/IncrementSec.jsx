import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { useElapsedTime } from "use-elapsed-time";

import "./IncrementSec.scss";

const easing = (t, b, c, d) => {
  return c * ((t = t / d - 1) * t * t + 1) + b;
};

const isPlaying = true;
const start = 1;
const end1 = 98;
const end2 = 14;
const end3 = 50;
const end4 = 34;
const duration = 3;
const options = { isPlaying, duration };

const IncrementSec = () => {
  const { elapsedTime } = useElapsedTime(options);
  const currentValue1 = easing(elapsedTime, start, end1 - start, duration);
  const currentValue2 = easing(elapsedTime, start, end2 - start, duration);
  const currentValue3 = easing(elapsedTime, start, end3 - start, duration);
  const currentValue4 = easing(elapsedTime, start, end4 - start, duration);

  return (
    <>
      {/* <div class="about-counter">
<div class="container">
<div class="row">
<div class="col-lg-12">
<div class="about-increment">
<div class="single-counter">
<h1 class="counter-num count">
    <div className="count-inc" style={{ fontSize: 72 }}>{Math.round(currentValue1)}</div>
    </h1>
<p>Programs</p>
</div>
<div class="single-counter">
<h1 class="counter-num count"><div className="count-inc" style={{ fontSize: 72 }}>{Math.round(currentValue2)}</div></h1>
<p>Locations</p>
</div>
<div class="single-counter">
<h1 class="counter-num fff count"><div className="count-inc" style={{ fontSize: 72 }}>{Math.round(currentValue3)}</div><span>k+</span></h1>

<p>Members</p>
</div>
<div class="single-counter">
<h1 class="counter-num count"><div className="count-inc" style={{ fontSize: 72 }}>{Math.round(currentValue4)}</div></h1>
<p>Coaches</p>
</div>
</div>
</div>
</div>
</div>
</div> */}
      <section className="imgs-page">
        <div className="inc-container">
          <div className="incs-container">
            <div className="services count-inc" style={{ fontSize: 72 }}>
              {Math.round(currentValue1)}

              <p>PROGRAMS</p>
            </div>
            <div className="services count-inc" style={{ fontSize: 72 }}>
              {Math.round(currentValue2)}

              <p>LOCATIONS</p>
            </div>

            <div className="services count-inc" style={{ fontSize: 72 }}>
            <h1> {Math.round(currentValue3)}<span> k+</span></h1>

              <p>MEMBERS</p>
            </div>
            <div className="services count-inc" style={{ fontSize: 72 }}>
              {Math.round(currentValue4)}

              <p>COACHES</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

function App() {
  const [key, setKey] = useState("0");

  useEffect(() => {
    document.addEventListener("keyup", () => {
      setKey(new Date().getTime());
    });
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Count up</h1>
      <p>Press any key to reset counting up</p>
      <IncrementSec key={key} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default IncrementSec;
