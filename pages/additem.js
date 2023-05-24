import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import axios from "axios";
function additem() {
  const [image,setImage] = useState(null);
  const [itemName,setItemName] = useState("");
  const [yearOfBuy,setYearOfBuy] = useState("");
  const [biddingPrice,setBiddingPrice] = useState("");
  const [description,setDescription] = useState("");
  const [fileName,setFileName] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    // create request object for file upload to node js multer
    const formData = new FormData();
    formData.append("image",image);
    formData.append("itemName",itemName);
    formData.append("yearOfBuy",yearOfBuy);
    formData.append("biddingPrice",biddingPrice);
    formData.append("description",description);
    formData.append("fileName",fileName);
    formData.append("userId",1);

    const response = await axios.post("http://localhost:8080/item/add",formData);
    if(response.status === 201){
      alert("Item Added Successful");
    }else if(response.status === 202){
      alert("Invalid Credentials")
    }
  }
  return (
    <>
    <Navbar/>
      <div className="formParentContainer">
      <div class="container">
        <div class="title">Add New Item</div>
        <form className="addItemForm" action="#" encType="multipart/form-data">
          <div class="user__details"> 
            <div class="input__box">
              <span class="details">Item Name</span>
              <input
                className="addItemFormInput"
                type="text"
                placeholder="eg. Maruti Suzuki Alto"
                required
                onChange={e => setItemName(e.target.value)}
              />
            </div>
            <div class="input__box">
              <span class="details">Year Of Buy</span>
              <input
                className="addItemFormInput"
                type="text"
                placeholder="eg. 2000"
                required
                onChange={e => setYearOfBuy(e.target.value)}
              />
            </div>
            <div class="input__box">
              <span class="details">Bidding Price</span>
              <input
                className="addItemFormInput"
                type="text"
                placeholder="eg. ₹ 20000"
                required
                onChange={e => setBiddingPrice(e.target.value)}
              />
            </div>
          </div>
          <div class="textarea-container">
            <span class="details">Describe your order</span>
            <textarea class="textarea" placeholder="Enter Here" onChange={e => setDescription(e.target.value)}></textarea>
          </div>
          <div class="user__details">
            <div class="input__box" style={{marginTop:"20px !important"}}>
              <span class="details">Item Image</span>
              <input className="" type="file" required onChange={e => {
                setImage(e.target.files[0]);
                setFileName(e.target.files[0].name);
              }}/>
            </div>
          </div>
          <div class="formbutton">
            <input
              className="addItemFormInput"
              type="submit"
              value="Add Item"
              onClick={handleSubmit}
            />
          </div>
        </form>
      </div>
    </div>
    </>
  );
}

export default additem;
