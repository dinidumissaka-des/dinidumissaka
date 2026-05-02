export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Chen",
    role: "Product Manager",
    company: "Deriv",
    quote:
      "Dinidu has an exceptional ability to translate complex product requirements into elegant, user-centric designs. His attention to detail and deep understanding of fintech users made our redesign a huge success.",
    avatar: "/images/avatars/sarah.webp",
  },
  {
    id: "2",
    name: "Marcus Rivera",
    role: "Founder",
    company: "KeoSpace",
    quote:
      "Working with Dinidu was a game-changer. He didn't just design screens — he thought through the entire experience, flagged edge cases, and pushed our product thinking forward.",
    avatar: "/images/avatars/marcus.webp",
  },
  {
    id: "3",
    name: "Aisha Malik",
    role: "Design Lead",
    company: "EcoByte",
    quote:
      "Dinidu's ability to blend beautiful visuals with purposeful UX is rare. He brought both creative energy and structured thinking to our sustainability platform.",
    avatar: "/images/avatars/aisha.webp",
  },
  {
    id: "4",
    name: "Tom Whitfield",
    role: "CEO",
    company: "GreenPilot",
    quote:
      "The Webflow template Dinidu created for us exceeded all expectations. Clean, fast, and remarkably well thought-out. Our conversion rates improved immediately after launch.",
    avatar: "/images/avatars/tom.webp",
  },
];
