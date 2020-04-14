import Watcher from './watcher.js'
import Dep from './dep.js'
export default class Vue {
    constructor(options) {
        this.$el = options.el
        this.data = options.data
        this.template = options.template
        this.init()
    }
    init() {
        this.defineReactive()
    }
    mount(){
        this.watcher = new Watcher(this)
        this.watcher.render()
    }
    defineReactive() {
        for (const key of Object.keys(this.data)) {
            const dep = new Dep()
            Object.defineProperty(this, key, {
                get() {
                    //通知watcher把需要收集的dep临时存起来
                    dep.depend(this.watcher)
                    return this.data[key]
                },
                set(value) {
                    this.data[key] = value
                    dep.notify()
                }
            })
        }
    }
}