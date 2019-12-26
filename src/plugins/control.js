const fs = require('fs')
// const path = 'src/plugins/bookList.json'
const path = '../'
export default {
  // 增
  create: function (e) {
    console.log(e)
    fs.readFile(path, (err, data) => {
      if (err) throw err
      let newData = JSON.parse(data.toString())
      newData.unshift(e)
      console.log(newData)
      newData = JSON.stringify(newData)
      fs.writeFile(path, newData, (err, data) => {
        if (err) throw err
        console.log('成功！')
      })
    })
  },
  // 删除
  delete: function () {

  }
}
