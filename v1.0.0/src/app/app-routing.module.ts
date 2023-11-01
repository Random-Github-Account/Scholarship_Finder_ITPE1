import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {
    path:'',
    loadChildren: ()=>import('./layout/layout.module')
                      .then(mod => mod.LayoutModule)
  },
  {
    component:AdminComponent,
    path:'Admin',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
