import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../../core/home/home.component';
import { RDAPExtraPINRequestComponent } from './rdap-extra-pin-request.component';

const routes: Routes = [
    {
        path: "pinrequest",
        component: RDAPExtraPINRequestComponent,
    }];
export const ExtraPinRequestRoutes = RouterModule.forChild(routes);