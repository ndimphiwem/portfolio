import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(
    private meta: Meta,
    private title: Title
  ) { }

  setMetaTags(metaTags: Array<{ name: string, content: string }>) {
    metaTags.forEach(tag => {
      this.meta.updateTag( { name: tag.name, content: tag.content });
    });
  }

  setOgTags(metaTags: Array<{ property: string, content: string }>) {
    console.log('meta', metaTags);
    metaTags.forEach(tag => {
      this.meta.updateTag( { property: tag.property, content: tag.content });
    });
  }

  setTitle (title: string) {
    this.title.setTitle(title);
  }
}
