import { Component, input, InputSignal, OnInit } from "@angular/core";
import {
  IsProperties
} from "../../../../../models/templates/template-elements/is-properties";
import { IonInput, IonLabel, IonTextarea } from "@ionic/angular/standalone";
import { AttributesDirective } from "../../../../../directives/attributes.directive";
import { FormGroup, ReactiveFormsModule } from "@angular/forms";
import { IsTemplateLabel } from "../../../../../models/templates/template-elements/is-template-label";
import { IsTemplateValue } from "../../../../../models/templates/template-elements/is-template-value";
import { NgStyle } from "@angular/common";

@Component({
  selector: "app-form-textarea",
  templateUrl: "./form-textarea.component.html",
  styleUrls: ["./form-textarea.component.scss"],
  standalone: true,
  imports: [
    AttributesDirective,
    ReactiveFormsModule,
    IonTextarea,
    IonLabel
  ]
})
export class FormTextareaComponent implements OnInit {
  public form: InputSignal<FormGroup> = input.required<FormGroup>();
  public label: InputSignal<IsTemplateLabel> = input.required<IsTemplateLabel>();
  public value: InputSignal<IsTemplateValue> = input.required<IsTemplateValue>();
  public attributes: InputSignal<IsProperties> = input.required<IsProperties>();

  constructor() {
  }

  ngOnInit() {
  }

}
