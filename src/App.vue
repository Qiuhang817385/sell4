<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <div class="content">
      <router-view :seller="seller"></router-view>
    </div>
  </div>
</template>
<!--这是app.vue的script内容-->
<script type="text/ecmascript-6">
import headers from './components/header/header.vue';
import axios from 'axios';
import './common/stylus/index.styl';
const ERR_OK = 0;
export default {
  name: 'index',
  data: function () {
    return {
      seller: {}
    };
  },
  created () {
    this.setNewsApi();
  },
  methods: {
    setNewsApi: function () {
      // api.JH_news("/posts", "type=top&key=123456").then(res => {
      axios.get('/seller')
        .then((res) => {
          console.log('res', res);
          if (res.data.errno === ERR_OK) {
            this.seller = res.data.data.seller;
          }
        })
        .catch((e) => {
          console.log(e);
        });
    }
  },
  components: {
    'v-header': headers
  }
};
</script>
<style  lang="scss">
// @import "./common/stylus/mixin.styl"
// @import "./common/stylus/base.styl"
@import "./common/css/mixin.scss";
#app {
  .tab {
    display: flex;
    flex-wrap: nowrap;
    width: 100%;
    height: 40px;
    line-height: 40px;
    // border-bottom: 1px solid rgba(7, 17, 27, 0.1);
    @include border-1px(rgba(7, 17, 27, 0.1));
    .tab-item {
      flex: 1;
      text-align: center;
      // background-color: red;
      & > a {
        display: block;
        font-size: 14px;
        color: rgba(77, 85, 93, 1);
        // &:active不起作用
        &.active {
          color: red;
        }
      }
    }
  }
}
</style>
