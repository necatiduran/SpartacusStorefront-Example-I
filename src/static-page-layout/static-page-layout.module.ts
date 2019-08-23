import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { StaticPageLayoutComponent } from './static-page-layout.component';

@NgModule({
  imports: [CommonModule],
  declarations: [StaticPageLayoutComponent],
  exports: [StaticPageLayoutComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class StaticPageLayoutModule {}
