/** Demo FAQ items for marketing FAQ sections. */
export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const demoFaqItems: FaqItem[] = [
  {
    id: "1",
    question: "Is this a real backend?",
    answer:
      "The template ships with demo data and UI only. Wire your own API, auth, and billing when you are ready.",
  },
  {
    id: "2",
    question: "Can I use it on ThemeForest?",
    answer:
      "Yes — follow your license and replace branding, copy, and assets for your listing.",
  },
  {
    id: "3",
    question: "Does it support dark mode?",
    answer:
      "Yes. Marketing shell includes a theme toggle; components use Tailwind `dark:` variants.",
  },
];
