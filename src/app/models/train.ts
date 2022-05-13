import { Time } from "@angular/common";
import { Seat } from "./seat";

export class Train {
    id:string | undefined;
   trainNo:string | undefined;
   trainName:string|undefined;
   depatureStation:string | undefined;
   arrivalStation:string|undefined;
   depatureTime:Time|undefined;
   arrivalTime:Time|undefined;
   run_days:string[]|undefined;
   classes:Map<String,Seat>|undefined;
   quota:string|undefined;
}
