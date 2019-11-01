<template>
  <div class="container">
    <div
      id="projects"
      v-masonry="containerId"
      transition-duration="0.3s"
      item-selector=".grid-item"
    >
      <!-- Project -->
      <div
        v-masonry-tile
        class="grid-item"
        v-for="(project, index) in projects"
        v-bind:key="project.id"
        v-rellax="rellax"
        :data-rellax-speed="project.dataSpeed"
      >
        <!-- data-aos -->
        <div data-aos="fade-up" data-aos-duration="1000" :data-aos-delay="computeDelay(index)">
          <div class="image">
            <img :src="project.projectImage" alt="project image">
          </div>
          <h3>{{project.projectTitle}} {{computeDelay(index)}}</h3>
          <p>{{project.projectType}}</p>
        </div>
        <!-- data-aos End -->
      </div>
      <!-- Project End -->

    </div>
  </div>
</template>


<script>
import martineImage from "@/assets/img-martine2.jpg";
import horschampsImage from "@/assets/img-horschamps.jpg";
import helmutImage from "@/assets/he-min.jpg";
import reactImage from "@/assets/n-min.jpg";
import sncbImage from "@/assets/sncb-min.jpg";
import teaImage from "@/assets/tea-min.jpg";

export default {
  name: "home",
  methods: {
    computeDelay: function(index) {
      return Math.min(2, index) * 300;
    }
  },
  data: function() {
    return {
      projects: [
        {
          projectTitle: "Martine Durt",
          projectType: "website",
          projectImage: martineImage,
          dataSpeed: -1
        },
        {
          projectTitle: "Hors-Champs",
          projectType: "website",
          projectImage: horschampsImage,
          dataSpeed: 1
        },
        {
          projectTitle: "Helmut Newton",
          projectType: "Layout Magazine",
          projectImage: helmutImage,
          dataSpeed: -1
        },
        {
          projectTitle: "Re-act",
          projectType: "web design, branding",
          projectImage: reactImage,
          dataSpeed: 1
        },
        {
          projectTitle: "SNCB",
          projectType: "pictrograms",
          projectImage: sncbImage,
          dataSpeed: -1
        },
        {
          projectTitle: "Mariage Frères",
          projectType: "packaging",
          projectImage: teaImage,
          dataSpeed: 1
        }
      ]
    };
  }
};
</script>


<style lang="scss" scoped>
#projects {
  margin-top: 100px;
  .grid-item {
    margin-right: 10%;
    box-sizing: border-box;
    margin-bottom: 100px;
    .image {
      width: 100%;
      position: relative;
      transition: 0.3s all ease;
      overflow: hidden;
      img {
        transition: 0.3s all ease;
      }
    }
    &:nth-child(2) {
      margin-top: 100px;
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
  margin-bottom: 0.1em;
  margin-top: 0.2em;
  font-weight: 400;
  position: relative;
}

p {
  margin-top: 0;
  font-weight: 300;
}
</style>