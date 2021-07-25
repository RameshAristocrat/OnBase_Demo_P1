import { Routes, RouterModule } from '@angular/router';
import { Dashboard } from '@material-ui/icons';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { LauncherComponent } from './launcher/launcher.component';
import { DBoardComponent } from './d-board/d-board.component';
import { DatatableComponent } from './components/datatable/datatable.component';

const routes: Routes = [
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
