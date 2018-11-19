import { Component, OnInit } from '@angular/core';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-add-picture',
  templateUrl: './add-picture.component.html',
  styleUrls: ['./add-picture.component.css']
})
export class AddPictureComponent implements OnInit {

  imageUrl: string;
  imageData: any;

  constructor(private data: DataService) {
    this.imageUrl = '';
  }

  ngOnInit() {
  }

  getPicture(imageUrl: string) {
    this.data.getPersonalImage(imageUrl).subscribe(res => {
      this.imageData = res;
      console.log(res);
    });
  }
}
