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
    };
  },
  mounted() {
    // canvas width setting 
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

      const canvas = this.$refs.canvas;
      const ctx = canvas.getContext('2d');

      // particle definition
      let Particle = function(scale, color, vx, vy, gv) {
          this.scale = scale;
          this.color = color;
          this.vx = vx;
          this.vy = vy;
          this.gv = gv;
          this.position = {
              x: 0,
              y: 0
          };
      };

      // particle draw function
      Particle.prototype.draw = function() {
          ctx.beginPath();
          ctx.arc(this.position.x, this.position.y, this.scale, 0, 2*Math.PI, false);
          ctx.fillStyle = this.color;
          ctx.fill();
      };

      // particle update function
      Particle.prototype.update = function() {
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

      // declare number of particles
      const density = 50; 
      let particles = []; 

      // generate particle, and make them as array
      for (let i = 0; i < density; i++) {
          // generate random particle properties
          const r = ~~(Math.random()*255);
          const g = toPositive(r - (~~(Math.random()*150)));
          const b = toPositive(g - (~~(Math.random()*30)));
          const color = `rgb(${r},${g},${b})`;
          const scale = ~~(Math.random()*15)+3;
          const x = Math.random() * 10 - 5;
          const y = Math.random() * 9 + 4;
          const gravity = Math.random() * 0.2 + 0.3;
          
          particles[i] = new Particle(scale, color, x, -y, gravity);
          particles[i].position.x = canvas.width / 2;
          particles[i].position.y = 200;
      }

      function toPositive(v) {
        if (v < 0) {
          return -v;
        }
        return v;
      }

      loop();
      // loop function
      function loop() {
          requestAnimFrame(loop);
          // remove last frame
          ctx.clearRect(0,0, ctx.canvas.width, ctx.canvas.height);
          for (var i in particles) {
            // update particle state
              particles[i].update();
          }
      }
    });
    
  },
  methods: {
  },
  components: {

  },
};

</script>

<style lang='scss' scoped>
.container-canvas {
  
}
</style>