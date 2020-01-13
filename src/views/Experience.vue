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
import experiencesStore from "@/assets/store/experiences.ts";
import Utils from "@/Utils.ts";
import { Vue } from "vue-property-decorator";
import Exp from "@/models/Exp";

export default Vue.extend({
  props: {
    id: {
      type: Number,
      default: 1,
      required: true
    }
  },
  computed: {
    exp(): Exp {
      const exp = experiencesStore
        .GetExperiences()
        .find(experience => experience.id == this.id);
      if (exp == undefined) return Exp.default();
      return new Exp(
        exp.id,
        exp.poste,
        exp.company,
        exp.location,
        exp.fromDate,
        exp.toDate,
        exp.description,
        exp.link
      );
    },
    from(): string {
      return Utils.GetShowedDate(this.exp.fromDate);
    },
    to(): string {
      return Utils.GetShowedDate(this.exp.toDate);
    },
    period(): string {
      return Utils.GetPeriod(this.exp.fromDate, this.exp.toDate);
    }
  }
});
</script>