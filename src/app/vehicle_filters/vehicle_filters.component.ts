import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-vehicle-filters',
  templateUrl: './vehicle_filters.component.html',
  styleUrls: ['./vehicle_filters.component.css']
})
export class VehicleFiltersComponent implements OnInit{
  title = 'Vehicle Filters';
  constructor(private apiService: ApiService){};

  vehicleTypes : any;
  @Output() vehicleTypeSelected: EventEmitter<string> = new EventEmitter();

  fuelTypes : any;
  @Output() fuelTypeSelected: EventEmitter<string> = new EventEmitter();

  vehicleMakes : any;
  selectedMakes : string[] = [];
  @Output() vehicleMakesSelected: EventEmitter<string[]> = new EventEmitter();

  showDropdown = false;

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
    console.log('Dropdown state:', this.showDropdown);
  }

  ngOnInit(){
    this.fetchAllVehicleTypes();
    this.fetchAllVehicleMakes();
    this.fetchAllFuelTypes();
  }

  onVehicleTypeChange(event : Event): void {
    const target = event.target as HTMLInputElement;
    const selectedType = target.value;
    this.vehicleTypeSelected.emit(selectedType);
  }

  fetchAllVehicleTypes(){
    this.apiService.getVehicleTypes().subscribe({
      next: (response) => {
        this.vehicleTypes = Object.values(response)[0];
        console.log('Received data:', this.vehicleTypes);
      },
      error: (err) => {
        console.error('Error fetching locations:', err);
      }
    })
  }

  onFuelTypeChange(event : Event): void {
    const target = event.target as HTMLInputElement;
    const selectedFuelType = target.value;
    this.fuelTypeSelected.emit(selectedFuelType);
  }

  fetchAllFuelTypes(){
    this.apiService.getFuelTypes().subscribe({
      next: (response) => {
        this.fuelTypes = Object.values(response)[0];
        console.log('Received data:', this.fuelTypes);
      },
      error: (err) => {
        console.error('Error fetching locations:', err);
      }
    })
  }


  onVehicleMakesChange(event : Event, make : string): void {
    const checkbox = event.target as HTMLInputElement;
    if (checkbox.checked) {
        if (!this.selectedMakes.includes(make)) {
        this.selectedMakes.push(make);
        }
    } else {
        this.selectedMakes = this.selectedMakes.filter(m => m !== make);
    }
    this.vehicleMakesSelected.emit(this.selectedMakes);
  }

  fetchAllVehicleMakes(){
    this.apiService.getVehicleMakes().subscribe({
      next: (response) => {
        this.vehicleMakes = Object.values(response)[0];
        console.log('Received data:', this.vehicleMakes);
      },
      error: (err) => {
        console.error('Error fetching locations:', err);
      }
    })
  }

}
