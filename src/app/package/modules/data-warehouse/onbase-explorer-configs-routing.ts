import { Routes, RouterModule } from '@angular/router';
import { OnbaseExplorerCommonSearchComponent } from './explorer/onbase-explorer-common-search/onbase-explorer-common-search.component';
const routes: Routes = [
    {
        path: "search",
        component: OnbaseExplorerCommonSearchComponent
    }];
export const onbaseExplorerRoutes = RouterModule.forChild(routes);

