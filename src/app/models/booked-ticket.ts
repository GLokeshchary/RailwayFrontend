import { Passenger } from "./passenger";


export class BookedTicket {
        public bookId?: string;
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
        public transactional_id:number|undefined;
        public account_no:number|undefined;
        public email_address:string|undefined;
        public booking_time:Date|undefined;
        public amount:number|undefined;

}
