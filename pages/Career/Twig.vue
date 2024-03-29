<template>
  <div class="container-detail">
    <div class="title">
      Twig
      <div class="sub-title">
        대체자산 투자 커뮤니티 플랫폼
      </div>
    </div>
    <div class="bar"></div>
    <div class="body">
      <h2>소개</h2>
      <p>트위그는 전통적인 투자자산이 아닌, 기존에는 개인이 접근하기 힘들었던 대체자산에 함께 투자하는 조각투자 플랫폼으로 시작하였다.</p>
      <p>런칭 당시에는 해외 비상장 주식을 대상으로 시작하였으며, 이후 슈퍼카, NFT까지 투자 대상을 확대하여, 소액으로도 다양한 대체 자산에 투자할 수 있는 기회를 넓혀가고자 하였다.</p>
      <p>2022년에 들어서는 조각투자 분야의 규제이슈로 인해 적극적인 딜 소싱이 어려워졌다. 그래서 단순히 딜을 진행하는 플랫폼을 넘어 앞으로는 더 확장될 대체투자 영역의 주도권을 확보하고자 커뮤니티로서의 확장을 도모하였고, 멤버십을 위한 NFT를 발행하여 투자에 관심이 있는 사용자들이 트위그에서 지속적으로 활동하고 새로운 유저들을 끌어들일만한 플라이휠을 만들어내고자 하였다.</p>  
      <h2>
        Frontend Dev
      </h2>
      <p>
        초기에는 기획자나 디자이너가 없어 해당업무를 병행하면서 개발을 진행했다. 인력이 충분치 않다보니 스펙도 최대한 간결하게 구성하여 Next.js + MobX + Vercel 조합으로 초기 모델을 런칭하였고, 이후 기획, 디자인 포지션 멤버가 충원되면서 여유가 조금 생긴 후엔 Typescript를 적용하여 개발 안전성을 높였다.
      </p>
      <h3>
        Server/Client 요청에 따른 데이터 fetching전략 최적화
      </h3>
      <p>공개된 모든 페이지에 대해 기본적으로 SSR을 적용하였으나, SSR Only로 동작하게 하였을 때에 페이지 전환 시마다 약간의 딜레이가 생기고 서버(클라이언트 배포 서버)에 불필요한 트래픽을 발생시키는 문제가 있어서 클라이언트 요청 시에는 SSR이 동작하지 않도록 하고 store기준으로만 돌아가도록 설계하여 사용자의 액션에 대해 조금 더 즉각적인 반응을 줄 수 있도록 하였다.</p>
      <p>또한 페이지의 성격에 따라 데이터 fetching 전략을 다양하게 하여, 데이터를 항상 최신화하는게 중요한 페이지와 기존에 읽던 맥락을 유지하는게 중요한 페이지에 대한 UX를 충족시키고자 하였다.</p>
      <h3>
        전자서명 내재화
      </h3>
      <p>                  
        트위그는 딜마다 민법상 조합을 설립하여 조각투자를 진행하였는데, 초기에는 계약 진행을 위해 DocuSign같은 외부 전자서명 서비스를 사용했다. DocuSign자체는 좋은 서비스이지만, 참여 인원이 많아지고, 진행하는 딜의 갯수가 많아지면서 이것을 수동으로 관리하는 데에 드는 행정공수가 점점 늘어났다. 이런 행정공수를 줄이고 속도를 높이고자 전자서명 내재화 프로젝트를 제안하고 리드하였다. 서비스 내에서 간편하게 서명을 진행하고 서명된 문서를 조회할 수 있도록 자동화하여, 계약서 관련한 공수를 크게 줄일 수 있었다.
      </p>
      <h3>
        NFT 프로젝트 및 에어드롭 이벤트
      </h3>
      <p>
        Twig서비스 자체는 최대한 기능적으로 깔끔하게 작동하는 것에 주안점을 두고 개발했다면, NFT프로젝트를 진행하고 에어드롭 이벤트 페이지를 만들면서는 조금 더 비주얼적으로 재미있는 구성을 가져가려 노력했다. css의 3d기능을 활용한 입체적이지만 부드러운 애니메이션으로 페이지의 전반적인 분위기를 지루하지 않게 하는 점 등 난이도가 높진 않지만 재미있는 작업이었다.
      </p>
      <h3>Twig CMS</h3>
      <p>
        Twig 서비스 운영에 필요한 딜, 자산정보, 포스트, 댓글 등의 컨텐츠 관리와 회원, 주문정보 등 사용자정보 관리를 위한 관리자 사이트 프론트를 개발하였다. 객체 스키마에 따라 자동으로 테이블을 만들어주는 기초적인 DataTable 컴포넌트를 만들고 추후 옵셔널하게 필요한 기능들을 붙여 고도화하였다.
      </p>
      <p>
        크게 어렵거나 흥미로운 작업은 없었으나, 깔끔한 구조 덕에 추후 인턴분과 신입분이 들어왔을 때 교육 및 적응 용도로 사용하기 적합했다.
      </p>
      <br/>
      <ul>
        <li>Twig 사용자 웹 클라이언트 개발</li>
        <li>Twig CMS 클라이언트 개발</li>
        <li>Twig Money Club NFT 제작 </li>
        <li>Twig UX/UI 기획/디자인 기여 30%</li>
      </ul>

      <p class="stack">
        Next.js, React.js, MobX, react-query, Recoil, TypeScript, Firebase, Node.js, Vercel, Github, Figma, Photoshop
      </p>
      
      <br/>
      <p>
        <a href="https://twig.money/" target="_blank">Twig Web</a>
      </p>
      <p>
        <a href="https://twig.money/event/register-wallet" target="_blank">Twig Money Club Airdrop Event Page</a>
      </p>
      <p>
        <a href="https://opensea.io/collection/twig-money-club" target="_blank">Twig Money Club NFT Project</a>
      </p>
      
    </div>
  </div>
</template>

<script>
export default {
};

</script>

<style lang='scss' scoped>

</style>