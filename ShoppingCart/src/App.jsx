import CardGrid from "./Component/Card";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import Navbar from "./Component/Navbar";
import React, { useState } from "react";

function App() {
  const [cartValue, setCartValue] = useState(0);
  return (
    <div style={{backgroundColor:"#f2f2f2"}}>
      <Navbar cartValue={cartValue} />
      <Header />
      <div>
        <div className="container">
          <div className="row">
            <CardGrid setCartValue={setCartValue}></CardGrid>
          </div>
        </div>
      <Footer/>
      </div>
    </div>
  );
}

export default App;