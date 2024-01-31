import { Component, Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { ApiService } from 'src/app/api.service';


@Component({
  selector: 'app-autocomplete-search',
  templateUrl: './autocomplete_search.component.html',
  styleUrls: ['./autocomplete_search.component.css']
})
export class AutocompleteSearchComponent implements OnInit{
  title = 'Autocomplete Search';
  pickupLocationForm!: FormGroup;
  pickupLocation!: FormControl;
  filteredOptions!: Observable<string[]>;
  @Input() label:string = '';
  allLocations!: string[];

  constructor(private apiService: ApiService){};

  ngOnInit() {
    this.pickupLocation = new FormControl();
    this.pickupLocationForm = new FormGroup({
      pickupLocation: this.pickupLocation
    });

    this.filteredOptions = this.pickupLocation.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );

    this.apiService.getLocations().subscribe({
      next: (response) => {
        this.allLocations = response.locations.map((loc: any) => `${loc.locationcity}, ${loc.locationcountry}`);
        this.filteredOptions = this.pickupLocation.valueChanges.pipe(
          startWith(''),
          map(value => this._filter(value))
        );
      },
      error: (err) => {
        console.error('Error fetching locations:', err);
      }
    }); 
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.allLocations.filter(option => option.toLowerCase().includes(filterValue));
  }
}
