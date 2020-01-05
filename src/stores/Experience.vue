<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h4 class="card-title">{{exp.poste}}</h4>
      </div>
      <div class="card-body">
        <h5 class="card-title">{{exp.company}}</h5>
        <h5 class="card-title">{{exp.location}}</h5>
        <h6 class="card-title">{{from}} - {{to}} | {{period}}</h6>
        <p class="card-text" style="font-family: sans-serif;">{{exp.description}}</p>
        <a :href="exp.link" class="card-link">Company website</a>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import experiencesStore from "../assets/store/experiences.js";
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
    exp() {
      return experiencesStore.experiences.find(
        experience => experience.id == this.id
      );
    },
    from() {
      return Utils.GetShowedDate(this.exp.fromDate);
    },
    to() {
      return Utils.GetShowedDate(this.exp.toDate);
    },
    period() {
      return Utils.GetPeriod(this.exp.fromDate, this.exp.toDate);
    }
  }
});
</script>