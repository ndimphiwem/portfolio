import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgDirective } from './svg/svg.directive';
import { HttpClientModule } from '@angular/common/http';
import { SafePipe } from './safe/safe.pipe';

@NgModule({
  declarations: [SvgDirective, SafePipe],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [],
  exports: [SvgDirective, SafePipe]
})
export class UtilsModule { }
