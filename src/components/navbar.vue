<template>
  <div class="nav">
    <div class="nav-option out-box" @click="open = !open">
      <i class="fa fa-bars" ></i>
    </div>
    <div>
      <router-link to="/" :style="{top: '10px', left: open ? '90px' : '-100px'}">Home</router-link>
      <router-link to="html" :style="{top: '40px', left: open ? '80px' : '-100px'}">HTML</router-link>
      <router-link to="css" :style="{top: '70px', left: open ? '60px' : '-100px'}">CSS</router-link>
      <router-link to="js" :style="{top: '100px', left: open ? '30px' : '-100px'}">JS</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      open: false
    }
  }
}
</script>

<style lang="scss" scoped>
.nav {
  position: relative;
  a {
    position: absolute;
    transition: left 0.5s;
    cursor: pointer;
    padding: 5px;
    &:hover {
      box-shadow: 8px 8px 16px #c4c4c4, -8px -8px 16px #fff;
    }
  }
}

.nav-option {
  border-radius: 50%;
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;

}
.out-box {
  box-shadow: 8px 8px 16px #c4c4c4, -8px -8px 16px #fff;
}
.in-box {
  box-shadow:  inset 8px 8px 16px #fff, inset -8px -8px 16px #777;
}
</style>
