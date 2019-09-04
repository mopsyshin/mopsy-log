import colorImg from '~/assets/images/color.png';
import slideImg from '~/assets/images/slide.png';
import canvasImg from '~/assets/images/canvas.png';
import blogImg from '~/assets/images/blog.png';
import galleryImg from '~/assets/images/gallery.png';

const projects = [
  {
    "title": "UI Gallery",
    "route": "UiGallery",
    "imgUrl": galleryImg,
    "subTitle": "react",
    "desc": "UX Engineering Portfolio",
  },
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
