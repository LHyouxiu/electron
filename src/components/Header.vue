<template>
  <div class="header">
    <div class="logo">Electron阅读</div>
    <div v-if="bookName === ''" class="importBook">
      <input style="display: none" ref="fileInfo" type="file" @change="getTxtInfo">
      <!-- 模拟上传文件按钮 -->
      <div @click="getTxt" class="headerBtn">
        <i class="el-icon-plus"></i>
      </div>
    </div>
    <div v-else class="bookName">{{bookName}}</div>
    <div class="handler">
      <div class="headerBtn">
          <i class="el-icon-minus"></i>
      </div>
      <div class="headerBtn">
          <i class="el-icon-full-screen"></i>
      </div>
      <div class="headerBtn">
          <i class="el-icon-switch-button"></i>
      </div>
    </div>
  </div>
</template>

<script>
import Control from '../plugins/control'
export default {
  name: 'Header',
  data () {
    return {
      list: true
    }
  },
  // 接受父组件参数
  props: ['bookName'],
  methods: {
    getTxt () {
      // 点击div的方法getTxt()模拟refs的点击事件this.$refs.fileInfo.click()
      this.$refs.fileInfo.click()
    },
    getTxtInfo () {
      let file = this.$refs.fileInfo.files[0]
      console.log(file)
      if (file) {
        let fileType = file.type
        if (fileType !== 'text/plain') {
          alert('请选择txt文件')
          return
        } else {
          let bookName = file.name
          let size = file.size
          let src = file.path // 此处路径为空？注意
          let id = Date.parse(new Date())
          let bookItem = {
            id: id,
            bookName: bookName,
            size: size,
            tab: '默认标签',
            src: src
          }
          Control.create(bookItem)// 存入数据的方法
        }
      }
      this.$refs.fileInfo.value = ''// 每次清空input框内容
    }

  }
}
</script>

<style scoped>
.header{
  display: flex;
  height: 30px;
  width: 100%;
  background: #010100;
}
.logo{
  display: flex;
  width: 100px;
  justify-content: center;
  align-items: center;
  color:#DE434E ;
}
.bookName,.importBook{
  display: flex;
  align-items: center;
  flex: 1;
}
.bookName{
  color: #0542AF;
  font-size: 14px;
  align-items: center;
  padding-left: 10px;
}
.headerBtn{
  color: #9F9F9F;
  display: flex;
  height: 30px;
  width: 30px;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  cursor: pointer;
}
.headerBtn:hover{
  background: #9F9F9F;
  color: #fff;
}
.handler{
  display: flex;
  width: 100px;
  justify-content: flex-end;
}
.el-button{
  background: rgba(0,0,0,0);
  border-color: rgba(0,0,0,0);
}
</style>
