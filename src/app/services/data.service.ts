import {Injectable} from '@angular/core';
import {HttpHeaders, HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiKey: any = '12af4c42b5ad4538b22293ce032f6e6c';

  private url: any = 'https://westcentralus.api.cognitive.microsoft.com/vision/v2.0/analyze?visualFeatures=Description,Tags&language=en';

  constructor(private http: HttpClient) {
  }

  getPersonalImage(imageUrl: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Ocp-Apim-Subscription-Key': this.apiKey
    });
    return this.http.post(this.url, {url: imageUrl}, {
      headers: headers,
      params: {'visualFeatures': 'Categories, Description, Color', 'details': '', 'language': 'en'}
    })
      .pipe(map(data => data));
  }
}

