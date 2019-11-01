<template>
  <div class="container">
    <div id="about">
      <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem debitis nihil impedit, blanditiis rerum ipsum quam, ad iste voluptatem ex veniam esse eligendi hic nobis eaque beatae tempore. Harum, cupiditate.</p>
      </div>
      <div>
        <h4>Software</h4>
        <ul>
          <li>Photoshop</li>
          <li>Illustrator</li>
          <li>InDesign</li>
          <li>Adobe XD</li>
          <li>Visual Studio Code</li>
          <li>Git</li>
        </ul>
      </div>
      <div>
        <h4>Language</h4>
        <ul>
          <li>HTML5</li>
          <li>CSS3 (including Sass)</li>
          <li>JavaScript (including jQuery)</li>
          <li>Vue.js</li>
          <li>PHP (Wordpress)</li>
          <li>Bootstrap</li>
          <li>Ajax</li>
          <li>Node</li>
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
  margin-bottom: .9em;
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