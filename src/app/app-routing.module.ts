import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: AppComponent }, // Route with dynamic id
]
@NgModule({
  imports: [RouterModule.forRoot(routes,{
      anchorScrolling: 'enabled', 
      scrollPositionRestoration: 'enabled' 
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
