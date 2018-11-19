import {Injectable} from '@angular/core';
import {HttpHeaders, HttpClient} from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    apiKey: any = '12af4c42b5ad4538b22293ce032f6e6c';

    private url: any = 'https://westcentralus.api.cognitive.microsoft.com/vision/v2.0/analyze?visualFeatures=Categories&language=en';
    constructor(private http: HttpClient) {
    }
    getPersonalImage(imageUrl: string) {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Ocp-Apim-Subscription-Key': this.apiKey
        });
        return this.http.post(this.url, {url: imageUrl}, {headers: headers}).pipe(map(data => data));
    }
}
