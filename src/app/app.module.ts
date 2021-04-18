import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistryComponent } from './registry/registry.component';
import { WeddingPartyComponent } from './wedding-party/wedding-party.component';
import { DetailsComponent } from './details/details.component';
import { RsvpComponent } from './rsvp/rsvp.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { WeddingPartyMemberPipe } from './shared/pipes/wedding-party-member.filter';

@NgModule({
  declarations: [
    AppComponent,
    RegistryComponent,
    WeddingPartyComponent,
    DetailsComponent,
    RsvpComponent,
    NavbarComponent,
    HomeComponent,
    WeddingPartyMemberPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
