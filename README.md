# Dynamic Forms for Ionic Angular

Need functionality to dynamically build forms in an Ionic Angular app? This is the code you need! Save time and effort by integrating this solution into your app, allowing you to load forms from any source using a cleverly designed JSON file for maximum configurability.

## Used technologies

- Ionic 8
- Angular 19
- Node.js v22.14

## 🚀 Live Demo

Try out the dynamic form builder in action! Modify different configurations and see how forms are generated instantly.

[Live Demo](https://ionicforms.roamersoft.com)

## 📄 JSON File Demo

This example JSON file defines a sample form. Use it as a template to create your own dynamic forms.

[JSON File](https://ionicforms.roamersoft.com/assets/json/example-form.json)

## 📌 JSON Structure

The JSON file follows a structured format to define form fields dynamically:

- form: IsFormTemplate
  - templateId: string
  - name: string
  - description?: string
  - sections?: IsTemplateSection[]
    - sectionDescription: string
    - sectionTitle: IsTemplateLabel
      - templateLabelValue: string
      - templateLabelProperties: IsProperties
        - &nbsp;[key: string]: string
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

## **📌 Run the Demo Locally**

To run the demo on your local machine, follow these steps:

1. **Ensure Node.js is Installed**
   ```bash
   node -v
   ```  
   If you don’t have v22.14, you can install it with Node Version Manger with `nvm use` (a `.nvmrc` file is included in the project root).


2. **Install Project Dependencies**
   ```bash
   npm install
   ```  

3. **Install Ionic CLI**
   ```bash
   npm install -g @ionic/cli
   ```  

4. **Run the Ionic Development Server**
   ```bash
   ionic serve
   ```  

5. Open `http://localhost:8100/` in your browser.

## **📌 More Information**

For additional details, refer to the official Ionic documentation:  
🔗 [Ionic Docs](https://ionicframework.com/docs)
