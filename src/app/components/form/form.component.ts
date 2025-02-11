import { Component, input, InputSignal, OnInit, output, OutputEmitterRef, signal, WritableSignal } from "@angular/core";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { IsFormTemplate } from "../../models/templates/is-form-template";
import { IsTemplateSection } from "../../models/templates/template-elements/is-template-section";
import { CommonModule } from "@angular/common";
import {
  IonButton,
  IonCardHeader, IonCardSubtitle, IonCardTitle,
  IonInput,
  IonList,
  IonListHeader,
  IonText,
  IonTitle
} from "@ionic/angular/standalone";
import { AttributesDirective } from "../../directives/attributes.directive";
import { FormItemComponent } from "./form-item/form-item.component";
import { IsTemplateItem } from "../../models/templates/template-elements/is-template-item";
import { ValidationService } from "../../services/validation.service";
import { IsTemplateItemType } from "../../models/templates/template-elements/is-template-item-type.enum";
import { AnimatedContainerComponent } from "../animated-container/animated-container.component";
import { IsFormData } from "../../models/form/is-form-data";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonList,
    IonText,
    AttributesDirective,
    ReactiveFormsModule,
    FormItemComponent,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    AnimatedContainerComponent
  ]
})
export class FormComponent implements OnInit {
  // Inputs
  public formTemplate: InputSignal<IsFormTemplate> = input.required<IsFormTemplate>();

  // Outputs
  public onFormSubmit: OutputEmitterRef<IsFormData> = output<IsFormData>();

  // Form
  public formGroup: FormGroup;
  public submitButtonUsed: WritableSignal<boolean> = signal(false);

  public readonly IsTemplateItemType = IsTemplateItemType;

  constructor(private validationService: ValidationService) {
  }

  ngOnInit() {
    this.formGroup = this.buildFormGroup(this.formTemplate());
  }


  public formSubmit(): void {
    this.submitButtonUsed.set(true);

    const formData: IsFormData = {
      templateId: this.formTemplate().templateId,
      name: this.formTemplate().name,
      description: this.formTemplate().description || "",
      formData: this.formGroup!.value,
    };

    console.log(this.formGroup);

    // Check if the form is valid
    if (!this.formGroup.valid) {
      console.error("Form is not valid");
      return;
    }

    this.onFormSubmit.emit(formData);
  }

  private buildFormGroup(formTemplate: IsFormTemplate): FormGroup {
    const formGroup = new FormGroup({});

    // Recursive function to process items and nested items
    const processItems = (item: IsTemplateItem): void => {
      if (item.templateItemProperties && item.templateItemProperties["name"]) {
        // Add control for the current item
        formGroup.addControl(item.templateItemProperties["name"], new FormControl("", item.templateItemValidators ? this.validationService.getValidators(item.templateItemValidators) : []));
      }
      // Check for nestedTemplateItem and process recursively
      if (item.nestedTemplateItem) {
        processItems(item.nestedTemplateItem);
      }
    };

    // Check if there are sections
    if (formTemplate.sections) {
      // Loop through the sections
      formTemplate.sections.forEach((section: IsTemplateSection): void => {
        // Check if there are items
        if (section.items) {
          // Loop through the items
          section.items.forEach((item) => {
            processItems(item);
          });
        }
      });
    }

    return formGroup;
  }
}
