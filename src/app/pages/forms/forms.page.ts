import { Component, inject, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common"
import { IsFormTemplate } from "../../models/templates/is-form-template";
import { take } from "rxjs";
import { FormService } from "../../services/form.service";
import { FormComponent } from "../../components/form/form.component";
import { IsFormData } from "../../models/form/is-form-data";
import { IonCard, IonCardContent, IonContent } from "@ionic/angular/standalone";
import { ResponsiveContainerComponent } from "../../components/responsive-container/responsive-container.component";
import { AppInformationService } from "../../services/app-information.service";

@Component({
  selector: "app-forms",
  templateUrl: "./forms.page.html",
  styleUrls: ["./forms.page.scss"],
  standalone: true,
  imports: [
    CommonModule,
    FormComponent,
    IonContent,
    IonCard,
    IonCardContent,
    ResponsiveContainerComponent
  ]
})
export class FormsPage implements OnInit {
  public formTemplate: IsFormTemplate | undefined;

  private readonly formService: FormService = inject(FormService);
  public readonly appInfoService: AppInformationService = inject(AppInformationService);

  ngOnInit() {
    this.formService.getFormTemplate().pipe(take(1)).subscribe((formTemplate: IsFormTemplate) => {
      this.formTemplate = formTemplate;
      console.log("Form template", formTemplate);
    });
  }

  public onFormSubmit(formData: IsFormData): void {
    // Clean the form data from empty fields
    const cleanedFormData: IsFormData = {
      ...formData,
      formData: this.removeEmptyFields(formData.formData)
    };

    // Convert data to JSON string
    const jsonString: string = JSON.stringify(cleanedFormData, null, 2);

    // Create a data URL
    const blob = new Blob([jsonString], {type: "application/json"});
    const url: string = URL.createObjectURL(blob);

    // Open form details in a new tab
    window.open(url, "_blank");
  }

  private removeEmptyFields(formData: FormData): FormData {
    // Create a copy of the form data
    const withoutEmptyField: FormData = formData;
    // Remove empty fields
    Object.keys(withoutEmptyField).forEach((key: string) => {
      if ((withoutEmptyField as Record<string, any>)[key] === "") {
        delete (withoutEmptyField as Record<string, any>)[key];
      }
    });
    // Return the form data without empty fields
    return withoutEmptyField;
  }
}
