import { IsTemplateSection } from "./template-elements/is-template-section";

export interface IsFormTemplate {
  templateId: string;
  name: string;
  description?: string;
  sections?: IsTemplateSection[];
}
