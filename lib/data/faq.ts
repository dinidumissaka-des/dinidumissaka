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
      "Over 5 years across fintech, SaaS and web, from 0→1 products to enterprise scale. At Deriv, that meant owning the design of a website with 21 million monthly visitors and the block system behind its 6,000+ pages.",
  },
  {
    id: "2",
    question: "What tools do you primarily use?",
    answer:
      "Figma for ideas and UI, with Figma MCP and Code Connect linking designs to code. Claude Code for building, Claude for thinking problems through and writing specs, Storybook for documenting components, and Magnific for imagery and 3D.",
  },
  {
    id: "3",
    question: "How do you integrate AI into your design workflow?",
    answer:
      "AI makes producing options fast, so more time goes into judging them. Decisions are written down as specs and design guidelines, Claude Code builds against them, and every change is reviewed by eye on a real device before it ships. Taste is the part that doesn't automate.",
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
      "It starts with understanding the user, the business goal and the constraints. Then exploration in Figma, a written spec for what each screen must do, a build, and testing with real people. What testing finds goes back into the spec, so the same problem can't quietly return. Stakeholders stay in the loop throughout.",
  },
];
