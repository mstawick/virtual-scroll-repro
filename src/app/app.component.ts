import { ChangeDetectorRef, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport } from '@angular/cdk/scrolling'
import { MatButton } from '@angular/material/button'
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CdkVirtualScrollViewport,
    CdkFixedSizeVirtualScroll,
    CdkVirtualForOf,
    MatButton,
    JsonPipe,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'virtual-scroll-repro';

  items = [0]

  constructor(public cd: ChangeDetectorRef) {

  }

  updateItems(count: number) {
    this.items = []
    for (let i = 0; i < count + 1; i++) {
      this.items.push(i)
    }

    this.cd.markForCheck()
  }
}
