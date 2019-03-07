<template>
  <div>
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
  }
};
</script>

<style scoped lang="scss">

</style>
