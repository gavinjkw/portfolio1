import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpService } from './http.service';
import { IntroComponent } from './intro/intro.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    AboutComponent,
    PortfolioComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,  
    BrowserAnimationsModule, 
    RouterModule.forRoot([

      { path: 'home', component: IntroComponent, data: {animation: 'HomePage'} },
      { path: 'about', component: AboutComponent, data: {animation: 'AboutPage'} },
      { path: 'portfolio', component: PortfolioComponent, data: {animation: 'PortfolioPage'} },
      { path: 'contact', component: ContactComponent, data: {animation: 'ContactPage'} },

    ])

  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
