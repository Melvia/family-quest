import {Component, OnDestroy, OnInit} from '@angular/core';
import { gsap } from "gsap";
import Draggable from "gsap/Draggable";
import ScrollTrigger from "gsap/ScrollTrigger";

@Component({
  selector: 'app-scroll-page',
  templateUrl: './scroll-page.component.html',
  styleUrls: ['./scroll-page.component.css']
})
export class ScrollPageComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {
    // gsap.registerPlugin(ScrollTrigger, Draggable);
    //
    // this.initScrollTrigger();
  }

  // initScrollTrigger() {
  //
  //   gsap.to("#bg", {scrollTrigger: {scrub: 1}, scale: 1.5})
  //
  //   gsap.to("#kate", {scrollTrigger: {scrub: 1}, scale: 0.5, x: 50})
  //
  //   gsap.to("#serg", {scrollTrigger: {scrub: 1}, scale: 0.5, x: 150})
  //
  //   gsap.to("#alien", {scrollTrigger: {scrub: 1}, scale: 0.5, x: 250})
  //
  //   gsap.to("#text", {scrollTrigger: {scrub: 1}, y: 500})
  // }

  ngOnDestroy() {

  }


}
