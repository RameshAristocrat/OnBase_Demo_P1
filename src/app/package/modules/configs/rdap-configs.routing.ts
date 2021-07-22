import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../../core/home/home.component';
import { RdapConfigStudioSearchComponent } from '../configs/setup-tables/rdap-config-studio-search/rdap-config-studio-search.component';
import { SetupTableHomeComponent } from '../configs/setup-tables/setup-table-home/setup-table-home.component';
import { RdapConfigCommonAddEditComponent } from './setup-tables/rdap-config-common-add-edit/rdap-config-common-add-edit.component';
import { RdapConfigCommonSearchComponent } from './setup-tables/rdap-config-common-search/rdap-config-common-search.component';
import { RdapConfigMarketSearchComponent } from './setup-tables/rdap-config-market-search/rdap-config-market-search.component';

const routes: Routes = [
    {
        path: "setuptable",
        component: SetupTableHomeComponent,
        children: [
            {
                path: "studio",
                //component: RdapConfigCommonSearchComponent,
                children:[{
                    path: "search",
                component: RdapConfigCommonSearchComponent,
                },{
                    path: "add",
                component: RdapConfigCommonAddEditComponent,
                }]
            }, {
                path: "versionsearch",
                component: RdapConfigCommonSearchComponent,
            }, {
                path: "eppsearch",
                component: RdapConfigCommonSearchComponent,
            }, {
                path: "poolsearch",
                component: RdapConfigCommonSearchComponent,
            }, {
                path: "regionsearch",
                component: RdapConfigCommonSearchComponent,
            }, {
                path: "prodcat1search",
                component: RdapConfigCommonSearchComponent,
            }, {
                path: "prodcat2search",
                component: RdapConfigCommonSearchComponent,
            }, {
                path: "prodcat3search",
                component: RdapConfigCommonSearchComponent,
            }, {
                path: "channeltype",
                //component: RdapConfigCommonSearchComponent,
                children:[{
                    path: "search",
                component: RdapConfigCommonSearchComponent,
                },{
                    path: "add",
                component: RdapConfigCommonAddEditComponent,
                },{
                    path: "edit",
                component: RdapConfigCommonAddEditComponent,
                }]
            }, {
                path: "cabinets",
                //component: RdapConfigCommonSearchComponent,
                children:[{
                    path: "search",
                component: RdapConfigCommonSearchComponent,
                },{
                    path: "add",
                component: RdapConfigCommonAddEditComponent,
                },{
                    path: "edit",
                component: RdapConfigCommonAddEditComponent,
                }]
            }, {
                path: "channel",
                //component: RdapConfigCommonSearchComponent,
                children:[{
                    path: "search",
                component: RdapConfigCommonSearchComponent,
                },{
                    path: "add",
                component: RdapConfigCommonAddEditComponent,
                },{
                    path: "edit",
                component: RdapConfigCommonAddEditComponent,
                }]
            }, {
                path: "devefforttype",
                //component: RdapConfigCommonSearchComponent,
                children:[{
                    path: "search",
                component: RdapConfigCommonSearchComponent,
                },{
                    path: "add",
                component: RdapConfigCommonAddEditComponent,
                },{
                    path: "edit",
                component: RdapConfigCommonAddEditComponent,
                }]
            }, {
                path: "devcomplexity",
                //component: RdapConfigCommonSearchComponent,
                children:[{
                    path: "search",
                component: RdapConfigCommonSearchComponent,
                },{
                    path: "add",
                component: RdapConfigCommonAddEditComponent,
                },{
                    path: "edit",
                component: RdapConfigCommonAddEditComponent,
                }]
            }, {
                path: "gravity",
                //component: RdapConfigCommonSearchComponent,
                children:[{
                    path: "search",
                component: RdapConfigCommonSearchComponent,
                },{
                    path: "add",
                component: RdapConfigCommonAddEditComponent,
                },{
                    path: "edit",
                component: RdapConfigCommonAddEditComponent,
                }]
            }, {
                path: "devtype1",
                //component: RdapConfigCommonSearchComponent,
                children:[{
                    path: "search",
                component: RdapConfigCommonSearchComponent,
                },{
                    path: "add",
                component: RdapConfigCommonAddEditComponent,
                },{
                    path: "edit",
                component: RdapConfigCommonAddEditComponent,
                }]
            }, {
                path: "devtype2",
                //component: RdapConfigCommonSearchComponent,
                children:[{
                    path: "search",
                component: RdapConfigCommonSearchComponent,
                },{
                    path: "add",
                component: RdapConfigCommonAddEditComponent,
                },{
                    path: "edit",
                component: RdapConfigCommonAddEditComponent,
                }]
            }, {
                path: "market",
                //component: RdapConfigCommonSearchComponent,
                children:[{
                    path: "search",
                component: RdapConfigCommonSearchComponent,
                },{
                    path: "add",
                component: RdapConfigCommonAddEditComponent,
                },{
                    path: "edit",
                component: RdapConfigCommonAddEditComponent,
                }]
            }, {
                path: "quarter",
                //component: RdapConfigCommonSearchComponent,
                children:[{
                    path: "search",
                component: RdapConfigCommonSearchComponent,
                },{
                    path: "add",
                component: RdapConfigCommonAddEditComponent,
                },{
                    path: "edit",
                component: RdapConfigCommonAddEditComponent,
                }]
            }
        ]
    }];
export const configRoutes = RouterModule.forChild(routes);

