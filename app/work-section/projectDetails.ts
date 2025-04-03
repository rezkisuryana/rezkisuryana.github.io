export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const devProjects = [
  {
    id: 0,
    name: "Portfolio V1",
    description:
      "Portfolio website for Rezki Suryana. This is the previous version, designed and developed using ReactJS with immersive 3D animations powered by Three.js for the background elements.",
    technologies: ["React", "Tailwind CSS", "Three JS"],
    github: "https://github.com/rezkisuryana/rezkisuryana.github.io",
    demo: "https://rezki.vercel.app/",
    image: require(".//../../public/projects/rezki.png"),
    available: true,
  },
  {
    id: 1,
    name: "Gagas Studio",
    description:
      "This is a website for a creative studio that provides design and branding services.",
    technologies: ["Wordpress", "Elementor"],
    github: "",
    demo: "https://gagasstudio.co.id/",
    image: require(".//../../public/projects/gagas.png"),
    available: true,
  },
  {
    id: 2,
    name: "Pusaka Pest",
    description:
      "Built specifically for an Pest startup, this website features a seamless user experience, SEO optimization, and an intuitive interface for easy navigation.",
    technologies: ["Wordpress", "Elementor"],
    github: "",
    demo: "https://pusakapest.com/",
    image: require(".//../../public/projects/pusaka.png"),
    available: true,
  },
  {
    id: 3,
    name: "AbuDzar PPDB",
    description:
      "An online admission web application. It is designed for educational institutions to manage the admission process, complete with SEO optimization and a user-friendly interface.",
    technologies: ["React", "Tailwind CSS", "Laravel"],
    github: "https://github.com/",
    demo: "https://ppdbabudzar.evolusidigital.id/",
    image: require(".//../../public/projects/ppdb.png"),
    available: true,
  },
  {
    id: 4,
    name: "Garuda Utama Persada",
    description:
      "Garuda Utama Persada was developed using WordPress, featuring an intuitive navigation system, professional design, and responsive layout.",
    technologies: ["Wordpress", "Elementor"],
    github: "https://github.com/",
    demo: "http://garudautamapersada.co.id/",
    image: require(".//../../public/projects/garuda.png"),
    available: true,
  },
  {
    id: 5,
    name: "Dua Cahaya Travel",
    description:
      "This site provides comprehensive information, intuitive navigation, and a professional design to attract prospective pilgrims.",
    technologies: ["Wordpress", "Elementor"],
    github: "https://github.com/",
    demo: "https://duacahaya.com",
    image: require(".//../../public/projects/duacahaya.png"),
    available: true,
  },
  {
    id: 6,
    name: "Yabahit",
    description:
      "A corporate website for Yayasan Yabahit, focused on providing education for orphaned children and Quran memorization.",
    technologies: ["Wordpress", "Elementor"],
    github: "https://github.com/",
    demo: "https://yabahit.or.id/",
    image: require(".//../../public/projects/yabahit.png"),
    available: true,
  },

  {
    id: 7,
    name: "Sungaisail",
    description:
      "Corporate website for a general contractor company, focusing on delivering high-quality results and timely project completion.",
    technologies: ["JavaScript", "CSS", "HTML", "PHP"],
    github: "https://github.com/",
    demo: "https://sungaisail.id",
    image: require(".//../../public/projects/sungaisail.png"),
    available: true,
  }
];

export const designProjects = [
  {
    id: 1,
    name: "Hebron Statup Lab Website",
    description:
      "SkyWatch is a convenient and user-friendly tool that allows you to quickly and easily check the current.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fhsl.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 2,
    name: "RAGS Scrubs Website",
    description:
      "An image generator website that allows users to generate, combine, and download images.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Frags.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 3,
    name: "Crown Branding Agency Website",
    description:
      "A website that reduces the length of your URL using Bit.ly's API",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image:
      "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fcrown.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 4,
    name: "Titi Mobile App",
    description:
      "TMTM helps you find people who are headed to the same location as you, so you can share a ride and split the cost with them.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Ftiti.webp&w=1920&q=75",
    available: false,
  },
];
