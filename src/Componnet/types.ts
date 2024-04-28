export interface Service {
    name: string;
    imageUrl: string;
    description: string;
    facilities: Facility[];
  }
  
  export interface Facility {
    name: string;
    services: ServiceItem[];
  }
  
  export interface ServiceItem {
    name: string;
    price: number;
    imageUrl?: string;
  }
  