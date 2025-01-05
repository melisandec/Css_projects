import React, { useState } from "react";
import { motion } from "framer-motion";
import "./ContactForm.css";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [prompt, setPrompt] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Ici, vous devriez implémenter la logique d'envoi d'e-mail
    // Par exemple, en utilisant une API backend ou un service tiers

    // Simulation d'envoi (à remplacer par votre logique réelle)
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setName("");
    setEmail("");
    setPrompt("");
    alert("Message envoyé avec succès!");
  };

  return (
    <motion.div
      className="contact-form"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Contactez-moi</h2>
      <form onSubmit={handleSubmit}>
        <motion.div className="form-group" whileHover={{ scale: 1.05 }}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Votre nom"
            required
          />
        </motion.div>
        <motion.div className="form-group" whileHover={{ scale: 1.05 }}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Votre email"
            required
          />
        </motion.div>
        <motion.div className="form-group" whileHover={{ scale: 1.05 }}>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Décrivez l'image IA que vous souhaitez générer"
            required
          />
        </motion.div>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Envoi en cours..." : "Envoyer"}
        </motion.button>
      </form>
    </motion.div>
  );
};

export default ContactForm;
