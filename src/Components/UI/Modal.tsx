import { motion } from "framer-motion";
import React from "react";
import * as stylex from "@stylexjs/stylex";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <motion.div
      {...stylex.props(styles.backdrop, isOpen && styles.visible)}
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      onClick={onClose}
    >
      <motion.div
        {...stylex.props(styles.content)}
        variants={modalVariants}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
        <button onClick={onClose}>Close</button>
      </motion.div>
    </motion.div>
  );
};

const styles = stylex.create({
  backdrop: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  content: {
    position: "absolute",
    top: "200px",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "5px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  visible: {
    opacity: 1,
    backgroundColor: "#f00",
  },
  hidden: {
    opacity: 0,
  },
});

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: { y: "-100vh", opacity: 0 },
  visible: { y: "200px", opacity: 1, transition: { delay: 0.5 } },
};

// import { motion } from "framer-motion";
// import React from "react";
// import stylex from "@stylexjs/stylex";
//
// interface ModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   children: React.ReactNode;
// }
//
// const backdropVariants = {
//   hidden: { opacity: 0 },
//   visible: { opacity: 1 },
// };
//
// const modalVariants = {
//   hidden: { y: "-100vh", opacity: 0 },
//   visible: { y: "200px", opacity: 1, transition: { delay: 0.5 } },
// };
//
// const styles = stylex.create({
//   backdrop: {
//     position: "fixed",
//     top: 0,
//     left: 0,
//     width: "100%",
//     height: "100%",
//     backgroundColor: "rgba(0, 0, 0, 0.5)",
//   },
//   content: {
//     position: "fixed",
//     top: "50%",
//     left: "50%",
//     transform: "translate(-50%, -50%)",
//     backgroundColor: "#fff",
//     padding: "1em",
//     borderRadius: "4px",
//   },
//   active: {
//     backgroundColor: "#f00",
//   },
//   inactive: {
//     backgroundColor: "#00f",
//   },
// });
//
// export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
//   if (!isOpen) return null;
//
//   return (
//     <motion.div
//       {...stylex.props(styles.backdrop, isOpen && styles.active)}
//       variants={backdropVariants}
//       initial="hidden"
//       animate="visible"
//       exit="hidden"
//       onClick={onClose}
//     >
//       <motion.div
//         {...stylex.props(styles.content, !isOpen && styles.inactive)}
//         variants={modalVariants}
//         onClick={(e) => e.stopPropagation()}
//       >
//         {children}
//         <button onClick={onClose}>Close</button>
//       </motion.div>
//     </motion.div>
//   );
// };
