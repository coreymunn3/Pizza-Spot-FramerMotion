import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from 'react-bootstrap';

const backdropVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariant = {
  hidden: {
    y: -40,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.3,
      duration: 0.5,
    },
  },
};

const Modal = ({ showModal, setShowModal, startOver }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <motion.div
          className='backdrop'
          variants={backdropVariant}
          initial='hidden'
          animate='visible'
          exit='hidden'
        >
          <motion.div
            className='confirmation-modal'
            variants={modalVariant}
            initial='hidden'
            animate='visible'
          >
            <p>Want to make another pizza?</p>
            <div className='modal-control'>
              <Button
                as={Link}
                to='/'
                block
                size='lg'
                style={{ width: '100%' }}
                onClick={startOver}
              >
                Start Over
              </Button>
              <Button
                size='lg'
                variant='outline-secondary'
                block
                onClick={() => setShowModal(!showModal)}
              >
                Nope, I'm Good
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
