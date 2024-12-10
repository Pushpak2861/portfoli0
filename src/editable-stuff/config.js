// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Pushpak",
  middleName: "",
  lastName: "Raj",
  message: " Time waits for no one. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/Pushpak2861",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/pushpak_raj_/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/pushpak-raj-s-3a394318b/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/pushpak.jpg"),
  imageSize: 375,
  message:
    "My name is Pushpak Raj. I’m a Masters student in Artificial Intelligence and Machine Learning from University of Limerick at Ireland. I'm most passionate about giving back to the community, My Goal is to be a Machine Learning engineering. In my free time I like working on open source projects.",
  resume: "https://drive.google.com/file/d/1-1R4mFcFcRA9fJ00-XZApnQH_MeJ2qkE/view?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "pushpak2861", 
  reposLength: 4,
  specificRepos: ["Genetic-programming" , "gradient_descent" , "pytorch" , "Googletrans"],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "A lesson without pain is meaningless. That’s because no one can gain without sacrificing something. But by enduring that pain and overcoming it, he shall obtain a powerful, unmatched heart.",
  images: [
    { 
      img: require("../editable-stuff/pushpak.jpg"), 
      label: "First slide label", 
      paragraph: "When you give up, that's when the game is over." 
    },
    { 
      img: require("../editable-stuff/pushpak.jpg"), 
      label: "Second slide label", 
      paragraph: "You can't change the past. But you can change the future." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "SQL", value: 75 },
    { name: "Data Structures", value: 85 },
    { name: "pytorch", value: 65 },
    { name: "Machine Learning", value: 90 },
    { name: "NLP", value: 65 },
    { name: "AI-AGENTS", value: 55 },
    { name: "Data Analytics", value: 80 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Software Engineering or Machine Learning opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "pushpaksum@gmail.com",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'AI/ML Student',// Here Add Company Name
      companylogo: require('../assets/img/lim.png'),
      date: 'Sept 2024 – Present',
    },
    {
      role: 'Big Data Engineer',
      companylogo: require('../assets/img/cog.png'),
      date: 'July 2022 – Aug 2024',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
