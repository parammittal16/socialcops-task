import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetFileService {

  constructor(private http: HttpClient) { }
  getfile() {
    return this.http.get('../assets/sachin.csv', {responseType: 'blob'});
  }
}
