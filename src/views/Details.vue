<template>
  <div class="container">
    <!-- image head -->
    <div id="project-head" data-aos="fade-up" data-aos-once="true">
      <img :src="project.projectImage" alt="Project image">
    </div>
    <!-- image head End-->

    <!-- Details -->
    <div id="details" data-aos="fade-up" data-aos-once="true">
      <div>
        <h4>Project type:</h4>
        <p>{{ project.projectType }}</p>
      </div>
      <div>
        <h4>Tools:</h4>
        <p>{{ project.tools}}</p>
      </div>
      <div v-if="project.link !== '/'">
        <h4>Link:</h4>
        <a :href="project.linkUrl" target="_blank">{{ project.link}}</a>
      </div>
    </div>
    <!-- Details End -->

    <!-- Infos -->
    <div id="info" data-aos="fade-up" data-aos-once="true">
      <h1>{{ project.projectTitle }}</h1>
      <p>{{ project.description }}</p>
    </div>
    <!-- Infos End -->

    <!-- Images -->
    <div id="images">
      <img v-for="(picture, index) in project.pictures" v-bind:key="index" :src="picture" alt data-aos="fade-up" data-aos-once="true" />
      
    </div>
    <!-- Images End -->

    <!-- Next project -->
    <div class="next" data-aos="fade-up" data-aos-once="true">
      <router-link :to="{ name: 'details', params: { projectId: project.next }}">Next project</router-link>
    </div>
  </div>
</template>


<script>
import projects from "@/store/projects.js";

export default {
  name: "detail",
  props: ["projectId"],
  data: function() {
    return {};
  },
  computed: {
    project: function() {
      return projects[this.projectId];
    }
  }
};
</script>


<style lang="scss" scoped>
/* Image project Head */
#project-head {
  height: calc(100vh - 65px);
  margin-top: 65px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

/* Details */
#details {
  margin: 1em 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: #2e3235;
  div {
    display: flex;
    align-items: center;
    font-size: 1.1em;
  }
  h4 {
    font-weight: 500;
    margin: 0;
    margin-right: 8px;
    position: relative;
    &::after {
      content: "";
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 100%;
      height: 2px;
      background: #2e3235;
    }
  }
  p,
  a {
    color: #2e3235;
    margin: 0;
    line-height: 1.5em;
  }
}

/* Infos */
#info {
  width: 60vw;
  margin: 100px auto;
  color: #2e3235;
  display: flex;
  align-items: center;
  h1 {
    font-size: 2.9em;
    line-height: 1.1em;
    margin: 0;
    width: 30%;
  }
  p {
    margin: 0;
    width: 70%;
    font-size: 1.2em;
    line-height: 1.4em;
  }
}

/* Images */
#images {
  margin: 0 auto;
  width: 60vw;
  margin-bottom: 50px;
  img {
    width: 100%;
    height: auto;
    margin: 0;
    margin-bottom: 20px;
  }
}

/* Next link*/
.next {
  font-weight: bold;
  font-size: 2em;
  text-align: center;
  margin: 2em 0;
  a {
    color: #2e3235;
    position: relative;
    &::after {
      content: "";
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 100%;
      height: 3px;
      background: #2e3235;
      opacity: 0;
      transition: 0.2s all ease-in-out;
    }
    &:hover {
      &::after {
        opacity: 1;
      }
    }
  }
}
</style>