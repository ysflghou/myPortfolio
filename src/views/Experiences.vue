<template>
  <div class="container">
    <h2>Experiences</h2>
    <div class="container experiences">
      <div v-for="id in experiencesIds" :key="id">
        <Experience v-bind:id="id" />
      </div>
    </div>
  </div>
</template>
<script>
import experiencesStore from "@/experiences-store.js";
export default {
  computed: {
    experiencesIds() {
      return experiencesStore.experiences.map(experience => experience.id);
    }
  }
};
</script>
<style scoped>
.experiences {
  text-align: left;
}
</style>