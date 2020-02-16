<template>
  <div>
      <visitor-pie :pieData="pieData"></visitor-pie>
  </div>
</template>

<script>
import visitorPie from '@/components/visitor-pie'
import { getUserCity } from '@/api/user'
export default {
  data () {
    return {
      pieData: {}
    }
  },
  components: {
    visitorPie
  },
  mounted () {
    this.initData()
  },
  methods: {
    async initData () {
      try {
        const res = await getUserCity()
        if (res.data.status === 1) {
          console.log(res)
          this.pieData = res.data.user_city
        } else {
          throw new Error(res)
        }
      } catch (err) {
        console.log('获取用户分布信息失败', err)
      }
    }
  }
}
</script>

<style lang="less">
@import '../style/mixin';

</style>
