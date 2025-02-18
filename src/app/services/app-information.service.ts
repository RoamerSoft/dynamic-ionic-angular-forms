import { Injectable } from "@angular/core";
import packageInfo from "../../../package.json";

@Injectable({
  providedIn: "root",
})
export class AppInformationService {
  public readonly author: string;
  public readonly name: string;
  public readonly version: string;
  public readonly date: Date;

  public constructor() {
    this.author = packageInfo.author;
    this.name = packageInfo.name;
    this.version = packageInfo.version;
    this.date = new Date();
  }
}
