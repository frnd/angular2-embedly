# angular2-embedly

## Installation

To install this library, run:

```bash
$ npm install angular2-embedly --save
```

## Usage

In order to use this module you will need a Embedly API key. To configure the api key 
we use a value provider. See this example:

```javascript
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
    providers: [provide('EMBEDLY_KEY', { useValue: 'YOUR_EMBEDLY_KEY' })]
    })
    export class AppComponent {
    url: string = "https://www.youtube.com/watch?v=jofNR_WkoCE"
    }
```

The important part of the code is:

```
    providers: [provide('EMBEDLY_KEY', { useValue: 'YOUR_EMBEDLY_KEY' })]
```

With this line you creates a new value provider named EMBEDLY_KEY that will be injected in the EmbedlyService.

## Security considerations

This module changes native element innerHtml with the html code that embedly provides.

## Development

To generate all `*.js`, `*.js.map` and `*.d.ts` files:

```bash
$ npm run tsc
```

To see the demo page:

```bash
$ npm run start
```

This will complile also all the TypeScript files.

## License

MIT © [Fernando González](fgo@outlook.com)
