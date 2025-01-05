import React from "react";
import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
// Recharts pour visualisation de données (npm install recharts)
import "./DataVisualisation.css";

const DataVisualization = () => {
  // Données simulées des mots-clés
  const keywordData = [
    { keyword: "Futuriste", count: 3 },
    { keyword: "IA", count: 5 },
    { keyword: "Data Science", count: 4 },
    { keyword: "Réseau neuronal", count: 2 },
    { keyword: "Robot", count: 2 },
    { keyword: "High-tech", count: 5 },
    { keyword: "Hologramme", count: 3 },
  ];

  return (
    <motion.div
      className="data-visualization"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Visualisation des Données</h2>
      <table
        style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}
      >
        <thead>
          <tr>
            <th>Mot-clé</th>
            <th>Nombre d'images</th>
          </tr>
        </thead>
        <tbody>
          {keywordData.map((item, index) => (
            <motion.tr
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <td>{item.keyword}</td>
              <td>{item.count}</td>
            </motion.tr>
          ))}
        </tbody>
      </table>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={keywordData}>
          <XAxis dataKey="keyword" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" fill="#3444a5" />
        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

export default DataVisualization;
