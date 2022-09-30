import { Directive, Renderer2, OnInit, ElementRef } from '@angular/core';
//이게더 좋은 방법
//제공하는 랜더러를 사용하는 방법
@Directive({
  selector: '[appBetterHighlight]',
})
export class BetterHighlightDirective implements OnInit {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}
  //https://angular.io/api/core/Renderer2
  ngOnInit() {
    this.renderer.setStyle(
      this.elRef.nativeElement,
      'background-color',
      'blue'
    );
  }
}
