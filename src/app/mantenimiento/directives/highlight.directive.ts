import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() appHighlight = '';
  public color = 'yellow';
  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    if (this.appHighlight=='0'){
      this.highlight('red' || this.color);
    }
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    if (this.appHighlight=='0'){
      this.highlight('');
    }
 
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
    //this.el.nativeElement.style.color = 'blue';
  }
}
