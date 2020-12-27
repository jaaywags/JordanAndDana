import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { BridalPartyComponent } from './bridal-party/bridal-party.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { RegistryComponent } from './registry/registry.component';
import { RsvpComponent } from './rsvp/rsvp.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'About', component: AboutComponent },
  { path: 'BridalParty', component: BridalPartyComponent },
  { path: 'Details', component: DetailsComponent },
  { path: 'Registry', component: RegistryComponent },
  { path: 'Rsvp', component: RsvpComponent },
  { path: '**',   redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
