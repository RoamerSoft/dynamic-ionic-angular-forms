import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from "@angular/core";

@Directive({
  selector: "[appAttributes]",
  standalone: true
})
export class AttributesDirective implements OnChanges {
  @Input("appAttributes") attributes: any;

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["attributes"]) {
      this.applyAttributes(this.attributes);
    }
  }

  private applyAttributes(attributes: any) {
    if (attributes) {
      Object.keys(attributes).forEach(key => {
        // Convert camelCase to kebab-case
        const kebabCaseKey: string = this.toKebabCase(key);

        // Check if the converted key is a valid HTML attribute name
        if (this.isValidAttributeName(kebabCaseKey)) {
          this.renderer.setAttribute(this.el.nativeElement, kebabCaseKey, attributes[key]);
        }
      });
    }
  }

  /**
   * Helper method to validate attribute names
   */
  private isValidAttributeName(name: string): boolean {
    // An attribute name should start with a letter and consist of letters, digits, hyphens, underscores, colons, and periods.
    return /^[a-zA-Z][a-zA-Z0-9\-_:.]*$/.test(name);
  }

  /**
   * Helper method to convert camelCase to kebab-case
   * @param str String to convert to kebab-case
   */
  private toKebabCase(str: string): string {
    return str.replace(/[A-Z]/g, match => `-${match.toLowerCase()}`);
  }
}
