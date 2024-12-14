import { Injectable } from '@angular/core';
import { SERVICES } from '../data/services.data';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {  
    private services = SERVICES;  
  
    constructor() {}
  
    getAllServices() {
      return this.services;
    }
  
    getServiceById(id: number) {
      return this.services.find(service => service.id === id);
    }
  
    getServicesByTitle(title: string) {
      return this.services.filter(service =>
        service.title.toLowerCase().includes(title.toLowerCase())
      );
    }
  }
