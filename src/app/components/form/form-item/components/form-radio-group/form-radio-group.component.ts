import { Component, input, InputSignal, OnInit } from "@angular/core";
import {
  IsProperties
} from "../../../../../models/templates/template-elements/is-properties";
import { IonCol, IonGrid, IonInput, IonRadio, IonRadioGroup, IonRow, IonText } from "@ionic/angular/standalone";
import { AttributesDirective } from "../../../../../directives/attributes.directive";
import { FormGroup, ReactiveFormsModule } from "@angular/forms";
import { NgForOf } from "@angular/common";
import { IsTemplateLabel } from "../../../../../models/templates/template-elements/is-template-label";
import { IsTemplateValue } from "../../../../../models/templates/template-elements/is-template-value";

@Component({
  selector: "app-form-radio-group",
  templateUrl: "./form-radio-group.component.html",
  styleUrls: ["./form-radio-group.component.scss"],
  standalone: true,
  imports: [
    AttributesDirective,
    ReactiveFormsModule,
    IonRadioGroup,
    IonRadio,
    IonGrid,
    IonRow,
    IonCol,
    NgForOf,
    IonText
  ]
})
export class FormRadioGroupComponent implements OnInit {
  public form: InputSignal<FormGroup> = input.required<FormGroup>();
  public label: InputSignal<IsTemplateLabel> = input.required<IsTemplateLabel>();
  public value: InputSignal<IsTemplateValue> = input.required<IsTemplateValue>();
  public attributes: InputSignal<IsProperties> = input.required<IsProperties>();

  constructor() {
  }

  ngOnInit() {
  }

}
