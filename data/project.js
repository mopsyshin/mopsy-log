import colorImg from '~/assets/images/color.png';
import slideImg from '~/assets/images/slide.png';
import canvasImg from '~/assets/images/canvas.png';
import blogImg from '~/assets/images/blog.png';

const projects = [
  {
    "title": "Simple Slide",
    "route": "SimpleSlide",
    "imgUrl": slideImg,
    "subTitle": "vue",
    "desc": "Simple Slideshow for Presentation",
  },
  {
    "title": "Mopsy Blog",
    "route": "MopsyBlog",
    "imgUrl": blogImg,
    "subTitle": "vue, firebase",
    "desc": "Personal Blog",
  },
  {
    "title": "Color Composer",
    "route": "ColorComposer",
    "imgUrl": colorImg,
    "subTitle": "js",
    "desc": "Generate Random Colors",
  },
  {
    "title": "Canvas Study",
    "route": "CanvasStudy",
    "imgUrl": canvasImg,
    "subTitle": "canvas",
    "desc": "HTML5 Canvas Study",
  },
]

export default projects;
