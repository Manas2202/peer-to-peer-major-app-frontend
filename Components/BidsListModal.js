import ReactModal from "react-modal";
import axios from "axios";
import BidsData from "../bidsData.json";
import { useEffect, useState } from "react";
const BidModal = ({ isOpen, closeModal, product }) => {
  const [bidsData, setBidsData] = useState([]);
  useEffect(() => {
    const { id } = product;
    getAllBidsData();
  }, []);
  const getAllBidsData = async() => {
    const response = await axios.get("http://localhost:8080/bid/get");
    if(response.status === 201){
      setBidsData(response.data);
    }else{
      alert("bids not available")
    }
  }
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="BidModal"
    >
      <h2>Bids Data</h2>
      <div class="tablecontainer">
        <div class="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Bid</th>
              </tr>
            </thead>
            <tbody>
              {bidsData &&
                bidsData.map((bid) => (
                  <tr>
                    <td>{bid.bidderName}</td>
                    <td>{bid.bidPrice}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </ReactModal>
  );
};

export default BidModal;
