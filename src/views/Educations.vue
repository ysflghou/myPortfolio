<template>
  <div class="container">
    <h2>Education</h2>
    <div class="container educations">
      <div v-for="id in educationsIds" :key="id">
        <Education v-bind:id="id" />
      </div>
    </div>
  </div>
</template>
<script>
import educationsStore from "@/store/educations.js";
export default {
  computed: {
    educationsIds() {
      return educationsStore.educations.map(education => education.id);
    }
  }
};
</script>
<style scoped>
.educations {
  text-align: left;
}
</style>