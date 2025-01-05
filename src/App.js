import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Gallery from "./components/Gallery";
import NotFound from "./components/NotFound";
import Contact from "./components/Contact";
import DataVisualization from "./components/DataVisualization";
import { AnimatePresence, motion } from "framer-motion";

// import images
import image1 from "./images/image1.png";
import image2 from "./images/image2.png";
import image3 from "./images/image3.png";
import image4 from "./images/image4.png";
import image5 from "./images/image5.png";
import image6 from "./images/image6.png";
import image7 from "./images/image7.png";
import image8 from "./images/image8.png";
import image9 from "./images/image9.png";
import image10 from "./images/image10.png";
import image11 from "./images/image11.png";
import image12 from "./images/image12.png";
import image13 from "./images/image13.png";

const images = [
  { src: image1, alt: "futuristic centre de data" },
  { src: image2, alt: "Abstract machine learning visualisation" },
  { src: image3, alt: "AI robot dans un laboratoire sci-fi" },
  {
    src: image4,
    alt: "Quantum computer dans une espace de recherche high-tech",
  },
  { src: image5, alt: "Neural network " },
  { src: image6, alt: "Abstract machine learning visualisation" },
  {
    src: image7,
    alt: "Un data scientist futuriste analysant des hologrammes de données complexes dans un laboratoire high-tech, avec des écrans flottants et des visualisations 3D colorées.",
  },
  {
    src: image8,
    alt: "Une représentation abstraite et artistique d’un algorithme d’apprentissage automatique",
  },
  {
    src: image9,
    alt: "Une ville intelligente vue de nuit, avec des flux de données visibles circulant entre les bâtiments, des drones de surveillance, et des véhicules autonomes sur les routes.",
  },
  { src: image10, alt: "Une ville intelligente vue de nuit 2" },
  { src: image11, alt: "Une forêt de données" },
  { src: image12, alt: "Une forêt de données 2" },
  {
    src: image13,
    alt: "Un océan de données",
  },
];

function App() {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="app"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <Header />
        <Routes>
          <Route path="/" element={<Gallery images={images} />} />
          <Route path="/visualization" element={<DataVisualization />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}
export default App;
