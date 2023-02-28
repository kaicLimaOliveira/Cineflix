import Camera from "../../../lib/shared/camera"
import Controller from "./controller"
import Service from "./service"
import View from "./view"

const camera = await Camera.init()
const [rootPath] = window.location.href.split('/pages/')
const factory = {
    async initalize() {
        return Controller.initialize({
            view: new View({}),
            service: new Service({})
        })
    }
}

export default factory