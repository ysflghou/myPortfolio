<template>
  <div class="container">
    <div class="container educations">
      <div v-for="id in educationsIds" :key="id">
        <Education v-bind:id="id" />
      </div>
    </div>
  </div>
</template>
<script>
import Education from "@/views/Education.vue";
import educationsStore from "@/assets/store/educations.ts";
export default {
  components: { Education },
  computed: {
    educationsIds() {
      return educationsStore.GetEducations().map(education => education.id);
    }
  }
};
</script>
<style scoped>
.educations {
  text-align: left;
}
</style>