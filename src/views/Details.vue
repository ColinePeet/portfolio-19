<template>
  <div class="container">
    Lorem ipsum dolor sit
    Lorem ipsum dolor sit
    Lorem ipsum dolor sit
    Lorem ipsum dolor sit
    Lorem ipsum dolor sit
    Lorem ipsum dolor sit
    Lorem ipsum dolor sit
    Lorem ipsum dolor sit
    Lorem ipsum dolor sit
    Lorem ipsum dolor sit
    Lorem ipsum dolor sit
    Lorem ipsum dolor sit
    Lorem ipsum dolor sit
    Lorem ipsum dolor sit
    Lorem ipsum dolor sit
    Lorem ipsum dolor sit
    Lorem ipsum dolor sit
    Lorem ipsum dolor sit
    Lorem ipsum dolor sit
    Lorem ipsum dolor sit
    Lorem ipsum dolor sit
    Lorem ipsum dolor sit
    Lorem ipsum dolor sit
    Lorem ipsum dolor sit
    Lorem ipsum dolor sit
    Lorem ipsum dolor sit
    Lorem ipsum dolor sit
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet molestias incidunt quaerat molestiae mollitia, eaque culpa repellendus fugit nemo perspiciatis iusto adipisci aliquid corporis veritatis, debitis sunt quos voluptatum natus.
    PAGE DETAIL PROJET


  {{ projects[$route.params.projectId] }}
  </div>
</template>


<script>


import projects from "@/store/projects.js"

export default {
  name: "detail",
  props: ["id"],
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