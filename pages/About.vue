<template>
<div>
  <page-title title="About"/>
  <div class="container-about">
    <div class="body">
      <h2 class="name">
        신동주
        <span>Mopsy</span>
      </h2>
      <p>
        서비스 기획 - 디자인 - 개발 전 과정에 적극적으로 참여하는 것을 즐기고, 혼자서 MVP를 만들 수 있는 역량을 갖추는 것이 1차 목표. 2014년부터 다양한 규모의 스타트업에서 디자이너로 활동하였으며, 2018년부터는 프론트엔드 개발을 병행하여 현재는 와인포인트에서 UX/UI Designer 겸 Frontend Developer로 일하고 있다.
      </p>
      <p>
        20대까지는 상당한 근본/원리주의 성향을 가졌었으나, 시간이 지나고 경험이 쌓일수록 상황에 따른 적정 기술과 적정 능력의 중요성을 깨달아가는 중.
      </p>
      <p>
        어떤 상황이든 문제를 파악하고 해결하기 위한 최적이 아닌 최선의 방법을 찾으려 노력하며, 다양한 사람들 간의 활발하고 장벽없는 커뮤니케이션이 그것을 가능하게 해줄 것이라는 믿음을 갖고 있다.
      </p>
      <div class="links">
        <p>
          mopsyshin@gmail.com
        </p>
        <a href="https://github.com/mopsyshin" target="blank">Github</a>
        <a href="https://www.facebook.com/mopsyshin" target="blank">Facebook</a>
        <a href="https://www.instagram.com/mopsyshin/" target="blank">Instagram</a>
      </div>
      <div class="abilities">
        <div class="skill">
          <h3>Programming Skillset</h3>
          <rank-meter v-for="tool in programmingSkills"
                      :key="tool.key"
                      :tool="tool"/>
        </div>
        <div class="skill">
          <h3>Graphic Tools</h3>
          <rank-meter v-for="tool in graphicTools"
                      :key="tool.key"
                      :tool="tool"/>
        </div>
      </div>
      <br/>
    </div>
  </div>
  </div>
</template>

<script>
import PageTitle from '~/components/PageTitle';
import RankMeter from '~/components/rank-meter/RankMeter';
import SketchImg from '~/assets/images/sketch.png';
import IllustratorImg from '~/assets/images/illustrator.png';
import PhotoshopImg from '~/assets/images/photoshop.png';
import AfterImg from '~/assets/images/after.png';
import JsImg from '~/assets/images/js.png';
import VueImg from '~/assets/images/vue.png';
import NuxtImg from '~/assets/images/nuxt.png';
import NodeImg from '~/assets/images/node.png';
import TsImg from '~/assets/images/typescript.png';
import KotlinImg from '~/assets/images/kotlin.png';

export default {
  data() {
    return {
      graphicTools: [
        {
          name: 'Sketch',
          imgUrl: SketchImg,
          rank: 9,
          color: '#fdc002',
        },
        {
          name: 'Illustrator',
          imgUrl: IllustratorImg,
          rank: 8,
          color: '#ff7c00',
        },
        {
          name: 'Photoshop',
          imgUrl: PhotoshopImg,
          rank: 8,
          color: '#00c8ff',
        },
        {
          name: 'After Effect',
          imgUrl: AfterImg,
          rank: 5,
          color: '#d291ff',
        },
      ],
      programmingSkills: [
        {
          name: 'Js (ES5, ES6, ES7)',
          imgUrl: JsImg,
          rank: 6,
          color: '#f0db4f',
        },
        {
          name: 'Vue.js',
          imgUrl: VueImg,
          rank: 6,
          color: '#41b883',
        },
        {
          name: 'Nuxt.js',
          imgUrl: NuxtImg,
          rank: 4,
          color: '#3b8070',
        },
        {
          name: 'Node.js',
          imgUrl: NodeImg,
          rank: 2,
          color: '#83cd29',
        },
                {
          name: 'TypeScript',
          imgUrl: TsImg,
          rank: 2,
          color: '#2874c3',
        },
        // {
        //   name: 'Kotlin',
        //   imgUrl: KotlinImg,
        //   rank: 1,
        //   color: '#7e6fe3',
        // },
      ],
    };
  },
  components: {
    PageTitle,
    RankMeter
  },
};

</script>

<style lang='scss' scoped>
.container-about {
  width: 100%;
  max-width: 1280px;
  min-height: calc(100vh - 120px);
  margin: 0 auto 60px;
  font-size: 16px;
  .title {
    font-size: 36px;
    line-height: 1.4;
    letter-spacing: -1px;
    font-weight: 600;
    color: $b300;
    padding: 0 24px;
  }
  .body {
    word-break: keep-all;
    padding: 0 24px;
    font-size: 18px;
    margin-top: 24px;
    line-height: 1.8;
    width: 100%;
    max-width: 768px;
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
@media (max-width:420px) {
  .container-detail {
    margin: 0 auto;
    padding: 32px 24px;
    .title {
      font-size: 28px;
    }
    .body {
      font-size: 15px;
    }
  }
}
</style>