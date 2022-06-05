import React from "react";
import { Navbar } from "./Navbar";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <AnimatePresence>
      <div className="w-screen h-auto flex flex-col bg-primary ">
        <Navbar />
        <main className="mt-24 p-8 w-full">Maintainer: Container</main>
      </div>
    </AnimatePresence>
  );
}

export default App;
