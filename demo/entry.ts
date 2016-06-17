import 'reflect-metadata';
import 'zone.js/dist/zone';
import {enableProdMode} from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import {DemoApp} from './demo';

declare var ENV: string;
if (ENV === 'production') {
  enableProdMode();
}

bootstrap(DemoApp, [ HTTP_PROVIDERS ]);