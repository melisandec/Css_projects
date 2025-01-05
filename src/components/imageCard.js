// pour afficher chaque image générée
import React from "react";
import { motion } from "framer-motion";

const ImageCard = ({ src, alt }) => {
  // option de telechargement des images
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = src;
    // Générer le nom des images au téléchargement
    link.download = `AI_Image_${Date.now()}.png`;
    // Date.now() permet de générer le timestamp
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      style={{ position: "relative" }}
    >
      <motion.img
        src={src}
        alt={alt}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{ width: "100%", borderRadius: "10px" }}
      />
      <motion.button
        onClick={handleDownload}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        style={{
          position: "absolute",
          bottom: "10px",
          right: "10px",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          color: "white",
          border: "none",
          borderRadius: "5px",
          padding: "5px 10px",
          cursor: "pointer",
        }}
      >
        Télécharger
      </motion.button>
    </motion.div>
  );
};
export default ImageCard;
