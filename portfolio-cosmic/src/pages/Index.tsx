import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useState } from "react";

import { ContactFooter } from "@/components/ContactFooter";
import { Explorations } from "@/components/Explorations";
import { Hero } from "@/components/Hero";
import { Journal } from "@/components/Journal";
import { LoadingScreen } from "@/components/LoadingScreen";
import { SelectedWorks } from "@/components/SelectedWorks";
import { Stats } from "@/components/Stats";

export default function Index() {
  const [isLoading, setIsLoading] = useState(true);
  const handleComplete = useCallback(() => setIsLoading(false), []);

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen key="loading" onComplete={handleComplete} />}
      </AnimatePresence>

      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <Hero />
          <SelectedWorks />
          <Journal />
          <Explorations />
          <Stats />
          <ContactFooter />
        </motion.div>
      )}
    </>
  );
}
