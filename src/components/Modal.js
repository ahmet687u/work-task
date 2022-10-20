import React from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { useSelector } from 'react-redux';

export default function Modal({ children }) {
  const { showModal } = useSelector(state => state.news)

  if (!showModal) return;

  return (
    <div className="modal">
      <AnimatePresence>
        <motion.div
          className="modal-background flex_center"
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div
            initial={{ y: "100vh" }}
            animate={{ y: 0 }}
            exit={{ y: "100vh" }}
            className="modal-content"
          >
            {children}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
