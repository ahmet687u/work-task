import React from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { useSelector } from 'react-redux';
import { FaTimes } from 'react-icons/fa'
import useActions from '../../hooks/useActions';
import { setNewsFeatureByName } from '../../redux/features/newsSlice';

export default function Modal() {
  const { showModal, currentItem } = useSelector(state => state.news)
  const setFeature = useActions(setNewsFeatureByName)

  if (!showModal) return;

  return (
    <div className="news-modal pos_relative">
      <AnimatePresence>
        <motion.div
          className="news-modal-background flex_center pos_fixed"
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div
            initial={{ y: "100vh" }}
            animate={{ y: 0 }}
            exit={{ y: "100vh" }}
            className="news-modal-content p-4"
          >
            <div className='flex_center mb-4' onClick={() => setFeature({ name: "showModal", value: false })}>
              <FaTimes />
            </div>
            <figure className='hover'>
              <img src={currentItem?.img_url} alt={currentItem?.title} />
            </figure>

            <header>
              <h2 className='mt-2 mb-4'>{currentItem?.title}</h2>
            </header>

            <p className='text'>{currentItem?.description}</p>

            <div className='d_flex ai_center jc_space-between mt-4'>
              <p>Kaynak: {currentItem?.source}</p>
              <p>{new Date(currentItem?.date).toLocaleDateString()}</p>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
