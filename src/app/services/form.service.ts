import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

import { IsFormTemplate } from "../models/templates/is-form-template";


@Injectable({
  providedIn: "root"
})
export class FormService {
  public constructor(private http: HttpClient) {
  }


  public getFormTemplate(): Observable<IsFormTemplate> {
    return this.http.get<IsFormTemplate>(`assets/json/form.json`);
  }
}
