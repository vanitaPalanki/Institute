import React from "react";

import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";
import WelcomePage from "./pages/welcome-page/welcome-page";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <WelcomePage />
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
