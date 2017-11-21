import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ModalModule } from './modal/modal.module';
import { PageComponent } from './page/page.component';


const appRoutes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [

      {path: 'page-2', component: PageComponent},

          ]
  },
  ]
@NgModule({
  declarations: [
    AppComponent,
    PageComponent
  ],
  imports: [
    BrowserModule,
    ModalModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
