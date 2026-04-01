import { AnimatePresence, motion } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";

import Index from "@/pages/Index";

export default function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <Routes location={location}>
          <Route path="/" element={<Index />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}
