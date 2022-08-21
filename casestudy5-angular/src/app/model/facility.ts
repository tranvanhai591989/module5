import {FacilityType} from './facilityType';
import {FacilityRentalType} from './facilityRentalType';

export interface Facility {
  id?: number;
  name?: string;
  facilityType?: FacilityType;
  area?: number;
  rentalCost?: number;
  maxPeople?: number;
  rentalType?: FacilityRentalType;
  image?: string;
  roomStandard?: string;
  poolArea?: number;
  numberOfFloors?: number;
  description?: string;
  freeService?: string;
}
