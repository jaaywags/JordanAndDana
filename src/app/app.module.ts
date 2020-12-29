import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistryComponent } from './registry/registry.component';
import { WeddingPartyComponent } from './wedding-party/wedding-party.component';
import { DetailsComponent } from './details/details.component';
import { AboutComponent } from './about/about.component';
import { RsvpComponent } from './rsvp/rsvp.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { BridesmaidsPipe } from './shared/pipes/bridesmaids-filter';
import { GroomsmenPipe } from './shared/pipes/groomsmen-filter';

@NgModule({
  declarations: [
    AppComponent,
    RegistryComponent,
    WeddingPartyComponent,
    DetailsComponent,
    AboutComponent,
    RsvpComponent,
    NavbarComponent,
    HomeComponent,
    BridesmaidsPipe,
    GroomsmenPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
