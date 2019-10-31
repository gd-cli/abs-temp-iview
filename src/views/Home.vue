<template>
  <div class="home">
    <gd-header></gd-header>
    <el-input v-model="input" placeholder="请输入内容"></el-input>
  </div>
</template>

<script>
import gdHeader from '_c/gd-header.vue';

export default {
  name: 'home',
  data() {
    return {
      input: '',
    };
  },
  components: {
    gdHeader,
  },
};
</script>
