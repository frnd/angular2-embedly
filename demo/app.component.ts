import { Component } from '@angular/core';
import { provide }    from '@angular/core';
import { EmbedlyDirective, EmbedlyService } from './../angular2-embedly';

@Component({
  selector: 'my-app',
  template: `
    <form>
      <div class="form-group">
        <label for="urlToEmbed">Url to embed</label>
        <input type="text" class="form-control" id="urlToEmbed" [(ngModel)]="url" placeholder="Paste an URL to embed...">
      </div>
    </form>
    <em-embed [url]="url" [width]="600"></em-embed>
    `,
  directives: [EmbedlyDirective],
  providers: [provide('EMBEDLY_KEY', { useValue: '6f1082b9288e4d9bbe00d22873f206e3' })]
})
export class AppComponent {
  url: string = "https://www.youtube.com/watch?v=jofNR_WkoCE"
}