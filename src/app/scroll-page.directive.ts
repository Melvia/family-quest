import {Directive, ElementRef, ViewChild, ViewContainerRef} from '@angular/core';
import {gsap} from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Draggable from "gsap/Draggable";

@Directive({
  selector: '[appScrollPage]'
})
export class ScrollPageDirective {
  constructor(protected vcr: ViewContainerRef, protected host?: ElementRef<HTMLElement>) {

  }


  ngOnInit() {

  }

  ngAfterViewInit() {
    gsap.registerPlugin(ScrollTrigger, Draggable);


    this.initScrollTrigger();
  }

  initScrollTrigger() {

    gsap.to("#bg", {scrollTrigger: {scrub: 1}, scale: 1.5})

    gsap.to("#kate", {scrollTrigger: {scrub: 1}, scale: 0.5, x: 50})

    gsap.to("#serg", {scrollTrigger: {scrub: 1}, scale: 0.5, x: 150})

    gsap.to("#alien", {scrollTrigger: {scrub: 1}, scale: 0.5, x: 250})

    gsap.to("#text", {scrollTrigger: {scrub: 1}, y: 500})
  }

  protected onDestroy() {
    delete this.host;
  }

}
