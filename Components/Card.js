import React from "react";

function Card(props) {
  const {image,title,description,price,id} = props.card;
  return (
    <div class="outer">
      <div class="content animated fadeInLeft">
        <span class="bg animated fadeInDown">EXCLUSIVE</span>
        <h1 className="card-heading">
          {title}
        </h1>
        <p className="card-content">
          {description}
        </p>

        <div class="button">
          <a href="#">{price}</a>
          <a class="cart-btn" href={`/itemdetail?id=${id}`}>
            <i class="cart-icon ion-bag"></i>View Details
          </a>
        </div>
      </div>
      <img
        src={image}
        className="card-img animated fadeInRight"
      />
    </div>
  );
}

export default Card;
