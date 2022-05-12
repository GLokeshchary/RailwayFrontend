import { Passenger } from "./passenger";
import { Seat } from "./seat";

export class Ticket {
    public ticketId:string|undefined;
        public pnr:number|undefined;
        public trainNo:string|undefined;
        public trainName:string|undefined;
        public start:string|undefined;
        public destination:string|undefined;
        public departure_time:string|undefined;
        public arrival_time:string|undefined;
        public passengers: Passenger[] | undefined;
        public  quota:string|undefined;
        public status:string|undefined;
        public  transactional_id:number|undefined;
    
}
