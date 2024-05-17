export interface Service {
    name: string;
    imageUrl: string;
    description: string;
    facilities: Facility[];
    key: number
  }
  
  export interface Facility {
    name: string;
    services: ServiceItem[];
    includes?: string[];
  }
  
  export interface ServiceItem {
    name: string;
    price: number;
    imageUrl?: string;
    works?: any[];
    brands?: any[];
    includes?: string[];

  }
  