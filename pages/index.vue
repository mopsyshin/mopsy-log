<template>
  <div>
    <section class="home-container">
      <div class="profile-summery">
        <div class="wrapper-logo" ref="logoWrapper">
          <img src="~assets/images/logo_m.svg">
        </div>
        <div class="wrapper-profile-box">
          <div class="title">
            Mopsy
          </div>
          <div class="desc">
            Front-end Developer<br/>
            UI / UX Designer<br/>
            Service Builder
          </div>
        </div>
      </div>
      <div class="wrapper-main-links">
        <btn-main-link name="Career"/>
        <btn-main-link name="Project"/>
        <btn-main-link name="Blog"/>
      </div>
    </section>
    <div class="container-about">
      <page-title title="About"/>
      <div class="body">
        <h2 class="name">
          Mopsy
        </h2>
        <p>
          2014년부터 다양한 규모의 스타트업에서 디자이너로 활동하였으며, 2018년부터는 프론트엔드 개발을 병행하여 서비스 빌더로 활동하고 있습니다.
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
import BtnMainLink from '~/components/BtnMainLink';

export default {
  components: {
    BtnMainLink,
  },
}
</script>

<style lang="scss" scoped>
.home-container {
  position: relative;
  width: 100%;
  max-width: 1440px;
  margin: 64px auto 128px;
  @include flex(center, center);
  .profile-summery {
    width: 100%;
    max-width: 720px;
    padding: 0 24px;
    margin-top: 24px;
    @include flex(center, center);
    align-items: flex-start;
    .wrapper-logo {
      width: calc(50% - 8px);
      height: 50vw;
      min-height: 180px;
      max-height: 300px;
      border-radius: 8px;
      border: 1px solid #f0f0f0;
      @include flex(center, center);
      transition: all 0.3s;
      &:hover {
        transform: scale(1.05);
      }
    }
    .wrapper-profile-box {
      position: relative;
      width: calc(50% - 8px);
      height: 50vw;
      min-height: 180px;
      max-height: 300px;
      margin-left: 16px;
      margin-top: 150px;
      padding: 8px 16px;
      border-radius: 8px;
      background-color: $mopsy-blue;
      color: $nl100;
      transition: all 0.3s;
      &:hover {
        transform: scale(1.05);
      }
      .title {
        font-size: 24px;
        font-weight: 700;
      }
      .desc {
        margin-top: 6px;
        font-size: 14px;
        font-weight: 300;
      }
    }
  }
  .wrapper-main-links {
    padding: 32px 24px;
    width: 100%;
    @include flex(center, center);
    flex-direction: column;
  }
}
@media (max-width: 1280px ) {
  .home-container {
    top: 0;
    margin: 0 auto;
    flex-direction: column;
    @include flex(center, flex-start);
    .profile-summery {
      margin-top: 16px;
      flex-direction: column;
      .wrapper-logo {
        display: none;
      }
      .wrapper-profile-box {
        width: 100%;
        margin: 0;
      }
    }
  }
} .test-link {
    transition: all 0.5s;
    color: rgba(0,0,0,0.6);
    position: absolute;
    top: 30%;
    cursor: pointer;
    padding: 0px 16px 2px;
    border-radius: 24px;
  }
  .test-link:hover {
    background-color: rgba(0,0,0,0.04);
    color: rgba(0,0,0,0.8);
    text-shadow: 4px 4px 4px rgba(0,0,0,0.1);
    transform: scale(1.12);
  }
  .container-about {
  width: 100%;
  max-width: 768px;
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

