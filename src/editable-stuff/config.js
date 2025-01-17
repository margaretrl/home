// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Margaret",
  middleName: "",
  lastName: "Rivas Lutzkanov",
  message: " Passionate about changing the world with technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/margaretrl",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/margaretrl/",
    },
    {
      image: "fas fa-envelope",
      url: "mailto:margaretrivaslutz@hotmail.com",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/margaretrivas/",
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
  imageLink: require("../editable-stuff/margaretrivas.png"),
  imageSize: 375,
  message:
    "My name is Margaret Rivas. I'm currently pursuing a BS in Computer Science and a BS in Computational Biology at Florida State University. I was raised in Venezuela, but I was both born in Florida and have been living here for the past 5 years. I am most passionate about giving back to my community, and my goal is to pursue this passion within the field of technology.  I love to combine my healthcare background with my computer science skills.  ",
  resume: require("../editable-stuff/resume.pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "margaretrl", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: ['COVID-19-Data-Analysis','ShowTrac','flappyKris','margaretrl' ],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/margaretrivas.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/margaretrivas.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
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
    { name: "Python", value: 85 },
    { name: "MS Power Tools: PowerBi & Power Apps", value: 80 },
    { name: "SQL", value: 70 },
    { name: "C++", value: 75 },
    { name: "Cypher - AWS Neptune", value: 70 },
    { name: "R", value: 85 },
    { name: "HTML/CSS/JS", value: 80 },
    { name: "Git", value: 80 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 80 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 85 },
    { name: "Empathy", value: 95 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Software Engineering or Data Analytics opportunity! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "margaretrivaslutz@hotmail.com",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Technology Intern - Johnson & Johnson',
      companylogo: require('../assets/img/jnj2.png'),
      date: 'May 2022 – Present',
    },
    {
      role: 'Shadowing & Volunteering - Memorial Hospital Miramar',
      companylogo: require('../assets/img/mem.png'),
      date: '2019 – 2020',
    },
    {
      role: 'Research Assistant - Florida State University',
      companylogo: require('../assets/img/fsu.png'),
      date: 'September 2021 – Present',
    },

    {
      role: 'Assistant CPR Instructor - HOSA',
      companylogo: require('../assets/img/hosa.png'),
      date: '2018 – 2020',
    },
  ],
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
