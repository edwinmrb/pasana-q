import {Component, ElementRef, Input, OnInit, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {
  @Input() width = 200;
  @ViewChild('logo', {static: true}) logoRef: ElementRef | undefined;

  constructor( private renderer: Renderer2) {

  }

  ngOnInit(): void {
    this.renderer.setStyle(this.logoRef?.nativeElement, 'width', `${this.width}px`);
  }

}
