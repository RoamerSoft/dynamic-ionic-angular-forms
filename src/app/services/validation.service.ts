import { Injectable } from "@angular/core";
import { ValidatorFn, Validators } from "@angular/forms";

@Injectable({
  providedIn: "root"
})
export class ValidationService {
  /**
   * Retrieves an Angular validator based on the type and optional parameters.
   * @param validatorType - The type of validator (e.g., 'required', 'minLength', 'pattern').
   * @param validatorValue - Optional value for parameterized validators (e.g., minLength: 5).
   * @returns A ValidatorFn if the validator is found; throws an error otherwise.
   */
  public getValidator(validatorType: string, validatorValue?: any): ValidatorFn {
    switch (validatorType) {
      case "required":
        return Validators.required;

      case "requiredTrue":
        return Validators.requiredTrue;

      case "email":
        return Validators.email;

      case "min":
        return Validators.min(+validatorValue);

      case "max":
        return Validators.max(+validatorValue);

      case "minLength":
        return Validators.minLength(+validatorValue);

      case "maxLength":
        return Validators.maxLength(+validatorValue);

      case "pattern":
        if (typeof validatorValue === "string" || validatorValue instanceof RegExp) {
          return Validators.pattern(validatorValue);
        }
        throw new Error(`'pattern' validator requires a string or RegExp value.`);

      case "nullValidator":
        return Validators.nullValidator;

      default:
        throw new Error(`Unknown validator type: ${validatorType}`);
    }
  }

  /**
   * Composes multiple validators into a single validator function.
   * @param validators - An array of validator configurations (type and value).
   * @returns A composed ValidatorFn or null if no valid validators are provided.
   */
  public getValidators(validators: { type: string; value?: any }[]): ValidatorFn | null {
    const validatorFns = validators.map(v => this.getValidator(v.type, v.value));
    return Validators.compose(validatorFns);
  }
}
