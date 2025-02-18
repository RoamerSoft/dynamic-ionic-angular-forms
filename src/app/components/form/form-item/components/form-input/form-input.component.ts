import { Component, input, InputSignal, OnInit } from "@angular/core";
import {
  IsProperties
} from "../../../../../models/templates/template-elements/is-properties";
import { IonInput } from "@ionic/angular/standalone";
import { AttributesDirective } from "../../../../../directives/attributes.directive";
import { FormGroup, ReactiveFormsModule } from "@angular/forms";
import { IsTemplateLabel } from "../../../../../models/templates/template-elements/is-template-label";
import { IsTemplateValue } from "../../../../../models/templates/template-elements/is-template-value";

@Component({
  selector: "app-form-input",
  templateUrl: "./form-input.component.html",
  styleUrls: ["./form-input.component.scss"],
  standalone: true,
  imports: [
    IonInput,
    AttributesDirective,
    ReactiveFormsModule
  ]
})
export class FormInputComponent implements OnInit {
  public form: InputSignal<FormGroup> = input.required<FormGroup>();
  public label: InputSignal<IsTemplateLabel> = input.required<IsTemplateLabel>();
  public value: InputSignal<IsTemplateValue> = input.required<IsTemplateValue>();
  public attributes: InputSignal<IsProperties> = input.required<IsProperties>();

  constructor() {
  }

  ngOnInit() {
  }

}
