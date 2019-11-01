<template>
  <div id="app">
    <nav id="menu">
      <router-link to="/">Coline Peetermans</router-link>
      <router-link to="/about">About</router-link>
    </nav>
    <nav id="contact">
      <a href="mailto:col.peetermans@gmail.com">Mail</a>,
      <a href="tel:+32497100076">Tel</a>
    </nav>
    <router-view/>
  </div>
</template>

<style lang="scss">
/* Typo */
@font-face {
  font-family: "Lunchtype";
  src: url("assets/fonts/lunchtype22-regular-webfont.woff2") format("woff2");
  font-weight: 400;
}
@font-face {
  font-family: "Lunchtype";
  src: url("assets/fonts/lunchtype22-light-webfont.woff2") format("woff2");
  font-weight: 300;
}
@font-face {
  font-family: "Lunchtype";
  src: url("assets/fonts/lunchtype22-medium-webfont.woff2") format("woff2");
  font-weight: bold;
}

/* Fonts */

/* Container */
#app {
  font-family: "Lunchtype", Helvetica, Arial, sans-serif;
  color: #484d52;
}
.container {
  padding: 0 50px;
}

/* Normalize stuff */
* {
  box-sizing: border-box;
}
img {
  width: 100%;
}
a {
  text-decoration: none;
}

/* Nav link */
nav {
  a {
    font-weight: 500;
    color: black;
    text-decoration: none;
    position: relative;
    &::after {
      content: "";
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 100%;
      height: 2px;
      background: #2e3235;
      opacity: 0;
      transition: 0.2s all ease;
    }
    &:hover {
      &::after {
        opacity: 1;
      }
    }
  }
}

/* Nav menu */
#menu {
  padding: 25px 40px 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 2;
  a {
    font-size: 1.1em;
    &:nth-child(2) {
      &.router-link-exact-active {
        &::after {
          opacity: 1;
        }
      }
    }
  }
}

/* Nav contact */
#contact {
  position: fixed;
  bottom: 70px;
  right: 5px;
  transform: rotate(-90deg);
  a {
    font-size: 1.2em;
  }
}
</style>
