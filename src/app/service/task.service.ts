import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class TaskService {
    constructor(private http: HttpClient) {}

    url = '/api/tasks';

    getTasks() {
        return this.http.get(this.url);
    }

    getTasksByGroupId(groupId: number) {
        return this.http.get(this.url + `?group_id=${groupId}`);
    }
}
