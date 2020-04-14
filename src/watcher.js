//派发更新
export default class Watcher {
    constructor(vm) {
        this.vm = vm
        this.oldDeps = []
        this.newDeps = []
    }
    addDep(dep){
        //相同dep不能重复添加
        if(!this.newDeps.includes(dep)){
            this.newDeps.push(dep)
        }
    }
    depend(){
        //清楚不在依赖的动态数据
        while(this.oldDeps.length){
            let dep = this.oldDeps.pop()
            if(!this.newDeps.includes(dep)){
                dep.removeWatcher(this)
            }
        }
        //通知dep收集
        this.newDeps.forEach(dep=>{
            dep.addWatcher(this)
        })
        this.oldDeps = this.newDeps
        this.newDeps = []
    }
    render() {
        const vm = this.vm
        let dom = document.querySelector(vm.$el)
        let tmp = vm.template.replace(/{{(\w+)}}/g, (match, value) => {
            return vm[value]
        })
        dom.innerHTML = tmp
        this.depend()
    }
}