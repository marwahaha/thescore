<template>
  <el-container>
    <el-header class='header' height='70px'>
      <img src='../assets/thescore-logo.png' />
    </el-header>
    <el-main>
      <div class="search__wrapper">
        <Search></Search>
      </div>
      <el-button class="download" @click='download'>Download</el-button>
      <Table></Table>
    </el-main>
    <el-footer class='footer'>
      Created by: Elijah Joseph-Young
    </el-footer>
  </el-container>
</template>

<script>
import Table from '@/components/Table.vue';
import Search from '@/components/Search.vue';

export default {
  name: 'Main',
  components: {
    Table,
    Search
  },
  created () {
    this.$store.dispatch('fetchAll');
  },
  computed: {
    fileContent: function () {
      return "data:text/csv;charset=utf-8," + this.$store.state.data.map(row => Object.values(row).map(item => `"${item}"`).join(",")).join("\r\n")
    }
  },
  methods: {
    download: function () {
      const data = encodeURI(this.fileContent);
      const link = document.createElement("a");
      link.setAttribute("href", data);
      link.setAttribute("download", "download.csv");
      link.click();
    }
  }
};
</script>

<style scoped lang="scss">
.header {
  background-image: linear-gradient(#114d9c, #000000);
  // background-color: #1e1f20;
  padding: 1rem 0;
}
.search__wrapper {
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
