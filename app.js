const app = Vue.createApp({
  data() {
    return {
      courseGoalA: "Master Vue.js!",
      courseGoalB: "Learn Vue.js!",
      vueLink: "https://www.vuemastery.com/pdf/Vue-Essentials-Cheat-Sheet.pdf",
      binding: "Binding",
      directives: "Directives",
      conditionals: "Render Conditional Content & List",
      vuex: "Vuex",
      other: "...",
      title: "<h1>Vue Course Goals</h1>",
    };
  },

  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    },
  },
});

app.mount("#user-goal");
