import { isPlatformServer } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContentService } from './services/content/content.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'test-ngssr';

  constructor(
    private content: ContentService,
    @Inject(PLATFORM_ID) private platformId: string
  ) {
    console.log(isPlatformServer(this.platformId));
    this.content.getContet().subscribe((data) => {
      console.log('GOT DATA: ', data);
    });
  }
}
