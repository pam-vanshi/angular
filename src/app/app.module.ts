import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ModalModule } from './modal/modal.module';
import { PageComponent } from './page/page.component';
import { FormsModule } from '@angular/forms'


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
    ModalModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
