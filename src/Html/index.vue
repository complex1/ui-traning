<template>
  <div class="html">
    <navbar/>
    <div style="color: gray;top: 20px; left: 300px;" class="card_n">
      <h1 class="nm">HTML</h1>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/navbar.vue'
export default {
  name: 'HTML',
  components: {
    Navbar
  }
}
</script>

<style lang="scss" scoped>
html, body {
  margin: 0px;
  padding: 0px;
}
.html {
  height: 100vh;
  width: 100vw;
  background: rgb(210, 221, 255);
  position: relative;
}
.card_n {
  box-shadow: 8px 8px 16px #c4c4c4, -8px -8px 16px rgb(230, 230, 230);
  min-width: fit-content;
  padding: 20px;
  border-radius: 10px;
  position: absolute;
}
.out-box {
  box-shadow: 8px 8px 16px #c4c4c4, -8px -8px 16px #fff;
}
.in-box {
  box-shadow:  inset 8px 8px 16px #fff inset -8px -8px 16px #777;
}
</style>
