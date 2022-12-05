import { AfterViewInit, Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { oneMonth, sevenDay, halfYear } from '../../shared/models/constantItem';
import { ColorBorder, ColorBorderCard } from '../../shared/models/interfaces';


@Directive({
  selector: '[appBorderColor]',
})
export class BorderColorDirective implements AfterViewInit {

  constructor(private el: ElementRef, private renderer2: Renderer2) { }

  @Input() day: string | undefined = '';

  private timeStampVideo(day: string): ColorBorderCard {
    const timeStamps: number = Date.parse(day.slice(0, 10));
    const today: number = new Date().getTime();
    const time: number = today - timeStamps;
    if (time < sevenDay) return ColorBorder.blue;
    if (time >= sevenDay && time < oneMonth) return ColorBorder.green;
    if (time >= oneMonth && time < halfYear) return ColorBorder.yellow;
    if (time >= halfYear) return ColorBorder.red;
    return undefined;
  }

  ngAfterViewInit(): void {
    if (this.day) {
      const colorBorder = this.timeStampVideo(this.day);
      this.renderer2.setStyle(this.el.nativeElement, 'border-bottom', `3px solid ${colorBorder}`);
    }
  }
}
