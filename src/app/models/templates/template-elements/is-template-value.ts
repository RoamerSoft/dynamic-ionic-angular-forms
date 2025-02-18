import { IsTemplateOptionValue } from "./is-template-option-value";
import { IsProperties } from "./is-properties";

export interface IsTemplateValue {
  templateValueValue?: string;
  templateValueOptions?: IsTemplateOptionValue[];
  templateValueProperties?: IsProperties;
}
