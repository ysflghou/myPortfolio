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
<style scoped>
@media screen and (min-width: 601px) {
  p {
    font-size: 16px;
  }
}

@media screen and (max-width: 600px) {
  p {
    font-size: 15px;
  }
}
@media screen and (min-width: 601px) {
  h6 {
    font-size: 18px;
  }
}

@media screen and (max-width: 600px) {
  h6 {
    font-size: 15px;
  }
}
@media screen and (min-width: 601px) {
  h5 {
    font-size: 20px;
  }
}

@media screen and (max-width: 600px) {
  h5 {
    font-size: 17px;
  }
}
@media screen and (min-width: 601px) {
  h4 {
    font-size: 21px;
  }
}

@media screen and (max-width: 600px) {
  h4 {
    font-size: 18px;
  }
}
@media screen and (min-width: 601px) {
  h3 {
    font-size: 22px;
  }
}

@media screen and (max-width: 600px) {
  h3 {
    font-size: 19px;
  }
}
@media screen and (min-width: 601px) {
  h2 {
    font-size: 23px;
  }
}

@media screen and (max-width: 600px) {
  h2 {
    font-size: 20px;
  }
}
</style>