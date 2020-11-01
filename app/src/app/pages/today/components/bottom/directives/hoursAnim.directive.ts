import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';
import {fromEvent} from 'rxjs';

@Directive({
  selector: '[appHoursAnim]',
})
export class HoursAnimDirective {
  constructor(private el: ElementRef, private r: Renderer2) {}

  @HostListener('ionScroll', ['$event']) anim(e: any) {
    const liList =
      [...e.target.lastChild.lastChild.lastChild.childNodes[0].childNodes]
      .filter(li => li.nodeName === 'LI');
    const scrollTop = e.detail.scrollTop;
    if (liList[0] !== undefined) {
      scrollTop > 60
      ? e.target.childNodes[0].lastChild.childNodes[1].style.transform = 'translateY(30px)'
      : e.target.childNodes[0].lastChild.childNodes[1].style.transform = 'translateY(0px)';
      liList.forEach(li => {
        if (scrollTop > li.offsetHeight + li.offsetTop) {
          li.childNodes[0].style.opacity = '1';
          li.childNodes[0].style.transform = 'translateY(0px)';
        } else {
          li.childNodes[0].style.opacity = '0';
          li.childNodes[0].style.transform = 'translateY(30px)';
        }
      });
    }
  }
}
