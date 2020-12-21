<template>
    <div class="fillcontain">
        <div class="table_container">
            <el-table
                :data="tableData"
                highlight-current-row
                style="width: 100%">
                <el-table-column
                  type="index"
                  width="100">
                </el-table-column>
                <el-table-column
                  property="registe_time"
                  label="注册日期"
                  width="220">
                </el-table-column>
                <el-table-column
                  property="username"
                  label="用户姓名"
                  width="220">
                </el-table-column>
                <el-table-column
                  property="city"
                  label="注册地址">
                </el-table-column>
            </el-table>
            <div class="Pagination" style="text-align: left;margin-top: 10px;">
                 <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
       :page-sizes="sizes"
      :page-size="1"
      layout="total, sizes, prev, pager, next, jumper"
      :total="count">
    </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { getUserList, getUserCount } from '@/api/user'
export default {
  data () {
    return {
      tableData: [],//数据
      //     registe_time: '2016-05-02',
      //     username: '王小虎',
      //     city: '上海市普陀区金沙江路 1518 弄'
      //   }, {
      //     registe_time: '2016-05-04',
      //     username: '王小虎',
      //     city: '上海市普陀区金沙江路 1517 弄'z
      //   }, {
      //     registe_time: '2016-05-01',
      //     username: '王小虎',
      //     city: '上海市普陀区金沙江路 1519 弄'
      //   }, {
      //     registe_time: '2016-05-03',
      //     username: '王小虎',
      //     city: '上海市普陀区金沙江路 1516 弄'
      //   }],用户信息更改了2.0
      offset: 0,
      limit: 20,
      count: [],
      currentPage: 2,
      pageSize: 2,
      sizes: [2, 4, 6, 8],
      Number1:3,
      number:2.0

    }
  },
  //加载
  created () {
    this.initData()
  },
  methods: {
    //获取数据
    async initData () {
      try {
        const countData = await getUserCount()
        if (countData.data.status === 1) {
          console.log(countData)
          this.count = countData.data.count
        } else {
          throw new Error('获取数据失败')
        }
        this.getUsers()
      } catch (err) {
        console.log('获取数据失败', err)
      }
    },
    handleCurrentChange (val) {
      this.currentPage = val
      this.offset = (val - 1) * this.limit
      this.getUsers()
    },
       handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
     handleSizeChange5(val) {
      console.log(`每页 ${val} 条`)
    },
     
    async getUsers () {
      getUserList({
        offset: this.offset, limit: this.limit
      }).then(
        res => {
          console.log(res)
          if (res.status === 200) {
            this.tableData = res.data
          }
        }
      )
    //   console.log(Users)
    //   this.tableData = []
    //   Users.data.forEach(item => {
    //     const tableData = {}
    //     tableData.username = item.username
    //     tableData.registe_time = item.registe_time
    //     tableData.city = item.city
    //     this.tableData.push(tableData)
    //   })
    }
  }
}
</script>

<style lang="less">
@import '../style/mixin';
    .table_container{
        padding: 20px;
    }
</style>
