import { Directive, AfterContentInit, ElementRef, Renderer2, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Directive({
  selector: '[appSvg]'
})
export class SvgDirective implements AfterContentInit {
  svgMarkup: any;
  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    public http: HttpClient
  ) {}
  @Input() svgPath = '/assets/icons/svg/';
  @Input() svgName: any;
  @Input() svgClass = '';

  ngAfterContentInit() {
    this.getSVG(this.svgPath, this.svgName);
  }

  getSVG(path, name) {
    return this.http
      .get(`${path}/${name}.svg`, { responseType: 'text' })
      .subscribe(data => {
        const parser = new DOMParser();
        const dataIdReplace = data
          .replace(/<svg/g, '<svg class="' + this.svgClass + '"')
          .replace(/[^color="]fill:url\(#/g, '{fill:url(#' + name + '-')
          .replace(/id="(?!Lay)/g, 'id="' + name + '-')
          .replace(/id=".*(content-).+-/gm, 'id="')
          .replace(/cls-/g, name + '-cls-');
        const doc = parser.parseFromString(dataIdReplace, 'image/svg+xml');
        this.renderer.appendChild(this.el.nativeElement, doc.firstChild);
      });
  }
}
