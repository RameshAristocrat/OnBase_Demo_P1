import { Routes, RouterModule } from '@angular/router';
import { OktaAuthGuard } from '../../core/okta-auth/okta-auth-guard';
import { OnbaseExplorerCommonSearchComponent } from './explorer/onbase-explorer-common-search/onbase-explorer-common-search.component';
const routes: Routes = [
    {
        path: "search",
        component: OnbaseExplorerCommonSearchComponent
    }];
export const onbaseExplorerRoutes = RouterModule.forChild(routes);

