<template>
  <div>
    <el-input
      placeholder="Type something"
      prefix-icon="el-icon-search"
      v-model="search"
      @input="handleSearch"
    >
    </el-input>
  </div>
</template>

<script>

export default {
  name: 'Search',
  computed: {
    search: {
      get () {
        return this.$store.state.search;
      },
      set (val) {
        this.$store.commit('search', val);
      }
    }
  },
  methods: {
    handleSearch: function (input) {
      this.$store.dispatch('filterList')
    }
  }
};
</script>

<style scoped lang="scss">

</style>
