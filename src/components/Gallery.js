//  Pour contenir toutes les images
import React from "react";
import ImageCard from "./imageCard";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Gallery = ({ images }) => {
  return (
    <motion.div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "1rem",
        padding: "1rem",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {images.map((image, index) => (
        <ImageCard key={index} src={image.src} alt={image.alt} />
      ))}
    </motion.div>
  );
};

export default Gallery;
