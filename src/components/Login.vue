<template>
  <div>
    <div class="">我是登陆界面</div>
    <div class="class">这是一个1class</div>
  </div>
</template>

<script type="text/ecmascript-6">
// import api from '../axios/api';
import axios from 'axios';
export default {
  created () {
    this.getGoodsApi();
  },
  methods: {
    getGoodsApi () {
      // api.JH_news('/get')
      axios.get('/seller')
        .then((res) => {
          console.log('res.data', res.data);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus"></style>
