import { Directive, ElementRef, OnInit, AfterViewInit } from '@angular/core'

@Directive({
  selector: '[appFocus]'
})
export class FocusDirective implements OnInit, AfterViewInit {
  constructor (private el: ElementRef) {}

  ngAfterViewInit (): void {
    // ! хук который идёт уже после инита компонента
    // this.el.nativeElement.focus()
  }

  ngOnInit (): void {
    this.el.nativeElement.focus()
  }
}
