<template>
<div class="container">
  <div class="card">
      <div class="card-header">
        <h3 class="card-title">{{exp.poste}}</h3>
      </div>
      <div class="card-body">
        <h5 class="card-title">
          <a :href="exp.link" class="card-link company_website" target="_blank">{{exp.company}}</a>
        </h5>
        <h5 class="card-title">{{exp.location}}</h5>
        <h6 class="card-title">{{from}} - {{to}} | {{period}}</h6>
        <p class="card-text">{{exp.description}}</p>
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
<style scoped>
.company_website {
  font-weight: bold;
  color: #42b983;
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 100%;
  margin: 1rem auto;
  text-align: left;
  justify-content: flex-start;
  font-family: arial;
}
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