import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RippleModule } from 'primeng/ripple';
import { TabViewModule } from 'primeng/tabview';
import { InputNumberModule } from 'primeng/inputnumber';
import { TableModule } from 'primeng/table';
import { NgxEchartsModule } from 'ngx-echarts';
import { AnalyseComponent } from './analyse/analyse.component';

import { KatexModule } from 'ng-katex';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { AnalysePieComponent } from './analyse-pie/analyse-pie.component';
import { FormulaComponent } from './formula/formula.component';
import { AnalyseAllComponent } from './analyse-all/analyse-all.component';
import { AccordionModule } from 'primeng/accordion';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  declarations: [
    AppComponent,
    AnalyseComponent,
    AnalysePieComponent,
    FormulaComponent,
    AnalyseAllComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    InputTextModule,
    CheckboxModule,
    ButtonModule,
    RadioButtonModule,
    RippleModule,
    FormsModule,
    ReactiveFormsModule,
    InputNumberModule,
    TableModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
    KatexModule,
    InputTextareaModule,
    AccordionModule,
    RouterModule.forRoot(routes,{
      scrollPositionRestoration: 'enabled'
    })
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }