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
        <!-- project inside-->
        <router-link :to="{ name: 'details', params: { projectId: project.id }}">
          <div data-aos="fade-up" data-aos-duration="1000" :data-aos-delay="computeDelay(index)">
            <div class="image">
              <img :src="project.projectImage" alt="project image">
            </div>
            <h3>{{project.projectTitle}}</h3>
            <p>{{project.projectType}}</p>
          </div>
        </router-link>
        <!-- project inside End -->
      </div>
      <!-- Project End -->
    </div>
  </div>
</template>


<script>
import projects from "@/store/projects.js";

export default {
  name: "home",
  methods: {
    computeDelay: function(index) {
      return 0 * index; // Math.min(2, index) * 300;
    }
  },
  data: function() {
    return {
      projects: projects
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
      overflow: hidden;
      cursor: url("../assets/cursor-plus.png") 2 2, pointer;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: 0.3s all ease;
        // filter: grayscale(100%);
      }
      &:hover {
        transform: scale(0.9);
        img {
          transform: scale(1.2);
          // filter: grayscale(0);
        }
      }
    }
  }
}

.grid-sizer,
.grid-item {
  width: 40%;
}

h3 {
  color: #2e3235;
  font-size: 1em;
  display: inline-block;
  margin-bottom: 0em;
  margin-top: 0.4em;
  font-weight: 400;
  position: relative;
}

p {
  color: #2e3235;
  margin-top: 0;
  font-weight: 300;
}
</style>