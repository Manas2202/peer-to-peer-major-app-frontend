import Navbar from "../Components/Navbar";
import SearchBar from "../Components/SearchBar";
import HomeCard from '../Components/MyItemsCardHome';
export default function Home() {
  return (
    <>
      <Navbar />
      <SearchBar />
      <div className="itemsHeading">
        My Items
      </div>
      <HomeCard />
    </>
  );
}
