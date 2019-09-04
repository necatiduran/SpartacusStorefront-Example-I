import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
// import { RouterModule } from '@angular/router';
import { CmsLibModule } from '@spartacus/storefront';
import { StaticPageLayoutComponent } from 'src/static-page-layout/static-page-layout.component';
import { StaticPageLayoutModule } from '../static-page-layout/static-page-layout.module';
import { MyPageComponent } from './my-page.component';

// const routes: Routes = [
//   {
//     path: 'mycustompage',
//     canActivate: [CmsPageGuard],
//     data: { pageLabel: 'faq' },
//     component: MyPageComponent
//   }
// ];

@NgModule({
  imports: [
    CommonModule,
    CmsLibModule,
    StaticPageLayoutModule
    // RouterModule.forChild(routes)
  ],
  declarations: [MyPageComponent, StaticPageLayoutComponent],
  exports: [MyPageComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MyPageModule {}
