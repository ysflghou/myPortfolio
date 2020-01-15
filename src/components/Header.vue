<template>
  <div class="header">
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
      <!-- Brand/logo -->
      <a class="navbar-brand" href="#">
        <img src="../assets/logo.png" alt="logo" style="width:40px;" />
      </a>

      <!-- Links -->
      <ul class="navbar-nav">
        <li class="nav-item float-left">
          <a class="nav-link" href="#">Contact</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Header extends Vue {}
</script>
<style scoped>
.header {
  position: absolute;
  top: 0;
  width: 100%;
  height: 2rem;
}
</style>