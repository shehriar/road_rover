import { Component, ViewChild } from '@angular/core';
import { Vehicle } from '../vehicle.interface';
import { VehicleSelectionService } from '../vehicle_select.service';

@Component({
  selector: 'app-selected-car',
  templateUrl: './selected_car.component.html',
  styleUrls: ['./selected_car.component.css']
})
export class SelectedCarComponent{
    title = 'Selected Car';
    selectedCar! : Vehicle;
    constructor(private selectedVehicle : VehicleSelectionService) {}

    ngOnInit(){
      this.selectedVehicle.selectedVehicle.subscribe(vehicle => {
        if (vehicle) {
          this.selectedCar = vehicle;
        }
      });
    }

    setVehicle(vehicle : Vehicle){
        this.selectedCar = vehicle;
    }
}