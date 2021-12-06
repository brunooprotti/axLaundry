import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { INTERNAL_PATHS } from './data/routes/internal.routes';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';

const routes: Routes = [
    {
      path: INTERNAL_PATHS.AUTH_DEFAULT,
      loadChildren: () => import('./modules/auth/auth.module').then((m)=>m.AuthModule)
    },
    {
      path: '',
      component:SkeletonComponent,
      canActivate:[AuthGuard],
      children:[
        {
          path:INTERNAL_PATHS.ABM_DEFAULT,
          loadChildren: () => import('./modules/abm/abm.module').then((m)=>m.AbmModule)
        },
        {
          path:INTERNAL_PATHS.HOME,
          loadChildren: () => import('./modules/pages/pages.module').then((m)=>m.PagesModule)
        },
        {
          path:INTERNAL_PATHS.REPORTES,
          loadChildren: () => import('./modules/reportes/reportes.module').then((m)=>m.ReportesModule)
        },
      ]
    },
    
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
