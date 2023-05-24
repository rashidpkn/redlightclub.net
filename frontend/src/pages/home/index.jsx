
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";
import Screen1 from "./components/Screen1";
import Screen2 from "./components/Screen2";
import Screen3 from "./components/Screen3";
import Screen4 from "./components/Screen4";
import Screen5 from "./components/Screen5";
function Home() {

  return (
    <div className="home w-full  sc" >
      <Navbar/>
      <Screen1 />
      <Screen2 />
      <Screen3 />
      <Screen4 />
      <Screen5 />
      <Footer />
    </div>
  );
}

export default Home;




