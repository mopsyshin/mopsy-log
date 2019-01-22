<template>
  <div class="container-detail">
    <div class="title">
      Simple Slide
      <div class="sub-title">
        프레젠테이션을 위한 심플한 슬라이드쇼
      </div>
    </div>
    <div class="bar"></div>
    <div class="body">
      <img src="~/assets/images/slidedetail.png" alt="">
      <p>
        위워크 랩의 스타트업 대표님들을 대상으로 하는 '디자이너와 일하는 법' 워크샵에서 사용한 슬라이드다.
        심플한 슬라이드쇼로 프레젠테이션을 진행하기 위해 직접 만들어보았다.
      </p>
      <p>
        반응형 + 모바일 터치 이벤트를 적용하여, 워크샵 중에 참가자들도 슬라이드를 편하게 볼 수 있도록 웹으로 배포하여 사용하였다.
        <br/><br/>
      </p>
      <a href="https://mopsy-slide.firebaseapp.com" target="_blank">Slideshow Sample</a>
    </div>
  </div>
</template>


<script>
export default {
  name: '',
  props: {

  },
  data () {
    return {

    };
  },
  methods: {
  
  },
  components: {

  },
};

</script>

<style lang='scss' scoped>
img {
  width: 100%;
  border-radius: 16px;
}
</style>