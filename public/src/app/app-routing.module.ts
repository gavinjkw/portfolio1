import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [

  { path: '', component: IntroComponent, data: {animation: 'HomePage'} },
  { path: 'about', component: AboutComponent, data: {animation: 'AboutPage'} },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'contact', component: ContactComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
