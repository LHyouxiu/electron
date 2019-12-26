<template>
<div class="readMain">
  <div @mouseenter="show = !show" @mouseleave="show = !show" class="backBtns">
    <transition name="el-fade-in-linear">
      <div v-show="show" class="backBtn">
        <el-button @click="backBookList" type="info" icon="el-icon-back" circle></el-button>
        <el-button type="info" icon="el-icon-s-fold" circle></el-button>
        <el-button type="info" icon="el-icon-minus" circle></el-button>
        <el-button type="info" icon="el-icon-plus" circle></el-button>
      </div>
    </transition>
  </div>
<div class="txtContent"></div>
</div>
</template>
<script>
export default {
  name: 'ReadMain',
  data () {
    return {
      show: false
    }
  },
  methods: {
    backBookList () {
      this.$emit('backBookList', 'backBookList')
    }
  },
  mounted () {
    let localStorage=JSON.parse(window.localStorage.getItem("local"))
    let bookPath = localStorage.src
    fs.readFile(bookPath, 'utf-8', (err, data) => {
      if (err) throw err
      this.txtContent = data
    })
  }
}
</script>
<style scoped>
.readMain {
  display: flex;
  position: absolute;
  top: 30px;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, .9);
}
.backBtns {
  display: flex;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  justify-content: center;
  align-items: center;
}
.backBtn {
  display: flex;
}
.backBtn button {
  margin: 0 5px;
}
</style>
