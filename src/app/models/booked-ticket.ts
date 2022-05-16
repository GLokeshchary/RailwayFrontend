import { Passenger } from "./passenger";


export class BookedTicket {
        public bookId?: string;
        public pnr:number|undefined;
        public train_no:string|undefined;
        public train_name:string|undefined;
        public start:string|undefined;
        public destination:string|undefined;
        public class_name:string|undefined;
        public departure_time:string|undefined;
        public arrival_time:string|undefined;
        public passengers: Passenger[] | undefined;
        public  quota:string|undefined;
        public status:string|undefined;
        public transactional_id:string|undefined;
        public account_no:number|undefined;
        public email:string|undefined;
        public booking_time:Date|undefined;
        public amount:number|undefined;

}
