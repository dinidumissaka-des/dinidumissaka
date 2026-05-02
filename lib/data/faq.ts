export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    id: "1",
    question: "How many years of experience do you have?",
    answer:
      "I have over 5 years of experience designing for fintech, SaaS, and web products. I've worked with startups, scale-ups, and enterprise companies — spanning from early-stage 0→1 products to large design system overhauls.",
  },
  {
    id: "2",
    question: "What tools do you primarily use?",
    answer:
      "My primary design tools are Figma for UI/UX and prototyping, and Adobe Creative Suite for visual and brand work. For building and shipping, I use Webflow, Framer, and increasingly code-based tools like VS Code and Cursor with AI assistance.",
  },
  {
    id: "3",
    question: "How do you integrate AI into your design workflow?",
    answer:
      "I use AI as a force multiplier — from generating design concepts and copy with Claude, to automating repetitive tasks and exploring visual directions faster. AI helps me spend more time on the thinking and strategy, and less on the mechanical.",
  },
  {
    id: "4",
    question: "Are you available for freelance or contract work?",
    answer:
      "Yes! I'm open to freelance, contract, and part-time engagements alongside my current work. Whether it's a focused sprint or an ongoing collaboration, feel free to reach out and we can discuss fit.",
  },
  {
    id: "5",
    question: "Do you work remotely?",
    answer:
      "Absolutely. I'm based in Dubai but work with clients globally. I'm comfortable with async workflows and have collaborated with teams across Europe, the US, and Southeast Asia.",
  },
  {
    id: "6",
    question: "What does your design process look like?",
    answer:
      "I start with understanding — the user, the business goal, and the constraints. Then I move to exploration (wireframes, concepts), validation (research or testing), and refinement into high-fidelity designs. I keep stakeholders in the loop throughout and believe good communication is half the design work.",
  },
];
