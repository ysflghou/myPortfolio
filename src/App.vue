<template>
  <div id="app">
    <nav class="navbar navbar-expand-md bg-dark navbar-dark">
      <a class="navbar-brand" id="user_name" href="/">Youssef Lghoumaigui</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="collapsibleNavbar">
        <ul id = "mynav" class="navbar-nav">
          <li class="nav-item myitem">
            <router-link to="/">Home</router-link>
          </li>
          <li class="nav-item myitem">
            <router-link to="/experiences">Experience</router-link>
          </li>
          <li class="nav-item myitem">
            <router-link to="/educations">Education</router-link>
          </li>
          <li class="nav-item myitem">
            <router-link to="/contact">Contact</router-link>
          </li>     
        </ul>
      </div>  
    </nav>
    <div id="content">
      <router-view :key="$route.path" />
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";

export default {
  name: "app",
  components: {
    Footer
  }
};
</script>
<style>
#app {
  background-color: azure;
  min-width: 100%;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
  min-height: 100vh;
} 
#user_name {
font-family: 'Sriracha', cursive;
}

#content {
  padding-bottom: 2rem;
}

#mynav {
  font-size: larger;
}
.myitem {
  margin: 10px;
}
#mynav a {
  font-weight: bold;
  color:white;
}

#mynav a.router-link-exact-active {
  color: #42b983;
}
</style>
