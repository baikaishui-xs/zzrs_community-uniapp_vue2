<template>
  <view class="container">
    <ul class="recommend-list">
      <view class="item" v-for="(item) in articleAllCategory" :key="item.id">
        <view class="header-box">
          <view class="username-info-box">
            <image class="portrait" :src="item.user.userpic" />
            <view class="info-box">
              <text class="name">{{item.user.username}}</text>
              <text class="time"></text>
            </view>
          </view>
          <view class="follow">关注</view>
        </view>
        <view class="main-box">
          <text class="text">{{item.title}}</text>
          <image class="img" v-if="item.titlepic" :src="item.titlepic" mode="aspectFill" />
        </view>
        <view class="footer-box">
          <view class="fabulous-box">
            <i class="iconfont icon-dianzan2"></i>
            <text class="text" v-if="!item.ding_count">赞</text>
            <text class="number" v-else>{{item.ding_count}}</text>
          </view>
          <view class="step-box">
            <i class="iconfont icon-cai"></i>
            <text class="text" v-if="!item.cai_count">踩</text>
            <text class="number" v-else>{{item.cai_count}}</text>
          </view>
          <view class="news-box">
            <i class="iconfont icon-pinglun2"></i>
            <text class="text" v-if="!item.comment_count">评论</text>
            <text class="number" v-else>{{item.comment_count}}</text>
          </view>
          <view class="share-box">
            <i class="iconfont icon-fenxiang"></i>
            <text class="text">分享</text>
          </view>
        </view>
      </view>
    </ul>
  </view>
</template>

<script>
  import {
    getHotspotList
  } from '@/api/api_home.js'
  export default {
    data() {
      return {
        // 热点列表
        articleAllCategory: [],
      }
    },
    methods: {
      // 获取 热点列表
      async getHotspotList() {
        const res = await getHotspotList()
        this.articleAllCategory = res.list
      }
    },
    created() {
      this.getHotspotList()
    }
  }
</script>

<style lang="scss">
  .container {
    .recommend-list {
      .item {
        padding: 20rpx;
        border-bottom: 15rpx solid #F5F5F5;
        background: #fff;

        .header-box {
          display: flex;
          justify-content: space-between;
          align-items: center;

          .username-info-box {
            margin-bottom: 36rpx;
            display: flex;

            .portrait {
              width: 65rpx;
              height: 65rpx;
              margin-right: 20rpx;
              border-radius: 50%;
              background: #CCCCCC;
            }

            .info-box {
              .name {}

              .time {}
            }
          }

          .follow {
            width: 90rpx;
            height: 50rpx;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #fff;
            background: #FD6484;
            border-radius: 10rpx;
          }
        }

        .main-box {
          .text {
            font-size: 40rpx;
          }

          .img {
            width: 100%;
            height: 350rpx;
            margin-top: 20rpx;
          }
        }

        .footer-box {
          margin-top: 20rpx;
          display: flex;

          >view {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;

            >i {
              margin-right: 15rpx;
            }
          }

          .fabulous-box {
            i {}

            .text {}

            .number {}
          }

          .step-box {
            i {}

            .text {}

            .number {}
          }

          .news-box {
            .icon-pinglun2 {
              padding: 9rpx;
            }

            .text {}

            .number {}
          }

          .share-box {
            i {}

            .text {}
          }
        }
      }
    }
  }
</style>
