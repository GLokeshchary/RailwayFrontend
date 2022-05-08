import { Passenger } from "./passenger";
import { Seat } from "./seat";

export class Ticket {
    ticketId:string | undefined;
    pnr?:number;
    trainNo:string | undefined;
    trainName:string|undefined;
    start:string | undefined;
    destination:string|undefined;
    departure_time:string|undefined;
    arrival_time:string|undefined;
    passengers:Passenger[]|undefined;
    quota:string|undefined;
    status:string|undefined;
    transactional_id:number|undefined;
}
