import React from "react";
import "./Founders.scss";
import Founder from "../Founder/Founder";

const Founders = () => {

const data=[
    {
        title:"Andres Piza",
        url:"img/Products/daniel.png",
        id:1
    },
    {
        title:"Camilo Gomez",
        url:"img/Products/daniel.png",
        id:2
    },
];

  return (
    <div className="box">
        <div className="Founders">
            <div className="top">
                <h1>FUNDADORES</h1>
            </div>
            <div className="bottom">
                {data.map((item) => <Founder item={item} key={item.id} />)}
            </div>
        </div>
    </div>
  );
};

export default Founders;