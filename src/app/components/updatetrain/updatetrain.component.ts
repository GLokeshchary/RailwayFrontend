import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Train } from 'src/app/models/train';
import { AdminService } from 'src/app/services/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-updatetrain',
  templateUrl: './updatetrain.component.html',
  styleUrls: ['./updatetrain.component.css']
})
export class UpdatetrainComponent implements OnInit {

  train:Train=new Train();
  trainNo:string|undefined;
  DepartFromList=["Hyderabad","Mumbai","Chennai","Banglore"];
  constructor(private route:ActivatedRoute,private adminservice:AdminService,private router:Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params)=>{this.trainNo=params.get('trainNo')!;});
    this.adminservice.getTrainbyTrainNo(this.trainNo!).subscribe(data=>this.train=data,error=>alert(error));

  }
  onSubmit(){
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.adminservice.updateTrain(this.trainNo!,this.train).subscribe(data=>console.log(data),error=>console.log(error));
        Swal.fire('Saved!', '', 'success')
        this.router.navigate(['/admindashboard']);
        
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
    
  }

}
