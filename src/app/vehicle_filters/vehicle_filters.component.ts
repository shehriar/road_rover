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

  ngOnInit(){
    this.fetchAllVehicleTypes();
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
}
