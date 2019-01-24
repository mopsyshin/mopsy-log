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
      <canvas id="canvas1" height="600" :width="canvasWidth" ref="canvas">This browser doesn't support canvas</canvas>
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
      density: 50,
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
        this.draw = function() {
          ctx.beginPath();
          ctx.arc(this.position.x, this.position.y, this.scale, 0, 2*Math.PI, false);
          ctx.fillStyle = this.color;
          ctx.fill();
        };
        this.update = function() {
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
    if (window.innerWidth > 768) {
      this.canvasWidth = 712;
    } else {
      this.canvasWidth = window.innerWidth - 48;
    }

    this.$nextTick(() => {
      window.requestAnimFrame = (function(){
        return  window.requestAnimationFrame   ||
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
          const r = ~~(Math.random()*255);
          const g = this.toPositive(r - (~~(Math.random()*150)));
          const b = this.toPositive(g - (~~(Math.random()*30)));
          const color = `rgb(${r},${g},${b})`;
          const scale = ~~(Math.random()*15)+3;
          const x = Math.random() * 10 - 5;
          const y = Math.random() * 9 + 4;
          const gravity = Math.random() * 0.2 + 0.3;
          
          this.particles[i] = new this.Particle(scale, color, x, -y, gravity, this.canvas, this.ctx);
          this.particles[i].position.x = this.canvas.width / 2;
          this.particles[i].position.y = 200;
      }
      this.loop();
    });
  },
  methods: {
    toPositive(v) {
      if (v < 0) {
        return -v;
      }
      return v;
    },
    loop() {
      requestAnimFrame(this.loop);
      this.ctx.clearRect(0,0, this.ctx.canvas.width, this.ctx.canvas.height);
      for (var i in this.particles) {
        this.particles[i].update();
      }
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