# Dynamic Forms for Ionic Angular

Need functionality to dynamically build forms in an Ionic Angular app? This is the code you need! Save time and effort by integrating this solution into your app, allowing you to load forms from any source using a cleverly designed JSON file for maximum configurability.

## 🚀 Live Demo
Check out the live demo here:  
[Live Demo](#) _(Replace with actual link)_

## 📄 JSON File Example
View the corresponding JSON file:  
[JSON File](#) _(Replace with actual link)_

## 📌 JSON Structure
The JSON file follows a structured format to define form fields dynamically. Example:
- form: IsFormTemplate
  - templateId: string
  - name: string
  - description?: string
  - sections?: IsTemplateSection[]
    - sectionDescription: string
    - sectionTitle: IsTemplateLabel
      - templateLabelValue: string
      - templateLabelProperties: IsProperties
        -  &nbsp;[key: string]: string
      - items?: IsTemplateItem[] 
        - templateItemType: IsTemplateItemType 
          - "ITEM" | "BUTTON" | "INPUT" | "RADIO_GROUP" | "TEXTAREA"
        - templateItemLabel?: IsTemplateLabel
          - templateLabelValue?: string
          - templateLabelProperties?: IsProperties
            - &nbsp;[key: string]: string
        - templateItemValue?: IsTemplateValue
          - templateValueValue?: string
          - templateValueOptions? IsTemplateValueOption[]
            - value?: string
            - label?: string
          - templateValueProperties?: IsProperties
            - &nbsp;[key: string]: string
        - templateItemProperties?: IsProperties
          - &nbsp;[key: string]: string
        - templateItemValidators?: IsTemplateItemValidator[]
          - type: string
          - value?: string
        - templateItemInvalidErrorLabel? IsTemplateLabel
          - templateLabelValue?: string
          - templateLabelProperties?: IsProperties
            - &nbsp;[key: string]: string
        - nestedTemplateItem: IsTemplateItem
