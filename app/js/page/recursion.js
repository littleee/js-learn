var edit = {
      "name": "BeJson",
      "url": "http://www.bejsoxxn.com",
      "page": 88,
      "isNonProfit": true,
      "address": {
          "street": "科技园路.",
          "city": "江苏苏州",
          "country": "中国"
      },
      "links": [
          {
              "name": "Google",
              "url": "http://www.google.com"
          },
          {
              "name": "Baidu",
              "url": "http://www.baidu.com"
          }
      ]
}

var recursion = (edit) =>{
 if(edit instanceof Array) {
    edit.map((item)=>{
      recursion(item)
    })
  }else if(edit instanceof Object){
      Object.keys(edit).map((item)=>{
        recursion(edit[item])
    })
  }else{
    var li = document.createElement('li')
    document.getElementById('app').append(`<li>${edit}</li>`)
  }
}
recursion(edit)
