// import Navbar from "./components/landingpage/header";
import Hero from "./components/landingpage/hero";
import Number from "./components/landingpage/number";
import Clients from "./components/landingpage/clients";
import Technology from "./components/landingpage/technology";

// import Service from "./components/landingpage/service";
import Card from "./components/landingpage/card";
// import Portfolio from "./components/landingpage/portfolio";
// import Footer from "./components/landingpage/footer";





function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <Hero/>
      <Number/>
      <Clients/>
      <Technology/>
     
      {/* <Service/> */}
      <Card/>
      {/* <Footer/> */}
    </div>
  );
}

export default App;