import { Directive, ElementRef, HostListener, Input, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective implements OnInit {
  // Configurable highlight color with default value
  @Input() appHighlight: string = 'yellow';

  private originalBg: string = '';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    // Save original background color on initialization
    this.originalBg = this.el.nativeElement.style.backgroundColor || '';
  }

  @HostListener('mouseenter')
  onMouseEnter(): void {
    const colorToApply = this.appHighlight || 'yellow';
    this.renderer.setStyle(this.el.nativeElement, 'background-color', colorToApply);
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'background-color 0.3s ease');
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', this.originalBg);
  }
}
