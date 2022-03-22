import { Routes, RouterModule } from '@angular/router';
import { Dashboard } from '@material-ui/icons';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { LauncherComponent } from './launcher/launcher.component';
import { DBoardComponent } from './d-board/d-board.component';
import { DatatableComponent } from './components/datatable/datatable.component';
import { OktaAuthGuard } from './okta-auth/okta-auth-guard';
import { RdOktaCallbackComponent } from './okta-auth/rd-okta-callback/rd-okta-callback.component';
import { CallbackComponent } from './callback/callback.component';

const routes: Routes = [  {
  path: "callback",
  component: CallbackComponent,
  canActivate:[OktaAuthGuard]
},
  {
    path: "login",
    component: LoginComponent,
    canActivate:[OktaAuthGuard]
  },
  {
    path: "home",
    component: HomeComponent,
    children: [{
        path: "explorer",
        loadChildren: () =>
          import("../modules/data-warehouse/onbase-explorer-configs.module").then(
            (m) => m.OnbaseExplorerConfigModule
          ),
      }]
  }
];
export const CoreRoutes = RouterModule.forChild(routes);
