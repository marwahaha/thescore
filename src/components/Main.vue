<template>
  <div>
    <el-button type="danger" @click='download'>Download</el-button>
    <Search></Search>
    <Table></Table>
  </div>
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

</style>
