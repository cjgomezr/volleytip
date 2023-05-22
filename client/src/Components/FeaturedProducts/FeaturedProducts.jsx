import React from "react";
import "./FeaturedProducts.scss";
import Card from "../Card/Card";
import useFetch from "../../hooks/useFectch";

const FeaturedProducts = ({ type }) => {

  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type]$eq]=${type}`
  );

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem, nostrum incidunt, aspernatur commodi nihil sit quo
          perspiciatis at voluptates dicta tempore molestiae minima, consequatur
          facilis hic ab dolore! Hic, sequi!
        </p>
      </div>
      <div className="bottom">
        {error
          ? "Something went wrong!"
          : loading
          ? "Loading"
          : data.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default FeaturedProducts;
