import { AfterViewInit, Component, DestroyRef, ElementRef, Input, ViewChild } from "@angular/core";
import { animate, group, query, style, transition, trigger } from "@angular/animations";

@Component({
  selector: "app-animated-container",
  templateUrl: "./animated-container.component.html",
  styleUrls: ["./animated-container.component.scss"],
  standalone: true,
  animations: [
    trigger("contentAnimation", [
      transition("* <=> *", [
        group([
          query(":enter", [
            style({opacity: 0}),
            animate(300, style({opacity: 1}))
          ], {optional: true}),
          query(":leave", [
            style({position: "absolute", width: "100%"}),
            animate(100, style({opacity: 0}))
          ], {optional: true})
        ])
      ])
    ])
  ]
})
export class AnimatedContainerComponent implements AfterViewInit {

  @Input()
  public animationState: any;

  @ViewChild("contentContainer", {static: true})
  private contentContainer: ElementRef<HTMLDivElement>;

  @ViewChild("contentWrapper", {static: true})
  private contentWrapper: ElementRef<HTMLDivElement>;

  public constructor(public destroyRef: DestroyRef) {
  }

  public ngAfterViewInit(): void {
    const routerOutletWrapperResizeObserver: ResizeObserver = new ResizeObserver((entries: ResizeObserverEntry[], observer: ResizeObserver): void => {
      for (const entry of entries) {
        this.contentContainer.nativeElement.style.height = `${entry.borderBoxSize[0].blockSize}px`;
      }
    });

    routerOutletWrapperResizeObserver.observe(this.contentWrapper.nativeElement);

    this.destroyRef.onDestroy((): void => {
      routerOutletWrapperResizeObserver.disconnect();
    });
  }

}
