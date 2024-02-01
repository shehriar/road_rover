import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private pickupLocation: string = '';
  private dropoffLocation: string = '';

  private pickupCity: string = '';
  private pickupState: string = '';

  private dropoffCity: string = '';
  private dropoffState: string = '';

  setPickupLocation(location: string) {
    this.pickupLocation = location;
  }

  setDropoffLocation(location: string) {
    this.dropoffLocation = location;
  }

  getPickupLocation(): string {
    return this.pickupLocation;
  }

  getDropoffLocation(): string {
    return this.dropoffLocation;
  }

  getPickupCity(): string{
    this.pickupCity = this.pickupLocation.split(',')[0];
    return this.pickupCity;
  }

  getPickupState(): string{
    this.pickupState = this.pickupLocation.split(', ')[1];
    return this.pickupState;
  }

  getDropoffCity(): string{
    this.dropoffCity = this.dropoffLocation.split(',')[0];
    return this.dropoffCity;
  }

  getDropoffState(): string{
    this.dropoffCity = this.dropoffLocation.split(', ')[1];
    return this.dropoffState;
  }

}
