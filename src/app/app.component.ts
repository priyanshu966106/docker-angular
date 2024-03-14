import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'rtgs';
  constructor(
    private titleService: Title,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    if (isPlatformBrowser(this.platformId)) {
      console.log(`Hello World ${JSON.stringify(window.location)} `);
      // Safe to use window object here
      const host = window.location.host;
      // Logic to set the title based on the host
      // This is a simple example, you might want to have a more complex logic
      if (host.includes('example.com')) {
        this.title = host;
      } else {
        this.title = host;
      }
      this.titleService.setTitle(this.title);
    }
  }
}
