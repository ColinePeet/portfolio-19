<template>
  <div class="container">
    <div id="projects">
      <!-- Project -->
      <div
        v-for="(project, index) in projects"
        v-bind:key="project.id"
        v-rellax="rellax"
        :data-rellax-speed="project.dataSpeed"
        class="project"
      >
        <!-- data-aos -->
        <div data-aos="fade-up" data-aos-duration="1000" :data-aos-delay="computeDelay(index)">
          <div class="image">
            <img :src="project.projectImage" alt="project image">
          </div>
          <h3>{{project.projectTitle}}</h3>
          <p>{{project.projectType}}</p>
          <router-link :to="{ name: 'details', params: { projectId: project.id }}">{{project.projectTitle}}</router-link>
        </div>
        <!-- data-aos End -->
      </div>
      <!-- Project End -->
    </div>
  </div>
</template>


<script>
import martineImage from "@/assets/martine1.jpg";
import horschampsImage from "@/assets/map1.jpg";
import helmutImage from "@/assets/martine1.jpg";
import reactImage from "@/assets/map1.jpg";
import sncbImage from "@/assets/martine1.jpg";
import teaImage from "@/assets/map1.jpg";

export default {
  name: "home",
  methods: {
    computeDelay: function(index) {
      return 0 * index; // Math.min(2, index) * 300;
    }
  },
  data: function() {
    return {
      projects: [
        {
          projectTitle: "Martine Durt",
          projectType: "website",
          projectImage: martineImage,
          dataSpeed: -2,
          id: "martinedurt",
        },
        {
          projectTitle: "Hors-Champs",
          projectType: "website",
          projectImage: horschampsImage,
          dataSpeed: 1,
          id: "horschamps",
        },
        {
          projectTitle: "Helmut Newton",
          projectType: "Layout Magazine",
          projectImage: helmutImage,
          dataSpeed: -2,
          id: "helmutnewton",
        },
        {
          projectTitle: "Re-act",
          projectType: "web design, branding",
          projectImage: reactImage,
          dataSpeed: 1,
          id: "react",
        },
        {
          projectTitle: "SNCB",
          projectType: "pictrograms",
          projectImage: sncbImage,
          dataSpeed: -2,
          id: "scnb",
        },
        {
          projectTitle: "Mariage Frères",
          projectType: "packaging",
          projectImage: teaImage,
          dataSpeed: 1,
          id: "mariagefreres",
        }
      ]
    };
  }
};
</script>


<style lang="scss" scoped>
#projects {
  margin-top: 100px;
  margin-bottom: 100px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  .project {
    box-sizing: border-box;
    margin-bottom: 150px;
    width: 40%;
    margin-right: 2%;
    &:nth-child(1) {
      margin-top: 100px;
    }
    .image {
      width: 100%;
      height: 50vh;
      position: relative;
      transition: 0.3s all ease;
      cursor: url("../assets/cursor-plus.png") 2 2, pointer;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: 0.3s all ease;
      }
    }
    &:hover {
      .image {
        transform: scale(0.9);
      }
      img {
        transform: scale(1.2);
      }
    }
  }
}

.grid-sizer,
.grid-item {
  width: 40%;
}

h3 {
  color: black;
  font-size: 1em;
  display: inline-block;
  margin-bottom: 0em;
  margin-top: 0.4em;
  font-weight: 400;
  position: relative;
}

p {
  margin-top: 0;
  font-weight: 300;
}
</style>