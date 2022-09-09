<template>
  <view>
    <ScrollView></ScrollView>
    <Recommend></Recommend>
  </view>
</template>

<script>
  import Recommend from './components/recommend.vue'
  import ScrollView from './components/ScrollView.vue'
  export default {
    components: {
      Recommend,
      ScrollView
    },
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style lang="scss">

</style>
