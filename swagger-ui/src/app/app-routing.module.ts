import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InternalUserComponent } from './internal-user/internal-user.component';
import { ExternalUserComponent } from './external-user/external-user.component';


const routes: Routes = [
  {path : '', component : InternalUserComponent},
  {path : 'internal', component : InternalUserComponent},
  {path : 'external', component : ExternalUserComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
