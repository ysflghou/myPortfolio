<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h4 class="card-title">{{educ.title}}</h4>
      </div>
      <div class="card-body">
        <h5 class="card-title">{{educ.school}}</h5>
        <h5 class="card-title">{{educ.location}}</h5>
        <h6 class="card-title">{{from}} - {{to}} | {{period}}</h6>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import educationsStore from "../assets/store/educations.js";
import Utils from "@/Utils.ts";
import { Vue } from "vue-property-decorator";
export default Vue.extend({
  props: {
    id: {
      type: Number,
      default: 1,
      required: true
    }
  },
  computed: {
    educ() {
      return educationsStore.educations.find(
        education => education.id == this.id
      );
    },
    from() {
      return Utils.GetShowedDate(this.educ.fromDate);
    },
    to() {
      return Utils.GetShowedDate(this.educ.toDate);
    },
    period() {
      return Utils.GetPeriod(this.educ.fromDate, this.educ.toDate);
    }
  }
});
</script>