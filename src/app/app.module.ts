import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LogRegComponent } from './log-reg/log-reg.component';
import { TheodexComponent } from './theodex/theodex.component';
import { UserComponent } from './user/user.component';
import { CardComponent } from './card/card.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';

import { UserService } from './services/user.service';
import { CardService } from './services/card.service';

import { SearchPipe } from './search.pipe';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LogRegComponent,
    TheodexComponent,
    UserComponent,
    CardComponent,
    DashboardComponent,
    AboutComponent, 
    SearchPipe, ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
  ],
  providers: [UserService, CardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
