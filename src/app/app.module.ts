import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {en_US, NZ_I18N} from 'ng-zorro-antd/i18n';
import {registerLocaleData} from '@angular/common';
import en from '@angular/common/locales/en';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MainFooterComponent} from './pdasite/main-footer/main-footer.component';
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzTypographyModule} from "ng-zorro-antd/typography";
import {NzStepsModule} from "ng-zorro-antd/steps";
import {NzIconModule} from "ng-zorro-antd/icon";
import {MainHeaderComponent} from './pdasite/main-header/main-header.component';
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzGridModule} from "ng-zorro-antd/grid";
import {MainGraphSelectorComponent} from './pdasite/main-graph-selector/main-graph-selector.component';
import {MainGraphFillerComponent} from './pdasite/main-graph-filler/main-graph-filler.component';
import {MainOutputSelectorComponent} from './pdasite/main-output-selector/main-output-selector.component';
import {MainErrorMessageComponent} from './pdasite/main-error-message/main-error-message.component';
import {NzListModule} from "ng-zorro-antd/list";
import {NzCardModule} from "ng-zorro-antd/card";
import {NzSelectModule} from "ng-zorro-antd/select";
import {MainContentComponent} from './pdasite/main-content/main-content.component';
import {NzDividerModule} from "ng-zorro-antd/divider";
import {NzSpaceModule} from "ng-zorro-antd/space";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzFormModule} from "ng-zorro-antd/form";

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    MainFooterComponent,
    MainHeaderComponent,
    MainGraphSelectorComponent,
    MainGraphFillerComponent,
    MainOutputSelectorComponent,
    MainErrorMessageComponent,
    MainContentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzLayoutModule,
    NzTypographyModule,
    NzStepsModule,
    NzIconModule,
    NzButtonModule,
    NzGridModule,
    NzListModule,
    NzCardModule,
    NzSelectModule,
    NzDividerModule,
    NzSpaceModule,
    NzInputModule,
    NzFormModule
  ],
  providers: [{provide: NZ_I18N, useValue: en_US}],
  bootstrap: [AppComponent]
})
export class AppModule { }
