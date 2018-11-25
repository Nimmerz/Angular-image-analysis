import {Component, OnInit} from '@angular/core';
import {DataService} from '../services/data.service';
import {SafeUrl} from '@angular/platform-browser';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-add-picture',
  templateUrl: './add-picture.component.html',
  styleUrls: ['./add-picture.component.css']
})
export class AddPictureComponent implements OnInit {

  imageUrl: string;
  imageData: any;
  current_url: SafeUrl;

  constructor(private data: DataService,
              private sanitizer: DomSanitizer) {
    this.imageUrl = '';
  }

  ngOnInit() {
  }

  getPicture(imageUrl: string) {
    this.current_url = this.sanitizer.bypassSecurityTrustResourceUrl(imageUrl);
    this.data.getPersonalImage(imageUrl).subscribe(res => {
      this.imageData = res;
      console.log(res);
    });
  }
}
