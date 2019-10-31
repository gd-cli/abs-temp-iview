<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      options: [
        { value: 'default', label: '高登色' },
        { value: 'theme', label: '饿了么色' },
      ],
      currentTheme: 'default',
    };
  },
  components: {},
  methods: {
    changeTheme() {
      document.body.className = this.currentTheme;
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
