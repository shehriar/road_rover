import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Vehicle } from 'src/app/vehicle.interface';

@Injectable({
  providedIn: 'root'
})
export class VehicleSelectionService {
  private selectedVehicleSubject = new BehaviorSubject<Vehicle | null>(null);
  public selectedVehicle = this.selectedVehicleSubject.asObservable();

  setSelectedVehicle(vehicle: Vehicle) {
    this.selectedVehicleSubject.next(vehicle);
  }
}