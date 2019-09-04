<template>
  <div class="container-detail">
    <div class="title">
      Ui Gallery
      <div class="sub-title">
      UX Engineering Portfolio
      </div>
    </div>
    <div class="bar"></div>
    <div class="body">
      <img src="~/assets/images/gallery-ss.png" alt="ui-gallery">
      <p>
        막상 UX Engineer 포지션으로 포트폴리오를 구성하려 하다보니, 회사 백오피스 업무가 주인지라 공개적으로 보여줄만 한 게 없어서 UI Gallery 프로젝트를 시작했다.<br/>
        단순히 UI구성 및 인터렉션 애니메이션 수준에 머물지 않고 데이터 바인딩 및 비동기 처리 등, 실무에 직접 사용할 수 있을 수준의 컴포넌트들로 채워나갈 예정이다.<br/>
      </p>
      <p>
        현재는 4개정도만 완성된 상태이고, 최소 일주일에 한개는 완성해 퀄리티 높은 UI Component Gallery를 만들어볼 생각이다.<br/>
      </p>
      <p>
        가로 1280px 이상 데스크탑에서는 액션로그도 함께 볼 수 있다.
      </p>
      <h3>Dependencies</h3>
        <ul>
          <li>
            React v16 (hooks, context api)
          </li>
          <li>
            React router dom
          </li>
          <li>
            mobx
          </li>
        </ul>

        <h3>Deployment</h3>
        <ul>
          <li>firebase hosting</li>
        </ul>
        

      <a href="https://mopsy-ui-gallery.web.app" target="_blank">Mopsy UI Gallery</a>
    </div>
  </div>
</template>

<script>

export default {
  name: 'UiGallery',
  data() {
    return {
      isActive: true,
    };
  },
  methods: {
    reRender() {
      this.isActive = false;
      setTimeout(() => {
        this.isActive = true;
      }, 1); 
    },
  },
};

</script>

<style lang='scss' scoped>
.btn-randomize {
  display: block;
  width: 100%;
  max-width: 200px;
  margin: 24px auto;
  padding: 8px 24px;
  font-size: 24px;
  background-color: transparent;
  border: none;
  color: $nd40;
  border-radius: 32px;
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    background-color: $nd04;
  }
}
</style>