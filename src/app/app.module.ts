import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { HttpClientModule } from '@angular/common/http'; 


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchCarComponent } from './search_car/search_car.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AutocompleteSearchComponent } from './autocomplete_search/autocomplete_search.component';
import { DatePickerComponent } from './date_picker/date_picker.component';
import { CarListComponent } from './car_list_on_home/car_list.component';
import { AboutComponent } from './about/about.component';
import { OurTeamComponent } from './our_team/our_team.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    HomeComponent,
    AppComponent,
    SearchCarComponent,
    AutocompleteSearchComponent,
    DatePickerComponent,
    CarListComponent,
    AboutComponent,
    OurTeamComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
