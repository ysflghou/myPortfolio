<template>
    <div class="container experiences">
      <div v-for="id in experiencesIds" :key="id">
        <Experience v-bind:id="id" />
      </div>
    </div>
</template>
<script>
import Experience from "@/views/Experience.vue";
import experiencesStore from "@/assets/store/experiences.ts";
export default {
  components: { Experience },
  computed: {
    experiencesIds() {
      return experiencesStore.GetExperiences().map(experience => experience.id);
    }
  }
};
</script>
<style scoped>
.experiences {
  text-align: left;
  margin: 50px auto;
}
</style>