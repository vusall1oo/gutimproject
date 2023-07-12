import React from 'react'
import "../TrainingSec/TrainingSec.scss"
import sportImg from "../../../../../img/services/service-pic.jpg";
import sportImg1 from "../../../../../img/services/service-icon-1.png";
import sportImg2 from "../../../../../img/services/service-icon-2.png";
import sportImg3 from "../../../../../img/services/service-icon-3.png";
import sportImg4 from "../../../../../img/services/service-icon-4.png";
function TrainingSec() {
  return (
    <>
        <section className="imgs-page">
        <div className="grid-container">
          <div className="grid-item-img">
            <img src={sportImg} alt="" />
          </div>
          <div className="grids-container">
            <div className="grid-item">
              <div className="services-one">
                <img src={sportImg1} alt="" />
                <h4>Strategies</h4>
                <p>
                  Aenean massa. Cum sociis Theme et natoque penatibus et magnis
                  dis part urient montes.
                </p>
              </div>
              <div className="services-two">
                <img src={sportImg2} alt="" />
                <h4>Workout</h4>
                <p>
                  Aenean massa. Cum sociis Theme et natoque penatibus et magnis
                  dis part urient montes.
                </p>
              </div>
            </div>
            <div className="grid-item-2">
              <div className="services-three">
                <img src={sportImg3} alt="" />
                <h4>Yoga</h4>
                <p>
                  Aenean massa. Cum sociis Theme et natoque penatibus et magnis
                  dis part urient montes.
                </p>
              </div>
              <div className="services-four">
                <img src={sportImg4} alt="" />
                <h4>Weight Loss</h4>
                <p>
                  Aenean massa. Cum sociis Theme et natoque penatibus et magnis
                  dis part urient montes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default TrainingSec
