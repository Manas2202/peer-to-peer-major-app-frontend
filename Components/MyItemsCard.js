import React from "react";

function MyItemsCard() {
  return (
    <div class="outer">
      <div class="content animated fadeInLeft">
        <span class="bg animated fadeInDown">EXCLUSIVE</span>
        <h1 className="card-heading">
          Afro
          <br /> baseball hair
        </h1>
        <p className="card-content">
          Shadow your real allegiance to New York's Pirate radio with this cool
          cap featuring the Graphic Know Wave logo.
        </p>

        <div class="button">
          <a href="#">$115</a>
          <a class="cart-btn" href="/itemdetail">
            <i class="cart-icon ion-bag"></i>Remove 
          </a>
        </div>
      </div>
      <img
        src="https://bit.ly/2kOzUTm"
        className="card-img animated fadeInRight"
      />
    </div>
  );
}

export default MyItemsCard;
