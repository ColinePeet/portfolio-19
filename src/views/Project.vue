<template>
  <div class="container">
    <!-- image 1 -->
    <div class="project-head" data-aos="fade-up" data-aos-once="true">
      <img src="@/assets/martine1.jpg" alt="Project image">
    </div>
    <!-- image 1 End-->
    <div class="details">
      <div>
        <h4>Project type:</h4>
        <p>website</p>
      </div>
      <div>
        <h4>Tools:</h4>
        <p>
          HTML5,
          Bootstrap,
          Ec6,
          CSS3
        </p>
      </div>
      <div>
        <h4>Link:</h4>
        <a href="#" target="_blank">wwww.martinedurt.be</a>
      </div>
    </div>
    <!-- Infos -->
    <div class="info" data-aos="fade-in" data-aos-once="true">
      <div class="general">
        <h1>
          Martine
          <br>Durt
        </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum natus cumque ipsa voluptatem. Dolor officiis obcaecati quod cumque sunt quae natus. Minus commodi vitae numquam natus optio iure doloremque amet.</p>
      </div>
    </div>
    <!-- Infos End -->


    <!-- Image 2 & 3 -->
    <div class="images">
      <div class="englobe" v-rellax="rellax" data-rellax-speed="1">
        <div class="box">
          <img src="@/assets/martine1.jpg" alt>
        </div>
      </div>
      <div class="box englobe" v-rellax="rellax" data-rellax-speed="-1">
        <img src="@/assets/martine1.jpg" alt>
      </div>
    </div>
    <!-- Image 2 & 3 End -->

    <!-- Next project -->
    <div class="next" data-aos="fade-up" data-aos-once="true">
      <a href>Next project</a>
    </div>
    <!-- Next project End -->
  </div>
</template>


<script>
export default {
  name: "home"
};
</script>


<style lang="scss" scoped>
.project-head {
  height: calc(100vh - 10px);
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.info {
  width: 60vw;
  margin: 6em auto 3em auto;
  color: #2e3235;
  .general {
    display: flex;
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
}
.details {
  opacity: 1;
  margin: 1em 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  div {
    display: flex;
    align-items: center;
    font-size: 1.1em;
  }
  h4 {
    color: #2e3235;
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
.images {
  display: flex;
  justify-content: space-between;
  margin-bottom: 5em;
  .englobe {
    width: 45%;
    .box {
      height: 60vh;
      overflow: hidden;
    }
    &.box {
      height: 60vh;
      overflow: hidden;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    &:nth-child(1) {
      margin-top: 150px;
    }
  }
}
.next {
  font-weight: bold;
  font-size: 2em;
  text-align: center;
  margin: 4em 0;
  a {
    color: #2e3235;
  }
}



</style>