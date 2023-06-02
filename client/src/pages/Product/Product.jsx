import React, { useState, setState } from "react";
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import useFetch from "../../hooks/useFectch";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";

const Product = () => {
  const id = useParams().id;
  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);
  const [selectedImg, setSelectedImg] = useState("img");
  const [quantity, setQuantity] = useState(1);
  const dispatch=useDispatch()

  return (
    <div className="product">
      {loading ? (
        "loading"
      ) : (
        <>
          <div className="left">
            <div className="images">
              <img
                src={
                  "http://localhost:1337" +
                  data?.attributes?.img?.data?.attributes?.url
                }
                alt=""
                onClick={(e) => setSelectedImg("img")}
              />
              <img
                src={
                  "http://localhost:1337" +
                  data?.attributes?.img2?.data?.attributes?.url
                }
                alt=""
                onClick={(e) => setSelectedImg("img2")}
              />
            </div>
            <div className="mainImg">
              <img
                src={
                  "http://localhost:1337" +
                  data?.attributes?.[selectedImg]?.data?.attributes?.url
                }
                alt=""
              />
            </div>
          </div>
          <div className="right">

            <h1>{data?.attributes?.title}</h1>
            <p>{data?.attributes?.description}</p>
            <span className="price">${data?.attributes?.price}</span>

            <div className="quantity">
              <button
                onClick={(e) =>
                  setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                }
              >
                -
              </button>
              {quantity}
              <button onClick={(e) => setQuantity((prev) => prev + 1)}>
                +
              </button>
            </div>

            <div className="addToCar">
              <button
                className="add"
                onClick={() =>
                  dispatch(                    
                    addToCart({
                      id: data.id,
                      title: data.attributes.title,
                      desc: data.attributes.description,
                      price: data.attributes.price,
                      img: data.attributes.img.data.attributes.url,
                      quantity,
                    })
                  )
                }
              >
                <AddShoppingCartIcon /> Añadir al carrito
              </button>
            </div>



            {/* <div className="links">
              <div className="item">
                <FavoriteBorderIcon /> ADD TO WISH LIST
              </div>

              <div className="item">
                <BalanceIcon /> ADD TO COMPARE
              </div>
            </div> */}
          </div>
        </>
      )}
    </div>
  );
};

export default Product;
