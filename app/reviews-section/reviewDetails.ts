import { StaticImageData } from "next/image";
import alex from "../../public/samuel.avif";
import jerry from "../../public/jerry.avif";
import mauro from "../../public/mauro.jpeg";
import alan from "../../public/alan.jpeg";
import olamide from "../../public/olamide.jpeg";
import umar from "../../public/umar.jpeg";

export type reviewProps = {
  name: string;
  role: string;
  company: string;
  profileImg: StaticImageData;
  testimonial: string;
  index: number;
};

export const reviewDetails = [
  {
    name: "Catur Ferniza",
    role: "Product Manager",
    company: "Monster AR Teknologi Indonesia",
    profileImg: alex,
    testimonial:
      "Rezki is seriously one of the best frontend developers I've ever worked with. He's incredibly talented, super easy to work with, and always goes above and beyond.",
  },
  {
    name: "Arif Firmansyah",
    role: "Founder",
    company: "Gagas Studio",
    profileImg: jerry,
    testimonial:
      "Rezki's work is truly outstanding, and I can't recommend him enough! He completely transformed our branding agency's website. Since launch, we've seen a significant jump in website traffic and, crucially, conversions.",
  },
  {
    name: "Jaya Kusuma",
    role: "CEO",
    company: "Pusaka Pest",
    profileImg: mauro,
    testimonial:
      "Outstanding professional, developed our startup's website and delivered it in a very short time and with high quality.",
  },
  {
    name: "Bram",
    role: "Head of Design",
    company: "Rajawali Citra Televisi Indonesia",
    profileImg: umar,
    testimonial:
      "Rezki is a dedicated and hardworking professional with a strong sense of ownership. He has contributed to designing exceptional user interfaces and user experiences at RCTI. I am confident that he will be a valuable asset to any team.",
  },
  {
    name: "M. Isa",
    role: "Head of Engineering",
    company: "MNC TV",
    profileImg: olamide,
    testimonial:
      "I had the pleasure of working with Rezki on a frontend development project at Mnc Group, and I highly recommend him. He consistently delivered high-quality code, and brought a proactive and creative approach to problem-solving.",
  },
  {
    name: "Fahrurrozi",
    role: "Owner",
    company: "Ozz Travel",
    profileImg: alan,
    testimonial:
      "Very talented and amazing freelancer. Very easy to communicate with, pleasure to work with. Outstanding attention to detail, and works as fast as possible while also delivering amazing work.",
  },
  
];
