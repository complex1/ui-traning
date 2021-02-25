<template>
  <div class="home container-fluid">
    <div class="glass card_g" :style="{width: '300px',top: '200px', left: !ui ? '300px' : '0px' }" @click="ui = !ui">
      <h3>What is UI Design?</h3>
      <p>The “UI” in UI design stands for “user interface.” The user interface is the graphical layout of an application.</p>
    </div>
    <div v-if="ui" class="glass card_g animate__animated animate__fadeInUp" style="width: 300px;top: 20px; left: 400px">
      <img width="250" src="https://i.pinimg.com/564x/bc/9f/45/bc9f45faaabe200f75e8450fcf3b35a9.jpg" alt="">
    </div>
    <div v-if="ui" class="glass card_g animate__animated animate__fadeInUp" style="width: 300px;top: 200px; left: 600px">
      <p>What is the difference between the browser and web browser?</p>
      <a href="https://meta.stackexchange.com/questions/177140/what-is-the-difference-between-the-browser-and-web-browser-tags">
        Read More
      </a>
    </div>
    <div v-if="ui" class="glass card_g animate__animated animate__fadeInDown" style="width: 300px;top: 470px; left: 470px" @click="uiUx = true" @mouseleave="uiUx = false">
      <h3>What's the difference between UI and UX?</h3>
      <ul>
        <li>
          <a href="https://medium.com/@iamjesseshow/ux-vs-us-7431dd859418">UI vs UX</a>
        </li>
        <li>
          <a href="https://www.usertesting.com/blog/ui-vs-ux"> usertesting UI and UX </a>
        </li>
      </ul>
    </div>
    <div v-if="ui" class="glass card_g animate__animated animate__fadeInLeft" style="width: 400px;top: 300px; left: 760px" @click="whyWeb = true" @mouseleave="whyWeb = false">
      <h3>Web Development</h3>
      <p>Web developers are a fundamental part of any tech team. As entry-level developers, they bring to life the mockups created by UX designers.
        They translate these graphic recommendations into web languages by writing HTML, CSS, and JavaScript code.</p>
    </div>
    <div v-if="ui" @click="wdPath = !wdPath" class="glass card_g animate__animated animate__fadeInLeft" style="top: 300px; left: 1200px">
      <h4>Web Development</h4>
      <h4>Learning Path</h4>
      <img width="200" src="https://media3.giphy.com/media/3sa5RGn6LGp8rR36b9/source.gif" alt="">
    </div>
    <div class="glass card_g animate__animated animate__fadeInLeft" :style="{left : whyWeb ? '0px' : '-1000px', top: '200px'}">
      <img src="https://www.siliconrepublic.com/wp-content/uploads/2014/12/img/web-developer-meme7.jpg" alt="">
    </div>
    <div class="glass card_g animate__animated animate__fadeInLeft" :style="{left : uiUx ? '100px' : '-1000px', top: '300px'}">
      <img src="https://miro.medium.com/max/628/0*nNYOfQXnnQ2i9edd" alt="">
    </div>
    <h1 v-if="wdPath" class="card_g animate__animated animate__fadeIn" :style="{left : '1500px', top: '0px'}">Core Of Web</h1>
    <img v-if="wdPath" @click="html = !html" class=" card_g animate__animated animate__fadeInDown" width="200" :style="{left : '1500px', top: '100px'}" src="http://assets.stickpng.com/thumbs/5847f5bdcef1014c0b5e489c.png" alt="">
    <img v-if="wdPath" @click="css = !css" class=" card_g animate__animated animate__fadeInRight" width="200" :style="{left : '1500px', top: '300px'}" src="./css.png" alt="">
    <img v-if="wdPath" @click="js = !js" class=" card_g animate__animated animate__fadeInUp" width="200" :style="{left : '1500px', top: '500px'}" src="./js.png" alt="">
    <div v-if="html" class="glass card_g animate__animated animate__fadeInLeft" style="width: 300px;top: 100px; left: 1700px">
      <ul>
        <li>Writing Semantic HTML</li>
        <li>HTML attribute</li>
        <li>Basic SEO</li>
      </ul>
      <router-link to="html" > Learn HTML </router-link>
    </div>
    <div v-if="css" class="glass card_g animate__animated animate__fadeInLeft" style="width: 300px;top: 250px; left: 1700px">
      <ul>
        <li>Basic CSS Property</li>
        <li>CSS Selector</li>
        <li>CSS BOX Model</li>
        <li>CSS Layout (Display, Position, Flex Box, CSS Grid)</li>
        <li>Media Query</li>
        <li>Bootstrap</li>
      </ul>
    </div>
    <div v-if="js" class="glass card_g animate__animated animate__fadeInLeft" style="width: 300px;top: 500px; left: 1700px">
      <h3>JS Basic</h3>
      <ul>
        <li>JS Core</li>
        <li>DOM Manipulation</li>
        <li>API Call</li>
        <li>Jquery</li>
      </ul>
    </div>
    <div v-if="js" @click="ajs = !ajs" class="glass card_g animate__animated animate__fadeInLeft" style="width: 300px;top: 600px; left: 1900px">
      <h4>Advanced JavaScript</h4>
    </div>
    <div v-if="ajs"  class="glass card_g animate__animated animate__fadeInLeft" style="top: 135px; left: 2150px">
      <img width="100" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Babel_Logo.svg/1200px-Babel_Logo.svg.png" alt="">
    </div>
    <div v-if="ajs" class="glass card_g animate__animated animate__fadeInLeft" style="top: 250px; left: 2150px">
      <img width="100" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Webpack.svg/1200px-Webpack.svg.png" alt="">
    </div>
    <div v-if="ajs" @click="jsFw = !jsFw" class="glass card_g animate__animated animate__fadeInLeft" style="top: 350px; left: 2150px">
      <h2>JavaScript Framework</h2>
    </div>
    <div v-if="ajs" class="glass card_g animate__animated animate__fadeInLeft" style="top: 450px; left: 2150px">
      <img width="100" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/800px-Npm-logo.svg.png" alt="">
    </div>
    <div v-if="ajs" class="glass card_g animate__animated animate__fadeInLeft" style="top: 550px; left: 2150px">
      <img width="100" src="https://farm8.staticflickr.com/7306/16407404782_1be42bc8f8_o_d.png" alt="">
    </div>
    <div v-if="jsFw" @click="google = !google" class="glass card_g animate__animated animate__fadeInLeft" style="top: 170px; left: 2600px">
      <img width="100" src="https://angular.io/assets/images/logos/angular/angular.png" alt="">
    </div>
    <div v-if="jsFw" @click="fb = !fb" class="glass card_g animate__animated animate__fadeInLeft" style="top: 350px; left: 2600px">
      <img width="100" src="https://res.cloudinary.com/practicaldev/image/fetch/s--54ca_F2q--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/1wwdyw5de8avrdkgtz5n.png" alt="">
    </div>
    <div v-if="jsFw" @click="vue = !vue" class="glass card_g animate__animated animate__fadeInLeft" style="top: 500px; left: 2600px">
      <img width="100" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png" alt="">
    </div>
    <div v-if="google"  class="glass card_g animate__animated animate__fadeInLeft" style="top: 170px; left: 2800px">
      <img width="100" src="https://i.pinimg.com/originals/00/ef/95/00ef95babba98ec1c4a326be11775602.png" alt="">
    </div>
    <div v-if="fb" class="glass card_g animate__animated animate__fadeInLeft" style="top: 330px; left: 2800px">
      <img width="100" src="https://i.pinimg.com/originals/30/99/af/3099aff4115ee20f43e3cdad04f59c48.png" alt="">
    </div>
    <div v-if="vue" class="glass card_g animate__animated animate__fadeInLeft" style="top: 500px; left: 2800px">
      <img width="100" src="https://avatars.githubusercontent.com/u/499550?s=460&u=de41ec9325e8a92e281b96a1514a0fd1cd81ad4a&v=4" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      ui: false,
      whyWeb: false,
      uiUx: false,
      wdPath: false,
      html: false,
      css: false,
      js: false,
      ajs: false,
      jsFw: false,
      google: false,
      fb: false,
      vue: false
    }
  }
}
</script>
<style lang="scss">
body, html {
  height: 100vh;
}
.home {
  height: 100vh;
  width: 3200px;
  position: relative;
  background: rgb(93,138,255);
  background: -moz-linear-gradient(166deg, rgba(93,138,255,1) 0%, rgba(204,188,226,1) 50%, rgba(103,217,174,1) 100%);
  background: -webkit-linear-gradient(166deg, rgba(93,138,255,1) 0%, rgba(204,188,226,1) 50%, rgba(103,217,174,1) 100%);
  background: linear-gradient(166deg, rgba(93,138,255,1) 0%, rgba(204,188,226,1) 50%, rgba(103,217,174,1) 100%);
}

.card_g {
  padding: 20px;
  max-width: fit-content;
  position: absolute;
}
.glass {
  background: rgba( 244, 244, 244, 0.30 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 13.0px );
  -webkit-backdrop-filter: blur( 13.0px );
  border-radius: 10px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
  margin: 10px;
  transition: all 0.5s;
  &:hover {
    box-shadow: 0 10px 40px 0 rgba( 31, 38, 135, 0.7 );
  }
}
</style>
