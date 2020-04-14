//收集依赖
export default class Dep {
    constructor() {
        this.watchers = []
    }
    depend(watcher){
        watcher.addDep(this)
    }
    addWatcher(watcher){
        //相同watcher不能重复添加
        if(!this.watchers.includes(watcher)){
            this.watchers.push(watcher)
        }
    }
    removeWatcher(watcher){
        this.watchers.splice(this.watchers.indexOf(watcher),1)
    }
    notify(){
        this.watchers.forEach(watcher=>{
            watcher.render()
        })
    }
}