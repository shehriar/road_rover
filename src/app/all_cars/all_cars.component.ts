import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { LocationService } from '../location.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-all-cars',
  templateUrl: './all_cars.component.html',
  styleUrls: ['./all_cars.component.css']
})

export class AllCarsComponent implements OnInit{
    title = 'Autocomplete Search';
    constructor(private apiService: ApiService, private locationService: LocationService){};

    allCarModels!: string[];
    allVehiclesFromPickupCity: any;
    pickupCity!: string;
    dropoffCity!: string;

    ngOnInit() {
        // this.apiService.getAllCarModels().subscribe({
        //     next: (response) => {
        //       this.allCarModels = response.vehicle_models.map((cars: any) => `${cars.vehiclemodel}`);
        //     },
        //     error: (err) => {
        //         console.error('Error fetching locations:', err);
        //     }
        // })
        this.pickupCity = this.locationService.getPickupCity();
        this.dropoffCity = this.locationService.getDropoffCity();
        this.fetchAllVehicleDataFromPickupLocation();
    }

    fetchAllVehicleDataFromPickupLocation(){
      console.log(this.pickupCity);
      this.apiService.getVehicleDataFromPickupLocation(this.pickupCity).subscribe({
        next: (response) => {
          console.log('Received data:', Object.values(response)[0]);
          this.allVehiclesFromPickupCity = Object.values(response)[0];
        },
        error: err => {
          console.error('Error getting vehicle data from pickup location:', err);
        }
      })
    }
}