<template>
  <scroll-view class="scroll-view" scroll-x>
    <view class="item" :class="{ checked: currentIndex === index }" v-for="(item, index) in listCategory" :key="item.id"
      @click="changeTab(index)">
      {{item.classname}}
    </view>
  </scroll-view>
</template>

<script>
  import {
    getListCategory
  } from '@/api/api_home.js'

  export default {
    data() {
      return {
        // 列表类别
        listCategory: [],
        // 当前下标
        currentIndex: 0
      }
    },
    methods: {
      // 获取列表类别
      async getListCategory() {
        const res = await getListCategory()
        this.listCategory = res.list
      },
      // 切换选项
      changeTab( index ) {
        this.currentIndex = index
      }
    },
    created() {
      this.getListCategory()
    }
  }
</script>

<style lang="scss">
  .scroll-view {
    width: 100%;
    background: #fff;
    white-space: nowrap;

    .item {
      width: 150rpx;
      height: 80rpx;
      display: inline-block;
      font-size: 35rpx;
      font-weight: 900;
      text-align: center;
      line-height: 80rpx;
    }

    .checked {
      color: #e82626;
      font-size: 40rpx;
    }
  }
</style>
