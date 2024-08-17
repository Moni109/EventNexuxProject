import SearchBar from "./Components/SearchBar";
import PopularSearches from "./Components/PopularSearches";
import { NavCategoryCards } from "./Components/WCategoryCards";
import Footer from "./Components/Footer";
import EventCarousel from "./Components/EventCarousel";

const Home = ({ events, loading }) => {
  return (
    <div>
      <EventCarousel events={events} loading={loading} />
      <PopularSearches />
      <NavCategoryCards />
      <Footer />
    </div>
  );
};

export default Home;
