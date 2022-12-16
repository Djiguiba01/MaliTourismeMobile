import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    ProfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
