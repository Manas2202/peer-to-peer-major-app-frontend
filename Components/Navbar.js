import React, { useEffect, useState } from "react";
import style from "../styles/Navbar.module.css";
import Cookies from 'js-cookie';
function Navbar() {
  const [userData, setUserData] = useState(null);
  useEffect(() => {
  const uData = Cookies.get("userData");
  if(uData){
    const data = JSON.parse(uData);
    setUserData(data);
  }
  }, []);
  return (
    <>
      <nav className={style.nav}>
        <div className={style.nav_header}>
          <div className={style.nav_title}>Peer2Peer</div>
        </div>
        <div className={style.nav_btn}>
          <label for="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>

        <ul className={style.nav_list}>
          <li className={style.list_item_nav}>
            <a href="/">Home</a>
          </li>
          {userData ? (
            <>
              <li className={style.list_item_nav}>
                <a href="/additem">Add Item</a>
              </li>
              <li className={style.list_item_nav}>
                <a href="/myitems">My Items</a>
              </li>
              <li className={style.list_item_nav}>
                <a href="#">Logout</a>
              </li>
            </>
          ) : (
            <li className={style.list_item_nav}>
              <a href="/login">Login</a>
            </li>
          )}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
