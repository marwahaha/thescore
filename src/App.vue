<template>
  <div id="app">
    <el-container>
      <el-header class='header' height='70px'>
        <img src='./assets/thescore-logo.png' />
      </el-header>
      <el-main>
        <div class="search">
          <search-bar></search-bar>
        </div>
        <el-button class="download" @click='download'>Download</el-button>
        <table-view></table-view>
      </el-main>
      <el-footer class='footer'>
        Created by: Elijah Joseph-Young
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import TableView from '@/components/TableView.vue';
import SearchBar from '@/components/SearchBar.vue';

export default {
  name: 'app',
  components: {
    'table-view': TableView,
    'search-bar': SearchBar,
  },
  created() {
    // Before we load the component, fetch the data from the backend
    this.$store.dispatch('fetch');
  },
  computed: {
    fileContent() {
      // Keep a copy of whatever has been filtered and sorted from state to export to csv
      return `data:text/csv;charset=utf-8,Player,Team,POS,ATT/G,ATT,YDS,AVG,YDS/G,TD,LNG,1st,1st%,20+,40+,FUM\r\n${this.$store.state.data.map(row => Object.values(row).map(item => `"${item}"`).join(',')).join('\r\n')}`;
    },
  },
  methods: {
    download() {
      // Encode the csv content, create a temp link on the page to download the csv.
      const data = encodeURI(this.fileContent);
      const link = document.createElement('a');
      link.setAttribute('href', data);
      link.setAttribute('download', 'download.csv');
      link.click();
    },
  },
};
</script>

<style lang="scss">

html, body, #app {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  text-align: center;
  margin: 0;
}
.header {
  background-image: linear-gradient(#114d9c, #000000);
  padding: 1rem 0;
}
.search {
  margin-bottom: 1rem;
}
.download {
  background-color: #0078fd;
  color: #ffffff;
  &:hover {
    background-color: #3290fc;

  }
}
.footer {
  color: #000000;
  font-size: 0.75rem;
  padding: 1rem 0;
}
</style>
