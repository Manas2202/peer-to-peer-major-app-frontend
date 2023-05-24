import React, { useEffect,useState } from "react";
import Card from "./Card";
import axios from "axios";
import data from '../data.json';
function HomeCard() {
  const [itemsData,setItemsData] = useState([]);
  const getAllItems = async() => {
    const response = await axios.get("http://localhost:8080/item/get");
    if(response.status === 201){
      setItemsData(response.data);
    }
  } 
  useEffect(() => {
    getAllItems();
  },[])
  return (
    <div className="home-card-grid-parent">
      {data.map((card,index) => (
        <Card card={card} key={index} />
      ))}
    </div>
  );
}

export default HomeCard;
