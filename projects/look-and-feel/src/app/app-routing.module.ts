import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LookAndFeelComponent } from './modules/look-and-feel/look-and-feel.component';

const routes: Routes = [
  { path: '', component: LookAndFeelComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
