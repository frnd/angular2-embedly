import {
  describe,
  expect,
  beforeEach,
  it,
  inject,
  injectAsync,
  beforeEachProviders
} from '@angular/core/testing';
import {Headers,
  HTTP_PROVIDERS,
  BaseRequestOptions,
  XHRBackend,
  Response,
  ResponseOptions} from '@angular/http';
import {provide} from '@angular/core';
import {MockBackend, MockConnection} from '@angular/http/testing';
import {TestComponentBuilder, ComponentFixture} from '@angular/compiler/testing';
import {EmbedlyService} from './../angular2-embedly';

describe('Embedly Service', () => {

  beforeEachProviders(() => {
    return [
      HTTP_PROVIDERS,
      provide(XHRBackend, { useClass: MockBackend }),
      provide('EMBEDLY_KEY', { useValue: 'TESTING' }),
      EmbedlyService
    ];
  });

  it('should get embed data', inject([XHRBackend, EmbedlyService], (mockBackend, service) => {
    let result: any = {
      type: 'video'
    };

    mockBackend.connections.subscribe(
      (connection: MockConnection) => {
        connection.mockRespond(new Response(
          new ResponseOptions({
            body: result
          }
          )));
      });

    service.embed('some_url').then((data) => {
      expect(data).toEqual(result);
    });
  }));


});
