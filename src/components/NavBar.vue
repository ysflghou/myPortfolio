<template>
  <div>
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
      <!-- Brand/logo -->
      <a class="navbar-brand" href="#">
        <img src="../assets/logo.png" alt="logo" style="width:40px;" />
      </a>

      <!-- Links -->
      <ul class="navbar-nav">
        <li class="nav-item float-left">
          <a class="nav-link" href="#">About</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class NavBar extends Vue {}
</script>