import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appMultiline]'
})
export class MultilineDirective {

  @Input() appMultiline?: number;

  constructor(private el: ElementRef) {

  }

  ngOnInit() {
    console.log('this.appMultiline ngOnInit', this.appMultiline)
    this.el.nativeElement.style.display = '-webkit-box';
    this.el.nativeElement.style.overflow = 'hidden';
    this.el.nativeElement.style['-webkit-box-orient'] = 'vertical';
    this.el.nativeElement.style['-webkit-line-clamp'] = this.appMultiline || 1;
  }
}
