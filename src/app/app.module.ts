import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componenets/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { WidgetComponent } from './componenets/widget/widget.component';
import { Row1Component } from './pages/home/row1/row1.component';
import { TopMenuComponent } from './componenets/top-menu/top-menu.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { Row2Component } from './pages/home/row2/row2.component';
import { Chart1Component } from './pages/home/row2/chart1/chart1.component';
import { Chart2Component } from './pages/home/row2/chart2/chart2.component';
import { Chart3Component } from './pages/home/row2/chart3/chart3.component';
import { Chart4Component } from './pages/home/row2/chart4/chart4.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    WidgetComponent,
    Row1Component,
    TopMenuComponent,
    Row2Component,
    Chart1Component,
    Chart2Component,
    Chart3Component,
    Chart4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgApexchartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
