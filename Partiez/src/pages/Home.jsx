import React from 'react';
import Hero from '../components/Hero/Hero';
import LatestProducts from '../components/LatestProducts/LatestProducts';
import Banner from '../components/Banner/Banner';
import BannerNew from '../components/BannerNew/BannerNew';
import Services from '../components/Services/Services';
import Footer from '../components/Footer/Footer';


import ProductGrid from "../components/ProductGrid/ProductGrid";

import Home1 from "../assets/Home/1.jpg";
import Home2 from "../assets/Home/7.jpg";
import Home3 from "../assets/Home/3.png";
import Home4 from "../assets/Home/5.jpg";
import Home5 from "../assets/Home/Home6.png";
import Home6 from "../assets/Home/9.png";
import Home7 from "../assets/Home/8.png";
import Home8 from "../assets/Home/10.jpg";
import Home9 from "../assets/Home/11.png";
import Home10 from "../assets/Home/12.png";


const homeProducts = [
  { id: 1, img: Home1, title: "Birthday Decorations" },
  { id: 2, img: Home2, title: "Party Hats" },
  { id: 3, img: Home3, title: "Love Heart Bouquet" },
  { id: 4, img: Home5, title: "DJ Sound Systems" },
  { id: 5, img: Home4, title: "Birthday Backdrops" },
  { id: 6, img: Home9, title: "Party hats" },
  { id: 7, img: Home6, title: "Neon Glow Party Supplies" },
  { id: 8, img: Home7, title: "Solid Led Balloons" },
  { id: 9, img: Home8, title: "Party Tablewares" },
  { id: 10, img: Home10, title: "Candles" },
];

function Home() {
  return (
    <div className="p-4">
     
      <Hero/>
      <LatestProducts/>
      <Banner/>
      {/* <MoreItems/> */}
      {/* <BannerNew/> */}        
      <ProductGrid
      title="Featured Products"
      description="Discover our top-rated party essentials! From trendy decorations to crowd-favorite supplies, these featured items are perfect for adding fun, style, and sparkle to any celebration.
"
      products={homeProducts}
    />
      <Services/>
      

      
    </div>
  );
}

export default Home;
