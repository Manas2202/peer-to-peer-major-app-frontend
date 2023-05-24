import ReactModal from "react-modal";
import axios from "axios";
import { useState } from "react";
const BidModal = ({ isOpen, closeModal, product,id }) => {
  const [name,setName] = useState("");
  const [bid,setBid] = useState("");
  const handleSubmit = async() => {
    const newData = {
      bidderName: name,
      bidPrice: bid,
      itemId: id
    }
    const response = await axios.post("http://localhost:8080/bid/add",newData); 
    if(response.status === 201){
      alert("Bid Placed Successfully");
      closeModal();
    }else{
      alert("Bid Placed Failed");
    }

  };
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="BidModal"
    >
      <h2>Bidding Details for - {product.title}</h2>
      <p>Current Price: {product.price}</p>
      <form className="login_addItemForm" action="#">
        <div className="login_user__details">
          <div className="login_input__box">
            <span className="login_details">Full Name</span>
            <input
              className="login_addItemFormInput"
              type="text"
              placeholder="Enter Full Name Here"
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="login_input__box">
            <span className="login_details">Bid Price</span>
            <input
              className="login_addItemFormInput"
              type="number"
              placeholder="Enter Your Bid Price Here"
              required
              onChange={(e) => setBid(e.target.value)}
            />
          </div>
        </div>
        <div className="login_formbutton">
          <input
            className="login_addItemFormInput"
            type="button"
            onClick={handleSubmit}
            value="Confirm Bid"
          />
        </div>
      </form>
    </ReactModal>
  );
};

export default BidModal;
