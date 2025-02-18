import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

import { IsFormTemplate } from "../models/templates/is-form-template";
import { environment } from "../../environments/environment";


@Injectable({
  providedIn: "root"
})
export class FormService {
  private formLocation: string = environment.formLocation;

  public constructor(private http: HttpClient) {
  }


  public getFormTemplate(): Observable<IsFormTemplate> {
    return this.http.get<IsFormTemplate>(this.formLocation);
  }
}
