class Hover {
    constructor(option) {
        if (typeof option.el == 'string') {
            this.el = document.querySelector(option.el)
        } else if (option.el instanceof HTMLElement) {
            this.el = option.el
        }
        // this.el.style.transition = '0.3s'
        this.el.addEventListener('mouseover', () => this.move())
    }
    random(min, max){
        return Math.floor(Math.rondom() * (man + 1 - min) - min)
    }
    
    move() {
        this.style.position = 'fixed'
        this.el.style.left = this.random(0, innerWidth - this.el.clientWidth) + 'px'
    
    }
}
document.request

const btn = new Hover({
    el: '.content__move'
})
const btn2 = new Hover({
    el: '.content__stay'
})