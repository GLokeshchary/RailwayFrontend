import { Seat } from "./seat";

export class Train {
    id:string | undefined;
   trainNo:string | undefined;
   trainName:string|undefined;
   depatureStation:string | undefined;
   arrivalStation:string|undefined;
   depatureTime:string|undefined;
   arrivalTime:string|undefined;
   run_days:string[]|undefined;
   classes:Map<String,Seat>|undefined;
   quota:string|undefined;
}
