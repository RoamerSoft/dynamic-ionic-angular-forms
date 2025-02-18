import { IsTemplateLabel } from "./is-template-label";
import { IsTemplateItem } from "./is-template-item";

export interface IsTemplateSection {
  sectionDescription: string;
  sectionTitle?: IsTemplateLabel;
  items?: IsTemplateItem[];
}
