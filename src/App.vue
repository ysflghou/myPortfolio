<template>
  <div id="app">
    <NavBar />
    <div id="nav" style="margin-top: 100px;">
      <router-link to="/home">Home</router-link>|
      <router-link to="/experiences">Experience</router-link>|
      <router-link to="/educations">Education</router-link>
    </div>
    <router-view :key="$route.path" />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  name: "app",
  components: { NavBar }
};
</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  font-size: larger;
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
