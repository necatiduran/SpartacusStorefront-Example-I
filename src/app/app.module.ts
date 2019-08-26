import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { translationChunksConfig, translations } from '@spartacus/assets';
import { B2cStorefrontModule, CmsPageGuard } from '@spartacus/storefront';
import { MyPageComponent } from 'src/my-page/my-page.component';
import { StaticPageLayoutComponent } from 'src/static-page-layout/static-page-layout.component';
import { AppComponent } from './app.component';
import { CopyrightComponent } from './copyright/copyright.component';

const appRoutes: Routes = [
  {
    path: 'my',
    canActivate: [CmsPageGuard],
    data: { pageLabel: 'faq' },
    component: MyPageComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MyPageComponent,
    StaticPageLayoutComponent,
    CopyrightComponent
  ],
  imports: [
    BrowserModule,
    B2cStorefrontModule.withConfig({
      backend: {
        occ: {
          baseUrl: 'https://localhost:9002',
          prefix: '/rest/v2/',
          legacy: false
        }
      },
      authentication: {
        client_id: 'mobile_android',
        client_secret: 'secret'
      },
      context: {
        baseSite: ['electronics-spa']
      },
      i18n: {
        resources: translations,
        chunks: translationChunksConfig,
        fallbackLang: 'en'
      },
      cmsComponents: {
        CopyrightComponent: {
          component: CopyrightComponent
        }
      }
    }),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  entryComponents: [CopyrightComponent],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
