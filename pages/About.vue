<template>
<div>
  <div class="container-about">
    <page-title title="About"/>
    <div class="body">
      <h2 class="name">
        Mopsy
      </h2>
      <p>
        2014년부터 다양한 규모의 스타트업에서 디자이너로 활동하였으며, 2018년부터는 프론트엔드 개발을 병행하여 현재는 (주)페어스퀘어랩 에서 대체자산 투자 플랫폼 'Twig' 를 개발하고 있습니다.
      </p>
      <p>
        엔지니어링을 디자인의 연장선 상에서 바라보고, 웹 기술의 가능성을 높게 생각합니다. 네이티브 앱과 비슷한 수준의 경험을 웹으로 구현하는 것에 재미를 느낍니다.
      </p>
      <p>
        기술 자체에도 관심이 있지만 어떤 비즈니스를 내가 가진 기술로 어떻게 풀어낼 것인가에 관심이 많고, 항상 창업하기 위해 경험을 쌓는다는 생각으로 일합니다.
      </p>
      <p>
        어떤 상황이든 문제를 파악하고 해결하기 위해 단순한 절충이 아닌 최선의 방법을 찾으려 노력하며, 다양한 사람들 간의 신뢰 위에서 이루어지는 활발하고 장벽없는 커뮤니케이션이 그것을 가능하게 해줄 것이라는 믿음을 갖고 있습니다.
      </p>
      <div class="links">
        <p>
          mopsyshin@gmail.com
        </p>
        <a href="https://github.com/mopsyshin" target="blank">Github</a>
        <a href="https://www.facebook.com/mopsyshin" target="blank">Facebook</a>
        <a href="https://www.instagram.com/mopsyshin/" target="blank">Instagram</a>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import PageTitle from '~/components/PageTitle';

export default {
  components: {
    PageTitle,
  },
};

</script>

<style lang='scss' scoped>
.container-about {
  width: 100%;
  max-width: 768px;
  min-height: calc(100vh - 120px);
  margin: 0 auto 60px;
  font-size: 16px;
  .title {
    font-size: 36px;
    line-height: 1.4;
    letter-spacing: -1px;
    font-weight: 600;
    color: $b300;
    padding: 0 16px;
  }
  .body {
    word-break: keep-all;
    padding: 0 16px;
    font-size: 18px;
    margin-top: 24px;
    line-height: 1.8;
    .abilities {
      @include flex(flex-start, space-between);
      flex-wrap: wrap;
    }
    .links {
      margin: 24px 0;
      a {
        font-size: 14px;
        font-weight: 400;
        color: $nd40;
        margin-right: 12px;
        text-decoration: underline;
        &:visited {
          color: $nd40;
        }
      }
      p {
        font-size: 14px;
        margin: 0;
      }
    }
    p {
      margin: 0.6em 0 0.6rem;
      font-weight: 400;
      color: $b100;
      b {
        font-weight: 700;
        color: $b200;
      }
    }
    
    h1, h2, h3, h4 {
      margin: 1.2em 0 0.4em;
      color: $b300;
    }
    .name {
      margin-bottom: 0;
      span {
        font-size: 0.6em;
        font-weight: 400;
      }
    }
    img {
      display: block;
      margin: 16px auto;
      max-width: 100%;
      border-radius: 24px;
      max-height: 500px;
    }
  }
}
@media (max-width:768px) {
  .container-about {
    margin: 0 auto;
    padding: 0px;
    .title {
      font-size: 28px;
    }
    .body {
      font-size: 15px;
      padding: 0 24px;
    }
  }
}
</style>