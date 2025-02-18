import { Component } from "@angular/core";
import { IonCol, IonRow } from "@ionic/angular/standalone";

@Component({
  selector: "app-responsive-container",
  templateUrl: "./responsive-container.component.html",
  styleUrls: ["./responsive-container.component.scss"],
  standalone: true,
  imports: [IonRow, IonCol]
})
export class ResponsiveContainerComponent {
  public constructor() {
  }
}
