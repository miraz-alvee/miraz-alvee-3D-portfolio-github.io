import { links } from "@/config";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
] as const;

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a EPOS system for restaurants and retail stores.",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2 min-w-[200px]",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
] as const;

export const projects = [
  {
    id: 1,
    title: "AI Itinerrary WebSite",
    // des: "A collaborative design tool with real-time collaboration, vector editing, and a responsive UI.",
    des: "Discover the world with your budget—activities, flights, hotels, all tailored to you.",
    img: "/project-01.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://itinerrary.com/",
    // sourceCode: "https://github.com/sanidhyy/figma-clone",
  },
  {
    id: 2,
    title: "HireTalentIQ SaaS platform",
    des: "A REAL Software-as-a-Service app with AI features and a ATS friendly CV checker and credits system using the latest tech stack.",
    img: "/project-03.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://hire-talent-iq-client-side.vercel.app/",

    // sourceCode: "https://github.com/sanidhyy/zoom-clone",
  },
  {
    id: 3,
    title: "Assist Connect Creation with AI",
    des: "Simplify your call experience with Assist Connect. Seamlessly connect with colleagues and friends.",
    img: "/project-02.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://assist-connect-blue.vercel.app/",
    // sourceCode: "https://github.com/sanidhyy/imaginify",
  },
  {
    id: 4,
    title: "Job Seeker dashboard for HireTalentIQ",
    des: "A dashboard for job seekers to manage their applications, track progress, and receive personalized job recommendations.",
    img: "/project-04.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://hire-talent-iq-client-side.vercel.app/job-seeker",
    // sourceCode: "https://github.com/sanidhyy/apple-clone",
  },
] as const;

export const testimonials = [
  {
    quote: `Collaborating with ${links.ownerName} was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. ${links.ownerName}'s enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, ${links.ownerName} is the ideal partner.`,
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote: `Collaborating with ${links.ownerName} was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. ${links.ownerName}'s enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, ${links.ownerName} is the ideal partner.`,
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote: `Collaborating with ${links.ownerName} was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. ${links.ownerName}'s enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, ${links.ownerName} is the ideal partner.`,
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote: `Collaborating with ${links.ownerName} was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. ${links.ownerName}'s enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, ${links.ownerName} is the ideal partner.`,
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote: `Collaborating with ${links.ownerName} was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. ${links.ownerName}'s enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, ${links.ownerName} is the ideal partner.`,
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
] as const;

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    companyName: "a",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    companyName: "a",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    companyName: "a",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    companyName: "a",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    companyName: "a",
  },
] as const;

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern - Epik Coders",
    desc: "Built responsive and interactive user interfaces using React.js while collaborating with the development team to improve user experience and application performance.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Junior Backend Developer - Ghapfy Limited",
    desc: "Developed and maintained scalable backend services, designed RESTful APIs, optimized database queries, and integrated third-party services.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Software Engineer (I) - Betopia Limited",
    desc: "Developed full-stack web applications, implemented new features, fixed bugs, and collaborated with cross-functional teams to deliver high-quality software.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Software Engineer (II) - TQ Tech Limited",
    desc: "Designed and maintained scalable web applications, improved system performance, and built modern user-facing features using React, Next.js, and backend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
] as const;

export const socialMedia = [
  {
    name: "GitHub",
    img: "/git.svg",
    link: "https://github.com/miraz-alvee",
  },
  {
    name: "Twitter",
    img: "/twit.svg",
    link: "https://twitter.com/miraz_alvee",
  },
  {
    name: "LinkedIn",
    img: "/link.svg",
    link: "https://www.linkedin.com/in/miraz-alvee/",
  },
] as const;

export const techStack = {
  stack1: ["React.js", "React.js", "Next.js", "Typescript"],
  stack2: ["Nest.js", "PostgreSQL", "MongoDB", "AWS"],
} as const;
