import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AppRoutingModule } from './app-routing.module';
import { RegionComponent } from './region/region.component';
import { ContactComponent } from './contact/contact.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { AjoutregionComponent } from './ajoutregion/ajoutregion.component';
import { ModregionComponent } from './modregion/modregion.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuComponent } from './menu/menu.component';
import { AjoutAdminComponent } from './ajout-admin/ajout-admin.component';
import { FooterComponent } from './footer/footer.component';
import { DetailregionComponent } from './detailregion/detailregion.component';
import { ProfilComponent } from './profil/profil.component';
import { AjoutPaysComponent } from './ajout-pays/ajout-pays.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    RegionComponent,
    ContactComponent,
    ConnexionComponent,
    InscriptionComponent,
    AjoutregionComponent,
    ModregionComponent,
    DashboardComponent,
    MenuComponent,
    AjoutAdminComponent,
    FooterComponent,
    DetailregionComponent,
    ProfilComponent,
    AjoutPaysComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    // Ng2SearchPipeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
