<template>
  <div>
    <el-table
      v-show='allData.length'
      :data="allData"
      height="500"
      style="width: 100%"
      @sort-change="handleSort">
      <el-table-column
        prop="Player"
        label="Player"
        width='150'
        >
      </el-table-column>
      <el-table-column
        prop="Team"
        label="Team"
        >
      </el-table-column>
      <el-table-column
        prop="Pos"
        label="POS"
        >
      </el-table-column>
      <el-table-column
        prop="Att/G"
        label="ATT/G"
        >
      </el-table-column>
      <el-table-column
        prop="Att"
        label="ATT"
        >
      </el-table-column>
      <el-table-column
        prop="Yds"
        label="YDS"
        sortable='custom'
        :sort-orders="sortOrder"
        >
      </el-table-column>
      <el-table-column
        prop="Avg"
        label="AVG"
        >
      </el-table-column>
      <el-table-column
        prop="Yds/G"
        label="YDS/G"
        >
      </el-table-column>
      <el-table-column
        prop="TD"
        label="TD"
        sortable='custom'
        :sort-orders="sortOrder"
        >
      </el-table-column>
      <el-table-column
        prop="Lng"
        label="LNG"
        sortable='custom'
        :sort-orders="sortOrder"
        >
      </el-table-column>
      <el-table-column
        prop="1st"
        label="1st"
        >
      </el-table-column>
      <el-table-column
        prop="1st%"
        label="1st%"
        >
      </el-table-column>
      <el-table-column
        prop="20+"
        label="20+"
        >
      </el-table-column>
      <el-table-column
        prop="40+"
        label="40+"
        >
      </el-table-column>
      <el-table-column
        prop="FUM"
        label="FUM"
        >
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'TableView',
  data() {
    return {
      sortOrder: ['descending', 'ascending', null],
    };
  },
  computed: {
    allData: {
      get() {
        return this.$store.state.data;
      },
    },
  },
  methods: {
    handleSort(sortOptions) {
      // This function is called whenever a sort on a table column is clicked.
      // First commit our order and sort by prop to state, then let the backend handle the rest
      this.$store.commit('filterOrder', sortOptions.order);
      this.$store.commit('filterProp', sortOptions.prop);
      this.$store.dispatch('fetch');
    },
  },
};
</script>
