import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Search from "../../components/Search/Search";
import FeaturedRestaurants from "../../components/FeaturedRestaurants/FeaturedRestaurants";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Search />
      <FeaturedRestaurants />
      <Footer />
    </>
  );
}

export default Home;

