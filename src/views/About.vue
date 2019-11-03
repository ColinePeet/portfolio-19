<template>
  <div class="container">
    <div id="about">
      <div data-aos="fade-down" data-aos-once="true" data-aos-delay="100">
        <p>I’m a graphic designer and front-end developer based in Brussels, Belgium. Creative, with a deep interest for graphic culture, I’m willing to go from design to implementation of web projects.</p>
      </div>
      <div data-aos="fade-down" data-aos-once="true" data-aos-delay="400">
        <h4>Software</h4>
        <ul>
          <li>Photoshop</li>
          <li>Illustrator</li>
          <li>InDesign</li>
          <li>Adobe XD</li>
          <li>Visual Studio Code</li>
        </ul>
      </div>
      <div data-aos="fade-down" data-aos-once="true" data-aos-delay="700">
        <h4>Skills</h4>
        <ul>
          <li>HTML5</li>
          <li>CSS3 (including Sass)</li>
          <li>JavaScript (including jQuery)</li>
          <li>Vue.js</li>
          <li>PHP (Wordpress)</li>
          <li>Bootstrap</li>
          <li>Git</li>
          <li>Scrum</li>
        </ul>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "home"
};
</script>


<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
#about {
  display: flex;
  justify-content: center;
  div {
    &:nth-child(1) {
      width: 40%;
      margin-right: 100px;
    }
    &:nth-child(2) {
      margin-right: 80px;
    }
  }
}

p {
  font-size: 1.5em;
}
h4 {
  font-size: 1.2em;
  font-weight: 500;
  position: relative;
  display: inline-block;
  margin-bottom: 0.9em;
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
ul {
  margin: 0;
  padding: 0;
  li {
    margin: 0;
    padding: 0;
    list-style: none;
    font-size: 1.1em;
    font-weight: 300;
    line-height: 1.4em;
  }
}
</style>