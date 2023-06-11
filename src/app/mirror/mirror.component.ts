import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {debounceTime, fromEvent, merge, Subscription} from "rxjs";
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';


function isMouseInShape(x : number, y: number, shape: any) {
  let shapeLeft = shape.x;
  let shapeRight = shape.x + shape.width;
  let shapeTop = shape.y;
  let shapeBottom = shape.y + shape.height;


  if (x > shapeLeft && x < shapeRight && y > shapeTop && y < shapeBottom) {
    return true;
  }
  return false;
}
@UntilDestroy()
@Component({
  selector: 'app-mirror',
  templateUrl: './mirror.component.html',
  styleUrls: ['./mirror.component.css']
})



export class MirrorComponent implements OnInit, OnDestroy {
  @ViewChild('canvas', {static: false}) canvasRef: ElementRef | undefined;

  offsetX: number = 0;
  offsetY: number = 0;

  protected canvas: HTMLCanvasElement;
  protected context: CanvasRenderingContext2D | undefined | null = null;
  protected canvasWidth: number = 0;
  protected canvasHeight: number = 0;
  protected shapes: Array<any> = [];
  protected currentShapeIndex: number = 0;
  protected isDragging: Boolean = false;
  protected startX: number = 0;
  protected startY: number = 0;
  protected subscription: Subscription = new Subscription();

  ngOnDestroy() {
    // console.log('destroyed');
    // this.subscription.unsubscribe();

  }

  constructor() {

    this.canvas = this.canvasRef?.nativeElement;
    if (!this.canvas) return;
    let canvas = this.canvas;
    this.context = canvas?.getContext('2d');
    canvas.width = window.innerWidth - 30;
    canvas.height = window.innerHeight - 10;

    canvas.style.border = '5px solid red';
    this.canvasWidth = canvas.width;
    this.canvasHeight = canvas.height;
    this.getOffset(canvas);

   // merge( fromEvent(window, 'resize'), fromEvent(window, 'scroll'), fromEvent(canvas, 'resize'))
    this.subscription = fromEvent(window, 'resize')

      .subscribe(() => console.log('Window resizing'));
  }

  getOffset(canvas: HTMLCanvasElement): void {
    let canvasOffsets = canvas.getBoundingClientRect();
    [this.offsetX, this.offsetY] = [canvasOffsets.left, canvasOffsets.top];
  }

  ngOnInit(): void {
    this.shapes.push({x: 200, y: 50, width: 200, height: 200, color: 'red'});
    this.shapes.push({x: 10, y: 10, width: 100, height: 100, color: 'blue'});
    this.drawShapes();

    merge( fromEvent(window, 'resize'), fromEvent(window, 'scroll'))
      .pipe(untilDestroyed(this), debounceTime(200))
      .subscribe(() => this.getOffset(this.canvasRef?.nativeElement));

  }

  mouseDown(event: MouseEvent) {
    event.preventDefault();

    let index = 0;
    this.startX = (event.clientX - this.offsetX);
    this.startY = (event.clientY - this.offsetY);

    const shapes = this.shapes;
    for (let shape of this.shapes) {
      if (isMouseInShape(this.startX, this.startY, shape)) {
        this.currentShapeIndex = index;
        this.isDragging = true;
        //return;
      }
      index++;
    }

  }

  mouseUp(event: MouseEvent) {

    if (!this.isDragging) {
      return;
    }
    event.preventDefault();
    this.isDragging = false;

  }

  mouseOut(event: MouseEvent) {

    if (!this.isDragging) {
      return;
    }
    event.preventDefault();
    this.isDragging = false;

  }

  mouseMove(event : MouseEvent) {
    if (!this.isDragging) {
      return;
    }
    event.preventDefault();
    let mouseX = (event.clientX - this.offsetX);
    let mouseY = (event.clientY - this.offsetY);
    let dx = mouseX - this.startX;
    let dy = mouseY - this.startY;

    let currentShape = this.shapes[this.currentShapeIndex];
    currentShape.x += dx;
    currentShape.y += dy;
    this.drawShapes();
    this.startX = mouseX;
    this.startY = mouseY;



  }

  drawShapes(): void {
    if (!this.context) return;
    this.context?.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    for (let shape of this.shapes) {
      this.context.fillStyle = shape.color;
      this.context.fillRect(shape.x, shape.y, shape.width, shape.height);
    }
  }

}
