import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    static targets = [ "slide" ]
    static values = { index: Number }

    next() {
        this.indexValue = (this.indexValue+1)%4
        console.log(this.index)
    }
    
    previous() {
        this.indexValue = (this.indexValue+3)%4
        console.log(this.index)
    }

    indexValueChanged() {
        this.showCurrentSlide()
    }

    showCurrentSlide() {
        this.slideTargets.forEach((element, index) => {
            element.hidden = index != this.indexValue
        })
    }
}