import { Component, input, InputSignal, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IsTemplateItemType } from "../../../models/templates/template-elements/is-template-item-type.enum";
import { FormInputComponent } from "./components/form-input/form-input.component";
import { IonInput } from "@ionic/angular/standalone";
import { FormGroup } from "@angular/forms";
import { FormButtonComponent } from "./components/form-button/form-button.component";
import { FormRadioGroupComponent } from "./components/form-radio-group/form-radio-group.component";
import { AnimatedContainerComponent } from "../../animated-container/animated-container.component";
import { FormTextareaComponent } from "./components/form-textarea/form-textarea.component";
import { IsTemplateItem } from "../../../models/templates/template-elements/is-template-item";
import { falseStringValues } from "../../../constants/false-string-values";

@Component({
  selector: "app-form-item",
  templateUrl: "./form-item.component.html",
  styleUrls: ["./form-item.component.scss"],
  standalone: true,
  imports: [CommonModule, FormInputComponent, FormButtonComponent, FormRadioGroupComponent, AnimatedContainerComponent, FormTextareaComponent]
})
export class FormItemComponent implements OnInit {
  public form: InputSignal<FormGroup> = input.required<FormGroup>();
  public formItem: InputSignal<IsTemplateItem> = input.required<IsTemplateItem>();

  public readonly IsTemplateItemType = IsTemplateItemType;

  constructor() {
  }

  ngOnInit() {
  }

  public falseStringValue(value: string): boolean {
    return falseStringValues.includes(value.toLowerCase());
  }

}
