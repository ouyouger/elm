<template>
  <div class="list">
    <el-table
    :data="postlist"
    border
    style="width: 100%;margin-top:20px">
    <el-table-column type="index" width="50"></el-table-column>
    <el-table-column
    prop="title" label="标题"
      width="120">
    </el-table-column>
    <el-table-column
      prop="user.head_img"
      label="时间"
      width="120">
    </el-table-column>
    <el-table-column
      label="类型"
      width="120">
<template slot-scope="scope">{{scope.row.type | typeTransfer}}</template>
    </el-table-column>
    <el-table-column
      prop="user.nickname"
      label="作者"
      width="300">
    </el-table-column>
    <el-table-column
      label="操作"
      >
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        <el-button type="text" size="small">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
     <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pageIndex"
      :page-sizes="sizes"
      :page-size="2"
      layout="total, sizes, prev, pager, next, jumper"
      :total="10">
    </el-pagination>
  </div>
</template>

<script>
import { getPostList, hotcity } from '@/api/user'
export default {
  data () {
    return {
      postlist: [],
      sizes: [2, 4, 6, 8],
      pageSize: 2,
      pageIndex: 1,
      type: 'hot'
      // total: []
    }
  },
  methods: {
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
      this.pageSize = val
      this.init()
    },
    handleCurrentChange (val) {
      this.pageIndex = val
      this.init()
    },
    init () {
      getPostList({
        pageIndex: this.pageIndex,
        pageSize: this.pageSize
      }
      ).then(res => {
        console.log(res)
        if (res.status === 200) {
          this.postlist = res.data.data
          // this.total = res.data.total
        }
      })
      hotcity({ type: this.type }).then(res => {
        console.log(res)
      })
    }
  },
  filters: {
    typeTransfer (type) {
      if (type === 1) {
        return '文章'
      } else {
        return '视频'
      }
    }
  },
  mounted () {
    this.init()
  }
}
</script>

<style>

</style>
