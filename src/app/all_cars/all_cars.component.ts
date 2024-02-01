import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { LocationService } from '../location.service';


@Component({
  selector: 'app-all-cars',
  templateUrl: './all_cars.component.html',
  styleUrls: ['./all_cars.component.css']
})

export class AllCarsComponent implements OnInit{
    title = 'Autocomplete Search';
    constructor(private apiService: ApiService, private locationService: LocationService){};

    allCarModels!: string[];
    pickupCity!: string;
    dropoffCity!: string;

    ngOnInit() {
        this.apiService.getAllCarModels().subscribe({
            next: (response) => {
              this.allCarModels = response.vehicle_models.map((cars: any) => `${cars.vehiclemodel}`);
            },
            error: (err) => {
                console.error('Error fetching locations:', err);
            }
        })
        this.pickupCity = this.locationService.getPickupLocation();
        this.dropoffCity = this.locationService.getDropoffLocation();
    }
}