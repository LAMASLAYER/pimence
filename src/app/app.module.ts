import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule, Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RecettesComponent } from './components/recettes/recettes.component';
import {RecettesService} from './services/recettes.service';
import { AdminComponent } from './components/admin/admin.component';
import {FormsModule} from '@angular/forms';
import {AdminService} from './services/admin.service';
import {GlobalService} from './services/global.service';
import { SafePipe } from './pipes/safe.pipe';
import { CommentsService } from './services/comments.service';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'recettes',
    component: RecettesComponent
  },
  {
    path: 'liveEditor',
    component: AdminComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    RecettesComponent,
    AdminComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [
    RecettesService,
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    AdminService,
    GlobalService,
    CommentsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
