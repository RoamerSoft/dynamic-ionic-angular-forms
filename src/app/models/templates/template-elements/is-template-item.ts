import { IsTemplateLabel } from "./is-template-label";
import { IsTemplateValue } from "./is-template-value";
import { IsTemplateItemType } from "./is-template-item-type.enum";
import { IsProperties } from "./is-properties";
import { IsTemplateItemValidator } from "./is-template-item-validator";

export interface IsTemplateItem {
  templateItemType: IsTemplateItemType;
  templateItemLabel?: IsTemplateLabel;
  templateItemValue?: IsTemplateValue;
  templateItemProperties?: IsProperties;
  templateItemValidators?: IsTemplateItemValidator[];
  templateItemInvalidErrorLabel?: IsTemplateLabel;
  nestedTemplateItem?: IsTemplateItem;
}
