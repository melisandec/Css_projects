// Pour le titre et la description du projet
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <motion.header
      className="header"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{ textAlign: "center", padding: "2rem" }}
    >
      <motion.h1 whileHover={{ scale: 1.1 }}>
        Galerie d'Images Générées par IA
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        Exploration de l'intersection entre l'IA et la créativité visuelle sur
        Midjourney
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        Les images présentées dans cette galerie ont été générées à l'aide de
        Midjourney, un outil d'IA avancé. Les prompts ont été soigneusement
        conçus pour explorer des thèmes liés à la data science et à l'IA,
        incluant des visualisations futuristes de centres de données, des
        représentations abstraites d'algorithmes d'apprentissage automatique, et
        des scènes de scientifiques travaillant avec des interfaces de réalité
        augmentée. Chaque image reflète une vision de l'avenir de la technologie
        et de l'analyse de données.
      </motion.p>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        style={{ marginTop: "1rem" }}
      >
        <Link to="/">Galerie</Link>
        <Link to="/visualization">Visualisation des Données</Link>
        <Link to="/contact">Contact</Link>
      </motion.nav>
    </motion.header>
  );
};
const linkStyle = {
  margin: "0 10px",
  color: "#4a4a4a",
  textDecoration: "none",
  fontWeight: "bold",
};
export default Header;
