<template>
  <div class="container-detail">
    <div class="title">
      Winepoint
      <div class="sub-title">
        와인을 고르는 손안의 즐거움
      </div>
    </div>
    <div class="bar"></div>
    <div class="body">
      <p>
        와인포인트는 와인 예약 및 픽업 서비스로 앱에서 와인을 예약하면, 가까운 와인포인트 스토어나 이마트24에서 예약한 와인을 픽업할 수 있는 서비스다.
      </p>
      <p>
        현재 안드로이드 버전만 출시된 상태이며, 2019년 상반기에 iOS출시가 예정되어 있다.
      </p>
      <h3>
        UX/UI Design
      </h3>
      <p>
        출시되어 있는 안드로이드 버전을 기반으로 사용자 사용흐름을 분석하여 탐색과 검색 시나리오를 개선하고, 서비스 곳곳에서 사용자에게 안내가 미흡했던 부분들을 사용자가 직관적으로 확인할 수 있도록 설계했다. 이마트24와 협업을 하다보니 서비스 규모에 비해 복잡한 정보구조를 표현해야 하는 경우가 발생하는데, 사용자에게 오해를 불러일으키지 않으면서 브랜딩과 사용성을 모두 확보할 수 있도록 하는데에 집중하여 작업을 진행해 나가고 있다.
      </p>
      <h3>
        Frontend Dev
      </h3>
      <p>
        vue.js를 사용해서 만든 첫 상용 프로덕트. 처음부터 함께 만든 게 아니라 중간에 합류한 것이다보니, 초기에는 많은 혼란스러움이 있었다. 어플리케이션의 전체적인 프로젝트 스트럭쳐부터 개인작업과는 달랐고, 컴포넌트를 구성하는 단위나 사용 방식등도 혼자 여태까지 작업한 것과는 전혀 다른 새로운 방식들이 많아 코드를 분석하며 많이 배울 수 있었다. 물론 아직까지도 종종 헤메지만, 작업을 할수록 개발을 배우기 잘했다는 생각이 든다.<br/><br/>
      </p>
      <p>
        <a href="https://www.winepoint.co.kr/" target="_blank">와인포인트 Landing Page</a>
      </p>
      <p>
        <a href="https://play.google.com/store/apps/details?id=wpco.winepoint.android&hl=ko" target="_blank">와인포인트 Android</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
  
  },
  components: {

  },
};

</script>

<style lang='scss' scoped>
@import '~/assets/css/detail.scss';

</style>