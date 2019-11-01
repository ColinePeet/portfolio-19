import martineImage from "@/assets/martine1.jpg";
import horschampsImage from "@/assets/map1.jpg";
import helmutImage from "@/assets/martine1.jpg";
import reactImage from "@/assets/map1.jpg";
import sncbImage from "@/assets/martine1.jpg";
import teaImage from "@/assets/map1.jpg";

const projects = {
    "martinedurt": {
      projectTitle: "Martine Durt",
      projectType: "website",
      projectImage: martineImage,
      dataSpeed: -2,
      id: "martinedurt",
    },
    "horschamps": {
      projectTitle: "Hors-Champs",
      projectType: "website",
      projectImage: horschampsImage,
      dataSpeed: 1,
      id: "horschamps",
    },
    "helmutnewton": {
      projectTitle: "Helmut Newton",
      projectType: "Layout Magazine",
      projectImage: helmutImage,
      dataSpeed: -2,
      id: "helmutnewton",
    },
    "react": {
      projectTitle: "Re-act",
      projectType: "web design, branding",
      projectImage: reactImage,
      dataSpeed: 1,
      id: "react",
    },
    "sncb": {
      projectTitle: "SNCB",
      projectType: "pictrograms",
      projectImage: sncbImage,
      dataSpeed: -2,
      id: "scnb",
    },
    "mariagefreres": {
      projectTitle: "Mariage Frères",
      projectType: "packaging",
      projectImage: teaImage,
      dataSpeed: 1,
      id: "mariagefreres",
    }
}

export default projects;