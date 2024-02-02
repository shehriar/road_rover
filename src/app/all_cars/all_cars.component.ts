import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { LocationService } from '../location.service';
import { Vehicle } from 'src/app/vehicle.interface';
import { VehicleFiltersComponent } from '../vehicle_filters/vehicle_filters.component';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-all-cars',
  templateUrl: './all_cars.component.html',
  styleUrls: ['./all_cars.component.css']
})

export class AllCarsComponent implements OnInit{
    title = 'Autocomplete Search';
    constructor(private apiService: ApiService, private locationService: LocationService){};

    allVehicleModels!: Vehicle[];
    allVehiclesFromPickupCity!: Vehicle[];
    filteredVehicles!: Vehicle[];
    pickupCity!: string;
    dropoffCity!: string;

    currentTypeFilter: string = '';
    currentMakeFilter: string[] = [];

    ngOnInit() {
        this.pickupCity = this.locationService.getPickupCity();
        this.dropoffCity = this.locationService.getDropoffCity();
        this.fetchAllVehicles();
        this.fetchAllVehicleDataFromPickupLocation();
    }

    filterVehiclesByType(selectedType: string): void {
      this.currentTypeFilter = selectedType;
      this.applyFilters();
    }

    filterVehiclesByMake(selectedMakes: string[]): void{
      console.log('Selected makes:', selectedMakes);
      this.currentMakeFilter = selectedMakes;
      this.applyFilters();
    }

    fetchAllVehicleDataFromPickupLocation(){
      console.log(this.pickupCity);
      this.apiService.getVehicleDataFromPickupLocation(this.pickupCity).subscribe({
        next: (response) => {
          // console.log('Received data:', Object.values(response)[0]);
          this.allVehiclesFromPickupCity = Object.values(response)[0] as Vehicle[];
        },
        error: err => {
          console.error('Error getting vehicle data from pickup location:', err);
        }
      })
    }

    fetchAllVehicles(){
      this.apiService.getAllCarModels().subscribe({
        next: (response) => {
          // console.log('Received data:', Object.values(response)[0]);
          this.allVehicleModels = Object.values(response)[0] as Vehicle[];
          this.filteredVehicles = this.allVehicleModels;
          // this.allCarModels = response.vehicle_models.map((cars: any) => `${cars.vehiclemodel}`);
        },
        error: (err) => {
          console.error('Error fetching locations:', err);
        }
      })
    }

    applyFilters(): void {
      this.filteredVehicles = this.allVehicleModels;

      // Apply type filter if a type is selected
      if (this.currentTypeFilter) {
        this.filteredVehicles = this.filteredVehicles.filter(vehicle => vehicle.vehicletype === this.currentTypeFilter);
      }

      // Apply make filter if any makes are selected
      if (this.currentMakeFilter.length > 0) {
        this.filteredVehicles = this.filteredVehicles.filter(vehicle => this.currentMakeFilter.includes(vehicle.vehiclemake));
      }
    }
}