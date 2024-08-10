import project1 from "../assets/projects/disney-clone.png";
import project2 from "../assets/projects/coffee-shop.png";
import project3 from "../assets/projects/flavoro-clone.png";

export const HERO_CONTENT = `Hello! I am a Front End React developer. Currently building a strong and growing skill set in HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, React Js and Redux. I consistently improve a keen eye for design and a commitment to producing logical, accessible, and responsive code. I am dedicated to continuous learning and staying up-to-date with the latest trends and best coding practices, ensuring that I can be a useful team player and provide efficient solutions. Let's connect and discuss how I can contribute to your web development team!`;

export const ABOUT_TEXT = `I am a dedicated and versatile Frontend developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, React Js and Redux. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies.`;

export const EXPERIENCES = [
  {
    year: "September 2023 - Present",
    role: "Frontend Developer",
    company: "4Achievers",
    description: `4Achievers Frontend Development course covers topics such as HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, React Js, Redux and Responsive Design. Designed and developed user interfaces for web applications using React Js, Tailwind CSS`,
    technologies: [
      "HTML",
      "CSS",
      "Javascript",
      "React.js",
      "Redux",
      "Bootstrap",
      "Tailwind CSS",
    ],
  },
];

export const PROJECTS = [
  {
    title: "Disney Clone",
    image: project1,
    description:
      "A disney clone app from the vite React js and tailwind css and the TMDB API is used to fetch the data and represents in the attractive cards. The data are shown in the different genres and based on the the particular genre the movies list are displayed.",
    technologies: ["React", "Tailwind CSS", "tmdb API"],
    webLink: "https://disney-cln.netlify.app/",
  },
  {
    title: "Coffee Shop",
    image: project2,
    description:
      "A coffee shop website with a attractive user interface in which HTML, CSS, Bootstrap is used and is a responsive web page.",
    technologies: ["HTML", "CSS", "Bootstrap"],
    webLink:
      "https://rawcdn.githack.com/mohib990T/Coffee-Shop/cf6493d7c8f06c9c935529c6c48066cbe6cef02e/index.html",
  },
  {
    title: "Flavoro Clone",
    image: project3,
    description:
      "A Flavoro clone in which user can add the items to the cart and also increase or decrease the items. In the order list the number of items and the total price of these items are shown and if there are no items are added to the order list then order list shows 'The cart is empty'. Finally if the user click on checkout button if there are some items the user get a successful message. ",
    technologies: ["React", "Tailwind CSS", "Redux"],
    webLink: "https://flavoro-clone-liard.vercel.app/",
  },
];

export const CONTACT = {
  address: "Hazaribagh, Jharkhand, India ",
  phoneNo: "+91 78702 59987 ",
  email: "mohib7870@gmail.com",
};
