import bhdpic from "../assets/Images/bhdpic.png";
import two47pic from "../assets/Images/two47pic.png";

export const projects = [
  {
    id: "bhd-auctions",
    title: "BHD Auctions - Digital Art Auction Platform",
    description:
      "A web platform that connects artists and buyers, enabling art discovery and real-time bidding in a modern marketplace.",
    longDescription:
      "BHD Auctions is a digital marketplace designed to connect artists and buyers. The platform allows users to explore artworks, place bids in real time, and engage in a modern auction experience. It focuses on clean UI, responsive design, and smooth user interactions.",
    image: bhdpic,
    tech: ["React", "JavaScript", "Tailwind CSS", "HTML"],
    live: "https://bhd-auctions.vercel.app/",
    github: "https://github.com/teecodes-dev/bhd-auctions",
    features: [
      "Real-time auction UI",
      "Responsive marketplace design",
      "Artwork discovery system",
      "Clean modern UI/UX",
    ],
  },

  {
    id: "two47-store",
    title: "Two47 Store - Streetwear E-commerce Platform",
    description:
      "A modern streetwear e-commerce platform built for identity-driven fashion shopping.",
    longDescription:
      "Two47 Store is a fashion-focused e-commerce platform built for streetwear enthusiasts. It emphasizes identity-driven shopping with a modern UI, product display system, and smooth browsing experience.",
    image: two47pic,
    tech: ["React", "JavaScript", "Tailwind CSS", "HTML"],
    live: "https://two47-store.vercel.app/",
    github: "https://github.com/teecodes-dev/two47-store",
    features: [
      "Product showcase UI",
      "Fashion-focused layout",
      "Responsive e-commerce design",
      "Modern component structure",
    ],
  },
];
