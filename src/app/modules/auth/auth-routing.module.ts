import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoAuthGuard } from '../../core/guards/no-auth.guard';
import { INTERNAL_PATHS } from '../../data/routes/internal.routes';
import { LoginComponent } from './login/login.component';
import { RecuperarComponent } from './recuperar/recuperar.component';

const routes: Routes = [
  {
    path:INTERNAL_PATHS.AUTH_LOGIN,
    component:LoginComponent,
    canActivate:[NoAuthGuard]
  },
  {
    path:INTERNAL_PATHS.AUTH_PASSWORD,
    component:RecuperarComponent,
    canActivate:[NoAuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
