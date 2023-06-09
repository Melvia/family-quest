import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appLight]'
})
export class LightDirective {
  constructor(protected el: ElementRef) {
  }

  @HostBinding('style.backgroundImage') elStyle : string | null = null;

  @HostListener("mousemove", ['$event']) onMouseMove(event: MouseEvent) {
    this.setStyle(event);
  }

  private setStyle(e: MouseEvent) {
    let spotlightSize = "transparent 10px, rgba(0, 0, 0, 0.95) 220px)";

    this.elStyle = `radial-gradient(circle at ${
      (e.pageX / this.el.nativeElement.clientWidth) * 100
    }% ${(e.pageY / this.el.nativeElement.clientHeight) * 100}%, ${spotlightSize}`;

  }

}
