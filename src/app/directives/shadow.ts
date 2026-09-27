import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appShadow]',
})
export class Shadow {

  /**
   *
   */
  constructor(private ele: ElementRef) {

  }
  @HostListener("mouseenter")
  over(){
    this.ele.nativeElement.classList.add("shadow");
   // this.ele.nativeElement.style.transition="0.9s"
  }
  @HostListener("mouseleave")
  leave(){
   this.ele.nativeElement.classList.remove("shadow");
   // this.ele.nativeElement.style.transition="0.9s"
  }
}
