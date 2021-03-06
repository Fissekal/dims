import {Directive, ElementRef, Renderer} from 'angular2/core'

@Directive({
    selector: '[autoGrow]',
    host: {
        '(focus)': 'onFocus()',
        '(blur)': 'onBlur()'
    }
})
export class AutoGrowDirective {
    constructor(private el: ElementRef, private renderer: Renderer){
        console.log("YAY!!!!");
    }

    onFocus(){
        this.renderer.setElementStyle(this.el.nativeElement, 'width', '568');
    }

    onBlur() {
        this.renderer.setElementStyle(this.el.nativeElement, 'width', '40');
    }

}