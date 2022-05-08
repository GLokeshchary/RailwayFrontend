import { Ticket } from "./ticket";

export class BookedTicket {
    private bookId?: string | undefined;
    private _ticket?: Ticket | undefined;
    transactional_id?:number;
    account_no?:number;
    email_address?:string;
    status?:string;
    booking_time?:Date;
    amount?:number;


    public get ticket(): Ticket | undefined {
        return this._ticket;
    }
    public set ticket(value: Ticket | undefined) {
        this._ticket = value;
    }

}
