<template>
  <div id="app">
    <Header :bookName="bookName"></Header>
    <BookLists v-if="list" @toRead="toRead"></BookLists>
    <ReadMain v-else @backBookList="backBookList"></ReadMain>
    <router-view />
  </div>
</template>
<script>
import Header from './components/Header.vue'
import BookLists from './components/BookLists.vue'
import ReadMain from './components/ReadMain.vue'
export default {
  name: 'app',
  components: {
    Header,
    BookLists,
    ReadMain
  },
  data () {
    return {
      list: true, // 控制列表和阅读显示页
      bookName: ''
    }
  },
  methods: {
    toRead (data) {
      console.log(data)
      // this.bookName = data
      // this.list = false
      // 往Header中传参
      this.bookName = data.name
      // 将当前book信息保存在本地
      let localStorage = {
        'bookName': data.name,
        'src': data.src,
        'list': false
      }
      localStorage = JSON.stringify(localStorage) // 转化为JSON字符串
      window.localStorage.setItem('local', localStorage)
      // 切换为read页
      this.list = false
    },
    backBookList () {
      this.list = true
      this.bookName = ''
    }
  }
}
</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}
::-webkit-scrollbar
{
  width: 8px;
  background-color: #F5F5F5;
}
/*定义滚动条轨道 内阴影+圆角*/
::-webkit-scrollbar-track
{
  background: rgba(0,0,0,0.9);
}
/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb
{
  border-radius: 8px;
  background-color: #555;
}
</style>
