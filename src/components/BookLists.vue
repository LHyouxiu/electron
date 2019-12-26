<template>
  <div class="bookList">
    <div class="tabs">
      <div class="tabsBtn">
        <div>
            <i class="el-icon-edit"></i>
        </div>
        <div>
            <i class="el-icon-share"></i>
        </div>
        <div>
            <i class="el-icon-delete"></i>
        </div>
      </div>
      <div class="tabList">
        <el-button type="text">默认标签</el-button>
        <el-button type="text">文字按钮</el-button>
        <el-button type="text">文字按钮</el-button>
        <el-button type="text">文字按钮</el-button>
      </div>
    </div>
    <div class="lists">
      <el-table
        :data="tableData"
        highlight-current-row
        @row-dblclick="dblclickRow"
        height="100%"
        style="width: 100%">
        <el-table-column
                prop="name"
                label="书名"
                width="180">
        </el-table-column>
        <el-table-column
                prop="date"
                label="日期"
                width="180">
        </el-table-column>
        <el-table-column
                prop="tab"
                label="标签">
        </el-table-column>
        <el-table-column
                prop="size"
                label="大小">
        </el-table-column>
        <el-table-column
                prop="src"
                label="地址">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
export default {
  name: 'BookLists',
  data () {
    return {
      // tableData: require('../plugins/bookList')
      tableData: [
        {
          id: 0,
          name: '',
          date: '2018-05-05',
          tab: '默认标签',
          size: '1024KB',
          src: 'C://test/test'
        },
        {
          id: 1,
          name: '这是小说名称',
          date: '2018-05-05',
          tab: '默认标签',
          size: '1024KB',
          src: 'C://test/test'
        }
      ]
    }
  },
  methods: {
    dblclickRow (row) {
      // console.log(row.name)
      // console.log(row.src)
      // 向App.vue传参数
      this.$emit('toRead', row)
    }
  }
}
</script>
<style>
.bookList {
    display: flex;
    flex-direction: row;
    position: absolute;
    top: 30px;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, .9);
}
.tabs {
    display: flex;
    width: 200px;
    flex-direction: column;
    height: 100%;
    position: relative;
    background: #010100;
}
.lists {
    display: flex;
    flex: 1;
}
.tabsBtn {
    display: flex;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    height: 30px;
    width: 100%;
}
.tabsBtn div {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    color: #9F9F9F;
    cursor: pointer;
}
.tabsBtn div:hover {
    color: #fff;
}
.tabList {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 30px;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: auto;
    padding-top: 15px;
}
.el-button + .el-button {
    margin-left: 0 !important;
}
.el-table, .el-table__expanded-cell {
    background: rgba(0, 0, 0, 0) !important;
}
.el-table th, .el-table tr {
    background: rgba(0, 0, 0, 0) !important;
}
.el-table td, .el-table th.is-leaf {
    border-bottom: 1px solid rgba(0, 0, 0, 0) !important;
    color: #00C100;
}
.el-table--enable-row-hover .el-table__body tr:hover > td {
    background-color: #605D5D !important;
}
</style>
