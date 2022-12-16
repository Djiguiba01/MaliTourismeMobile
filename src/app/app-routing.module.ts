import { AjoutAdminComponent } from './ajout-admin/ajout-admin.component';
import { MenuComponent } from './menu/menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { AjoutregionComponent } from './ajoutregion/ajoutregion.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { ContactComponent } from './contact/contact.component';
import { RegionComponent } from './region/region.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ModregionComponent } from './modregion/modregion.component';

const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'Menu', component: MenuComponent },
  { path: 'Accueil', component: AccueilComponent },
  { path: 'Dashboard', component: DashboardComponent },
  { path: 'Region', component: RegionComponent },
  { path: 'Contact', component: ContactComponent },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'ajout', component: AjoutregionComponent },
  { path: 'misajout', component: ModregionComponent },
  { path: 'ajoutadmin', component: AjoutAdminComponent },

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
