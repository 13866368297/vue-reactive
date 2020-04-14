import Vue from './vue.js'
let app = new Vue({
    el: "#app",
    template: `<div>{{msg}}=={{value}}</div>`,
    data: {
        msg: "hello!!",
        value:"111"
    }
})
//在vue中渲染一个组件，共两个步骤
//1.new Components (初始化一些操作) 
//2.把template元素挂载到页面上
app.mount()
let dom = document.querySelector("#app")
dom.onclick = function () {
    app.template = `<div>{{msg}}</div>`
    app.msg = "word!!"
    setTimeout(()=>{
        app.value = "222"
    },1000)
}