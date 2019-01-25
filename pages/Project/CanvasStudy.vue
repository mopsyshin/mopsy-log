<template>
  <div class="container-detail">
    <div class="title">
      Canvas Study
      <div class="sub-title">
      HTML5 Canvas Study
      </div>
    </div>
    <div class="bar"></div>
    <div class="container-canvas">
      <canvas id="canvas1" height="600" :width="canvasWidth" ref="canvas" @click="addCircle">This browser doesn't support canvas</canvas>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CanvasStudy',
  props: {

  },
  data () {
    return {
      canvasWidth: 0,
      canvas: null,
      ctx: null,
      density: 20,
      particles: [],
      Particle: function(scale, color, vx, vy, gv, canvas, ctx) {
        this.scale = scale;
        this.color = color;
        this.vx = vx;
        this.vy = vy;
        this.gv = gv;
        this.position = {
            x: 0,
            y: 0
        };
        this.draw = () => {
          ctx.beginPath();
          ctx.arc(this.position.x, this.position.y, this.scale, 0, 2*Math.PI, false);
          ctx.fillStyle = this.color;
          ctx.fill();
        };
        this.update = () => {
          this.vy += this.gv;
          this.position.x += this.vx;
          this.position.y += this.vy;
          if (this.position.y > canvas.height - this.scale) {
              this.vy *= -0.6;
              this.vx *= 0.85;
              this.position.y = canvas.height - this.scale;
          }
          this.draw();
        };
      },
    };
  },
  mounted() {
    this.init();
  },
  methods: {

    init() {
      if (window.innerWidth > 768) {
        this.canvasWidth = 712;
      } else {
        this.canvasWidth = window.innerWidth - 48;
      }
      this.$nextTick(() => {
        window.requestAnimFrame = (function(){
          return window.requestAnimationFrame   ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          window.oRequestAnimationFrame      ||
          window.msRequestAnimationFrame     ||
          function(callback){
            window.setTimeout(callback, 1000 / 60);
          };
        })();

        this.canvas = this.$refs.canvas;
        this.ctx = this.canvas.getContext('2d');

        for (let i = 0; i < this.density; i++) {
          this.makeCircle(this.canvas.width / 2, 200);
        }
      this.loop();
      });
    },
    delay(i) {
      return new Promise((resolve, reject) => {
        this.particles[i].update();
      });
    },
    makeCircle(posX, posY) {
      const color = `rgb(${this.makeRandom(150, 255)},${this.makeRandom(150, 255)},${this.makeRandom(150, 255)})`;
      const scale = ~~(Math.random()*15)+3;
      const x = Math.random() * 10 - 5;
      const y = Math.random() * 9 + 4;
      const g = Math.random() * 0.2 + 0.3;
      let newParticle = new this.Particle(scale, color, x, -y, g, this.canvas, this.ctx);
      newParticle.position.x = posX;
      newParticle.position.y = posY;
      this.particles.push(newParticle);
    },

    addCircle(event) {
      this.makeCircle(event.layerX, event.layerY);
    },

    async loop() {
      requestAnimFrame(this.loop);
      this.ctx.clearRect(0,0, this.ctx.canvas.width, this.ctx.canvas.height);
      for (var i in this.particles) {
        this.delay(i);
      }
    },

    makeRandom(min, max){
      const RandVal = Math.random() * (max - min) + min;
      return Math.floor(RandVal);
    },
  },
  components: {

  },
};

</script>

<style lang='scss' scoped>
.container-canvas {
  
}
</style>