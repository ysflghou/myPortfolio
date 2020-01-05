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
import experiencesStore from "@/experiences-store.js";
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
    months() {
      return [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ];
    },
    exp() {
      return experiencesStore.experiences.find(
        experience => experience.id == this.id
      );
    },
    from() {
      return this.getShowedDate(this.exp.fromDate);
    },
    to() {
      return this.getShowedDate(this.exp.toDate);
    },
    period() {
      var diff =
        new Date(this.exp.toDate).getTime() -
        new Date(this.exp.fromDate).getTime();
      var diffInMonths = diff / (1000 * 3600 * 24 * 30.5); // not exact
      if (diffInMonths <= 0) return "1 mon";
      else if (diffInMonths < 12) return Math.ceil(diffInMonths) + " mons";
      else {
        var years = Math.floor(diffInMonths / 12);
        var yearFormat = years + (years == 1 ? " yr" : " yrs");
        var mons = Math.ceil(diffInMonths % 12);
        var monsFormat = mons == 0 ? "" : mons + (mons == 1 ? " mon" : " mons");
        return yearFormat + " " + monsFormat;
      }
    }
  },
  methods: {
    getShowedDate(dateContent: String): String {
      var date = new Date(dateContent);
      var year = date.getFullYear();
      var month = date.getMonth();
      var monthString = this.months[month];
      return monthString + " " + year;
    }
  }
});
</script>