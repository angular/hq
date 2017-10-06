import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { ProjectPipe } from './project.pipe';

import {ROUTES}  from './routes';
import { DummyTravisWidgetComponent } from './dummy-travis-widget/dummy-travis-widget.component';
import { DummyCircleCiWidgetComponent } from './dummy-circle-ci-widget/dummy-circle-ci-widget.component';
import { DummyPrsCountWidgetComponent } from './dummy-prs-count-widget/dummy-prs-count-widget.component';
import { ListItemComponent } from './list-item/list-item.component';
import { StatusComponent } from './status/status.component';
import { DummyCareTakerQueueComponent } from './dummy-care-taker-queue/dummy-care-taker-queue.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    HeaderBarComponent,
    DetailPageComponent,
    ProjectPipe,
    DummyTravisWidgetComponent,
    DummyCircleCiWidgetComponent,
    DummyPrsCountWidgetComponent,
    ListItemComponent,
    StatusComponent,
    DummyCareTakerQueueComponent
  ],
  imports: [
    FlexLayoutModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
