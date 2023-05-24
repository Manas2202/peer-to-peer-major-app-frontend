import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import BidModal from "../Components/BidModal";
import BidsListModal from "../Components/BidsListModal";
import data from "../data.json";
import axios from "axios";
function itemdetail() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBidsDataOpen, setIsBidsDataOpen] = useState(false);
  const [product, setProduct] = useState({});
  const [id,setID] = useState();
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const openBidsModal = () => {
    setIsBidsDataOpen(true);
  };

  const closeBidsModal = () => {
    setIsBidsDataOpen(false);
  };

  const x = {
    name: "Example Product",
    price: "$100",
    endTime: "May 31, 2023",
  };
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");
    setID(id);
    getItemData(id);
  }, []);
  const getItemData = async (id) => {
    const response = await axios.post("http://localhost:8080/item/details",{
      id: id
    });
    if (response.status === 201) {
      setProduct(response.data);
    }
  };
  return (
    <>
      <Navbar />
      <div class="detail-card-wrapper">
        <div class="detail-card">
          {/* <!-- card left --> */}
          <div class="product-imgs">
            <div class="img-display">
              <div class="img-showcase">
                <img src={product.image} height="800px" alt={`http://localhost:8080/${product.image}`} />
              </div>
            </div>
          </div>
          {/* <!-- card right --> */}
          <div class="product-content">
            <h2 class="product-title">{product.itemName}</h2>
            <div class="product-price">
              <p class="new-price">
                Initial Bid Price: <span>Rs. {product.bidPrice}</span>
              </p>
              <p class="new-price">
                Year of Buy: <span>{product.yearOfBuy}</span>
              </p>
            </div>

            <div class="product-detail">
              <h2>about this item: </h2>
              <p>{product.description}</p>

              <ul>
                <li>
                  Shipping Area: <span>All over the world</span>
                </li>
                <li>
                  Shipping Fee: <span>Free</span>
                </li>
              </ul>
            </div>

            <div class="purchase-info">
              <button type="button" class="btn" onClick={openModal}>
                Bid Now <i class="fas fa-shopping-cart"></i>
              </button>
              <button type="button" class="btn" onClick={openBidsModal}>
                Bids Data <i class="fas fa-shopping-cart"></i>
              </button>
              {isModalOpen && (
                <BidModal
                  isOpen={isModalOpen}
                  closeModal={closeModal}
                  product={product}
                  id={id}
                />
              )}
              {isBidsDataOpen&&<BidsListModal
                isOpen={isBidsDataOpen}
                closeModal={closeBidsModal}
                product={product}
              />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default itemdetail;
