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
import educationsStore from "@/assets/store/educations.ts";
import Utils from "@/Utils.ts";
import { Vue } from "vue-property-decorator";
import Educ from "@/models/Educ";

export default Vue.extend({
  props: {
    id: {
      type: Number,
      default: 1,
      required: true
    }
  },
  computed: {
    educ(): Educ {
      const educ = educationsStore
        .GetEducations()
        .find(education => education.id == this.id);
      if (educ == undefined) return Educ.default();
      return new Educ(
        educ.id,
        educ.title,
        educ.school,
        educ.location,
        educ.fromDate,
        educ.toDate
      );
    },
    from(): string {
      return Utils.GetShowedDate(this.educ.fromDate);
    },
    to(): string {
      return Utils.GetShowedDate(this.educ.toDate);
    },
    period(): string {
      return Utils.GetPeriod(this.educ.fromDate, this.educ.toDate);
    }
  }
});
</script>