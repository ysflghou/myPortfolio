<template>
  <div id="app">
    <!-- <Header /> -->
    <div id="content">
      <div id="nav" style="margin-top: 100px;">
        <router-link to="/">Home</router-link>|
        <router-link to="/experiences">Experience</router-link>|
        <router-link to="/educations">Education</router-link>|
        <router-link to="/contact">Contact</router-link>
      </div>
      <router-view :key="$route.path" />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "app",
  components: {
    // Header,
    Footer
  }
};
</script>
<style>
#app {
  background-color: gray;
  min-width: 100%;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
  min-height: 100vh;
}

#content {
  padding-bottom: 2rem;
  padding-top: 2rem;
}

#nav {
  font-size: larger;
  padding-bottom: 80px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 10px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
