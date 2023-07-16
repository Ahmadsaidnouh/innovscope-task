import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ScheduleBarComponent } from './schedule-bar/schedule-bar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { SectionTaskCardsComponent } from './section-task-cards/section-task-cards.component';
import { SectionLineChartsComponent } from './section-line-charts/section-line-charts.component';
import { SectionTasksComponent } from './section-tasks/section-tasks.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    ScheduleBarComponent,
    NavbarComponent,
    MainComponent,
    SectionTaskCardsComponent,
    SectionLineChartsComponent,
    SectionTasksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
