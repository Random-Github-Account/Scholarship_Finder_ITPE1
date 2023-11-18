import { LayoutModule } from './layout/layout.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "layout",
    loadChildren: () => import('./layout/layout.module').then(mod => mod.LayoutModule)
  },
  {
    path: "",
    loadChildren: () => import('./login/login.module').then(mod => mod.LoginModule)
  },
  {
    path: "registration",
    loadChildren: () => import('./registration/registration.module').then(mod => mod.RegistrationModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
