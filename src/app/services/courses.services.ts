import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map, shareReplay, tap } from "rxjs/operators";
import { Course } from "../model/course";

@Injectable({
    providedIn: 'root'
})
export class CoursesServices {
    constructor(private http: HttpClient) {

    }

    loadAllCourses(): Observable<Course[]> {
        return this.http.get<Course[]>('/api/courses').pipe(map(res => res["payload"]));
    }

}