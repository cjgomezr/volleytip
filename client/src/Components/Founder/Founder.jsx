import React from "react";
import "./Founder.scss";

const Founder = ({item}) => {

  return (
    <div className="founder">

      <div className="image">

        <img
          src={item.url}
          alt=""
        />

      </div>

      <div className="details">

        <h3>{item.title}</h3>

      </div>

    </div>

  );
};

export default Founder;
