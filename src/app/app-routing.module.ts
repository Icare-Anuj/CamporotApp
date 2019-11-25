import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListComponent } from './components/list/list.component';
import { LoginComponent } from './components/login/login.component';
import { UploadComponent } from './components/upload/upload.component';


const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'list', component:ListComponent},
  {path:'upload', component:UploadComponent},
  {path:'login', component:LoginComponent},
  {path:'', component:HomeComponent},
  {path:'**', component:HomeComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
