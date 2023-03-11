import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  constructor(private http: HttpClient) {}

  url = '/api/groups';

  getGroups() {
    return this.http.get(this.url);
  }
}
