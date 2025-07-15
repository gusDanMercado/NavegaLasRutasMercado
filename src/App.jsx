import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
//import "./App.css";

import NavBar from "./components/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer.jsx";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer mensaje="Bienvenido a mi E-Commerce" />
    </>
  );
}

export default App;
