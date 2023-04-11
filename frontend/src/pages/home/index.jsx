import { useState } from "react";
import Navbar from "../shared/Navbar";
import Screen1 from "./components/Screen1";
import Screen2 from "./components/Screen2";
import Screen3 from "./components/Screen3";
import Screen4 from "./components/Screen4";
import Screen5 from "./components/Screen5";
function Home() {
const [scroll, setScroll] = useState(0)

  return (

    <div className="home w-full h-screen overflow-auto sc relative"
      onScroll={e => {
        var { target } = e
        var percent = target.scrollTop / (target.scrollHeight - target.clientHeight) * 100
        setScroll(percent)
      }}
    >
      <Navbar/>
      <Screen1 />
      <Screen2 />
      <Screen3 />
      <Screen4 />
      <Screen5 scroll={scroll} />

    </div>
  );
}

export default Home;




