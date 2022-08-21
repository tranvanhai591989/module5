import {Customer} from './customer';
import {Facility} from './facility';

export interface Contract {
  id?: number;
  customerName?: Customer;
  facilityName?: Facility;
  startDate?: string;
  endDate?: string;
  deposit?: number  ;

}
