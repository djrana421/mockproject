import { Component, OnInit } from '@angular/core';
import { DatamodelserviceService } from '../services/datamodelservice.service';
import { CompileShallowModuleMetadata } from '@angular/compiler';


@Component({
  selector: 'app-mock',
  templateUrl: './mock.component.html',
  styleUrls: ['./mock.component.css']
})
export class MockComponent implements OnInit {
public result;
name:string;
rating:number;
P_Img:string;
desc:string;
like:string;
dislike:string;
newRating:number;
  constructor(private Dataservice:DatamodelserviceService) { }

  ngOnInit() {

this.Dataservice.getData().subscribe((data) => {
this.result=data['People'];
this.name=this.result[0].name;
this.rating=this.result[0].rating;
      this.P_Img=this.result[0].img;
      this.desc=this.result[0].Description;
      this.like=this.result[0].Likes;
      this.dislike=this.result[0].Dislikes;
console.log(this.result);

this.newRating=[];
for (var i=0; i<this.rating;i++)
{
  this.newRating.push(i.toString()); 

}
this.rating = this.newRating;
})

  }
showdata(img, desc)
{
  this.P_Img=img;
  this.desc=desc;
  console.log(img,desc);
  }
  

}
