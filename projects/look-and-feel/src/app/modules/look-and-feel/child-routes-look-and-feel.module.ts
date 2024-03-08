import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SystemDesignComponent } from './system-design/system-design.component';

const childRoutes: Routes = [
  {
    path: 'system-design',
    component: SystemDesignComponent,
  },
  { path: '', redirectTo: '/main/look-and-feel/system-design', pathMatch: 'full' }
]



@NgModule({
  imports: [RouterModule.forChild(childRoutes)],
  exports: [RouterModule]
})
export class ChildRoutesLookAndFeelModule { }
