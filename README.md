# angular2 embedly
[![Build Status](https://travis-ci.org/frnd/angular2-embedly.svg?branch=master)](https://travis-ci.org/frnd/angular2-embedly)
[![npm version](https://badge.fury.io/js/angular2-embedly.svg)](http://badge.fury.io/js/angular2-embedly)
[![devDependency Status](https://david-dm.org/frnd/angular2-embedly/dev-status.svg)](https://david-dm.org/frnd/angular2-embedly#info=devDependencies)
[![GitHub issues](https://img.shields.io/github/issues/frnd/angular2-embedly.svg)](https://github.com/frnd/angular2-embedly/issues)
[![GitHub stars](https://img.shields.io/github/stars/frnd/angular2-embedly.svg)](https://github.com/frnd/angular2-embedly/stargazers)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/frnd/angular2-embedly/master/LICENSE)

## Demo
https://frnd.github.io/angular2-embedly/demo/

## Table of contents

- [About](#about)
- [Installation](#installation)
- [Usage](#usage)
- [Documentation](#documentation)
- [Development](#development)
- [License](#licence)

## About

embed.ly directive and service for Angular2

## Installation

Install through npm:
```
npm install --save angular2-embedly
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

You may also find it useful to view the [demo source](https://github.com/frnd/angular2-embedly/blob/master/demo/demo.ts).

## Security considerations

This module changes native element innerHtml with the html code that embedly provides.

### Usage without a module bundler
```
<script src="node_modules/angular2-embedly/angular2-embedly.js"></script>
<script>
    // everything is exported angular2Embedly namespace
</script>
```

## Documentation
All documentation is auto-generated from the source via typedoc and can be viewed here:
https://frnd.github.io/angular2-embedly/docs/

## Development

### Prepare your environment
* Install [Node.js](http://nodejs.org/) and NPM (should come with)
* Install local dev dependencies: `npm install` while current directory is this repo

### Development server
Run `npm start` to start a development server on port 8000 with auto reload + tests. 

### Testing
Run `npm test` to run tests once or `npm run test:watch` to continually run tests.

### Release
* Bump the version in package.json (once the module hits 1.0 this will become automatic)
```bash
npm run release
```
 
## License

MIT
