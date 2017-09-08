import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { CardComponent } from './card/card.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogRegComponent } from './log-reg/log-reg.component';
import { ProfileComponent } from './profile/profile.component';
import { TheodexComponent } from './theodex/theodex.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
    {
        path: '',
        component: LogRegComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'theodex',
        component: TheodexComponent
    },
    {
        path: 'user/:id',
        component: UserComponent
    },
    {
        path: 'profile',
        component: ProfileComponent
    },
    {
        path: 'card/:id',
        component: CardComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }