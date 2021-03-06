import { Employee } from './Employee';

export class Car {
    car_id : number;
    colour : string;
    make : string;
    model : string;
    available_seats : number;
    car_year : number; 
    employee : Employee;

    constructor(car_id : number, colour : string, make : string, model : string, 
                available_seats : number, car_year : number, employee : Employee) {
                    this.car_id = car_id;
                    this.colour = colour;
                    this.make = make;
                    this.model = model;
                    this.available_seats = available_seats;
                    this.car_year = car_year;
                    this.employee = employee;
                }
}