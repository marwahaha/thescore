<template>
  <div id="app">
    <Main/>
  </div>
</template>

<script>
import Main from './components/Main.vue';

export default {
  name: 'app',
  components: {
    Main,
  },
};
</script>

<style lang="scss">
html, body, #app {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  text-align: center;
  margin: 0;
}

</style>
