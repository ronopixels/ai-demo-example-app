import { motion } from "framer-motion";
import { fadeUpProps } from "@/lib/motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type Props = {
  badge: string;
  description: string;
  id?: string;
};

export function SectionHeading({ badge, description, id }: Props) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      id={id}
      className="mb-10 flex flex-col gap-6 lg:mb-10 lg:flex-row lg:items-start lg:gap-10"
      {...fadeUpProps(reduced)}
    >
      <h2 className="text-h2 inline-flex shrink-0 rounded-[7px] bg-primary px-[7px] py-0 font-medium text-black">
        {badge}
      </h2>
      <p className="text-p max-w-[580px] font-normal text-dark">{description}</p>
    </motion.div>
  );
}
