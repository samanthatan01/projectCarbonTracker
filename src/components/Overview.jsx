import React from "react";
import styles from "./Overview.module.css";

const Overview = (props) => {
  let totalDistance = 0;
  let totalCarbon = 0;

  props.entries?.records?.map((item) => {
    totalDistance += item.fields.distance_value;
    totalCarbon += item.fields.carbon_kg;
  });

  return (
    <div className="container">
      <br />
      <div className="row">
        <label className={`${styles.overviewlabel}`}>
          Total Distance Travelled
        </label>
        <br />
        <br />
        <label className={`${styles.overviewnumber}`}>
          {`${totalDistance} KM`}{" "}
        </label>
      </div>

      <br />

      <div className="row">
        <label className={`${styles.overviewlabel}`}>
          Total Carbon Emitted
        </label>
        <br />
        <br />
        <label
          className={`${styles.overviewnumber}`}
        >{`${totalCarbon} KG`}</label>
      </div>
      <br />

      <div className="row">
        <p>
          Explore emission reduction projects and learn more about carbon
          offsets.
        </p>
        <br />
        <br />
        <a href="https://terrapass.com/product-category/individuals/">
          <button className={`${styles.button}`}>Learn More</button>
        </a>
      </div>
      <br />
    </div>
  );
};

export default Overview;
