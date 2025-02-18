import { Component, input, InputSignal, OnInit } from "@angular/core";
import { FormGroup, ReactiveFormsModule } from "@angular/forms";
import {
  IsProperties
} from "../../../../../models/templates/template-elements/is-properties";
import { IonButton, IonInput } from "@ionic/angular/standalone";
import { AttributesDirective } from "../../../../../directives/attributes.directive";
import { IsTemplateLabel } from "../../../../../models/templates/template-elements/is-template-label";
import { IsTemplateValue } from "../../../../../models/templates/template-elements/is-template-value";

@Component({
  selector: "app-form-button",
  templateUrl: "./form-button.component.html",
  styleUrls: ["./form-button.component.scss"],
  standalone: true,
  imports: [
    IonButton,
    AttributesDirective,
    ReactiveFormsModule]
})
export class FormButtonComponent implements OnInit {
  public form: InputSignal<FormGroup> = input.required<FormGroup>();
  public label: InputSignal<IsTemplateLabel> = input.required<IsTemplateLabel>();
  public value: InputSignal<IsTemplateValue> = input.required<IsTemplateValue>();
  public attributes: InputSignal<IsProperties> = input.required<IsProperties>();


  constructor() {
  }

  ngOnInit() {
  }

}
