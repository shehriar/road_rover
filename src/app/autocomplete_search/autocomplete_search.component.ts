import { Component, Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';


@Component({
  selector: 'app-autocomplete-search',
  templateUrl: './autocomplete_search.component.html',
  styleUrls: ['./autocomplete_search.component.css']
})
export class AutocompleteSearchComponent implements OnInit{
  title = 'Autocomplete Search';
  pickupLocationForm!: FormGroup;
  pickupLocation!: FormControl;
  allLocations: string[] = ['New York', 'Los Angeles', 'Chicago', 'Houston']; // Add more locations
  filteredOptions!: Observable<string[]>;
  @Input() label:string = '';

  ngOnInit() {
    this.pickupLocation = new FormControl();
    this.pickupLocationForm = new FormGroup({
      pickupLocation: this.pickupLocation
    });

    this.filteredOptions = this.pickupLocation.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.allLocations.filter(option => option.toLowerCase().includes(filterValue));
  }
}
