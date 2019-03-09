<template>
  <el-input
    class='input'
    placeholder="Search by Player"
    prefix-icon="el-icon-search"
    :clearable='true'
    v-model="search"
    @input="handleSearch"
  >
  </el-input>
</template>

<script>

export default {
  name: 'SearchBar',
  computed: {
    search: {
      get() {
        return this.$store.state.search;
      },
      set(val) {
        this.$store.commit('search', val);
      },
    },
  },
  methods: {
    handleSearch() {
      // On input changes, call the backend (this could also be on a change event for performance)
      this.$store.dispatch('fetch');
    },
  },
};
</script>

<style scoped lang="scss">
  .input {
    width: 300px;
  }
</style>
