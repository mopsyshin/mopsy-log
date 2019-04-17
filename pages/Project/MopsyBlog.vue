<template>
  <div class="container-detail">
    <div class="title">
      Mopsy Blog
      <div class="sub-title">
      Personal Blog by Vue & Firebase
      </div>
    </div>
    <div class="bar"></div>
    <div class="body">
      <img src="~/assets/images/blog-screen.png" alt="">
      <h2>기술 스펙 및 사용 라이브러리</h2>
      <ul>
        <li>
          Vue.js
        </li>
        <li>
          Vuex
        </li>
        <li>
          Vue-router
        </li>
        <li>
          Firebase
        </li>
        <li>
          Google auth
        </li>
        <li>
          moment.js
        </li>
        <li>
          vue-masonry
        </li>
      </ul>
      <p>
        기본적인 포스트의 CRUD 및 권한설정을 study하면서 만들어본 첫 Vue.js 프로젝트
        <br/><br/>
      </p>
      <a href="https://mopsy-blog.firebaseapp.com" target="_blank">Blog Link</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MopsyBlog',
  props: {

  },
  data () {
    return {
    
    };
  },
  mounted() {
  },
};

</script>

<style lang='scss' scoped>
.container-canvas {

}
</style>
