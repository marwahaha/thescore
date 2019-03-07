<template>
  <div>
    <el-table
      :data="allData"
      height="1000"
      style="width: 100%">
      <el-table-column
        prop="Player"
        label="Player"
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
        sortable
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
        sortable
        >
      </el-table-column>
      <el-table-column
        prop="Lng"
        label="LNG"
        sortable
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
    computed: {
      allData: {
        get () {
          return this.$store.state.data
        }
      }
    }
  }
</script>

<style scoped lang="scss">

</style>
