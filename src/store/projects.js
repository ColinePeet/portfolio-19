import martineImage_1 from "@/assets/img_martine_1.jpg";
import martineImage_2 from "@/assets/img_martine_2.jpg";

import horschampsImage_1 from "@/assets/img_horschamps_1.jpg";
import horschampsImage_2 from "@/assets/img_horschamps_2.jpg";
import horschampsImage_3 from "@/assets/img_horschamps_3.jpg";

import newtonImage_1 from "@/assets/img_newton_1.jpg";
import newtonImage_2 from "@/assets/img_newton_2.jpg";
import newtonImage_3 from "@/assets/img_newton_3.jpg";
import newtonImage_4 from "@/assets/img_newton_4.jpg";

import mariageImage_1 from "@/assets/img_mariage_1.jpg";
import mariageImage_2 from "@/assets/img_mariage_2.jpg";
import mariageImage_3 from "@/assets/img_mariage_3.jpg";

import reactImage_1 from "@/assets/img_react_1.jpg";
import reactImage_2 from "@/assets/img_react_2.jpg";
import reactImage_3 from "@/assets/img_react_3.jpg";
import reactImage_4 from "@/assets/img_react_4.jpg";
import reactImage_5 from "@/assets/img_react_5.jpg";

import sncbImage_1 from "@/assets/img_sncb_1.jpg";
import sncbImage_2 from "@/assets/img_sncb_2.jpg";

import travelistaImage_1 from "@/assets/img_travelista_1.jpg";
import travelistaImage_2 from "@/assets/img_travelista_2.jpg";

import weekdayImage_1 from "@/assets/img_weekday_1.jpg";
import weekdayImage_2 from "@/assets/img_weekday_2.jpg";

const projects = {
    "martinedurt": {
      projectTitle: "Martine Durt",
      projectType: "website",
      projectImage: martineImage_1,
      dataSpeed: -1,
      id: "martinedurt",
      tools: "HTML5, Bootstrap, JS/jQuery, CSS3/Sass",
      linkUrl: "https://www.martinedurt.be",
      link: "www.martinedurt.be",
      description: "Martine Durt is a belgian painter. She has done many exhibitions over the years and needed a simple website to show her latest paintings and bio.",
      pictures: [
        martineImage_2,
      ],
      next: "horschamps"
    },
    "horschamps": {
      projectTitle: "Hors-Champs",
      projectType: "website",
      projectImage: horschampsImage_1,
      dataSpeed: 1,
      id: "horschamps",
      tools: "HTML5, JS/jQuery, CSS3/Sass, Wordpress (PHP)",
      linkUrl: "https://www.hors-champs.be",
      link: "www.hors-champs.be",
      description: "Design and development of Hors-Champs’ website. Hors-Champs is a gastronomic restaurant recently built on a domain that served as a farm in the past. In addition to the restaurant, Hors-Champs proposes a beautiful event venue and several bed & breakfast rooms. The website needed to promote these three key activities: restaurant, event venue and bed & breakfast. A custom theme was developed for Wordpress.",
      pictures: [
        horschampsImage_2, horschampsImage_3,
      ],
      next: "helmutnewton"
    },
    "helmutnewton": {
      projectTitle: "Helmut Newton",
      projectType: "layout Magazine",
      projectImage: newtonImage_2,
      dataSpeed: -1,
      id: "helmutnewton",
      tools: "InDesign",
      linkUrl: "",
      link: "/",
      description: "Retrospective brochure of the famous photographer Helmut Newton for the Bozar (training exercise). 40 pages edition.",
      pictures: [
        newtonImage_1, newtonImage_3, newtonImage_4,
      ],
      next: "mariagefreres"
    },
    "mariagefreres": {
      projectTitle: "Mariage Frères",
      projectType: "packaging",
      projectImage: mariageImage_1,
      dataSpeed: 1,
      id: "mariagefreres",
      tools: "Illustrator, Photoshop",
      linkUrl: "",
      link: "/",
      description: "New visual for the packaging of the Magic Tea collection by Mariage Frères. The cards on the top of the box represents tarot cards. The illustrations on them are handmade, then vectorized for the packaging.",
      pictures: [
        mariageImage_2, mariageImage_3,
      ],
      next: "travelista"
    },
    "travelista": {
      projectTitle: "Travelista",
      projectType: "website",
      projectImage: travelistaImage_1,
      dataSpeed: -1,
      id: "travelista",
      tools: "Vue.js, Sass, Ajax",
      linkUrl: "https://github.com/ColinePeet/evalutation_front_end",
      link: "project on github",
      description: "Travel agency website made in two days as a training exercise. Built with Vue.js and connecting to a REST API. An asynchronous request allows to show information related to the destination picked by the user.",
      pictures: [
        travelistaImage_2,
      ],
      next: "weekday"
    },
    "weekday": {
      projectTitle: "Weekday",
      projectType: "newsletter",
      projectImage: weekdayImage_1,
      dataSpeed: 1,
      id: "weekday",
      tools: "HTML5",
      linkUrl: "https://github.com/ColinePeet/weekday-newsletter",
      link: "project on github",
      description: "Design and development of a Newsletter for Weekday store as a training exercise. This is a typical 'weekly edit' of the Weekday brand, wich puts a selection of items in value.",
      pictures: [
        weekdayImage_2,
      ],
      next: "react"
    },
    "react": {
      projectTitle: "Re-act",
      projectType: "webdesign, branding",
      projectImage: reactImage_1,
      dataSpeed: -1,
      id: "react",
      tools: "Adobe XD, Photoshop, Illustrator",
      linkUrl: "",
      link: "/",
      description: "Re-act is a fictive brand of products only made from Piñatex, a natural leather alternative extracted from pineapple fibres. As an exercice, I made the logo, the website's design, the tags and a minimal packaging.",
      pictures: [
        reactImage_2, reactImage_3, reactImage_4, reactImage_5,
      ],
      next: "sncb"
    },
    "sncb": {
      projectTitle: "SNCB",
      projectType: "pictograms",
      projectImage: sncbImage_1,
      dataSpeed: 1,
      id: "sncb",
      tools: "Illustrator",
      linkUrl: "",
      link: "/",
      description: "This map represents different points of interest in Brussels. There are 20 pictograms for 20 different places and monuments in Brussels. This project was part of my internship at FamousGrey.",
      pictures: [
        sncbImage_2,
      ],
      next: "martinedurt"
    },

}

export default projects;