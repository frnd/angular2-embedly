import { Injectable, Inject } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Http, Response, URLSearchParams } from '@angular/http';

@Injectable()
export class EmbedlyService {
  protocol: string = 'https';
  oembedUrl: string = this.protocol + '://api.embed.ly/1/oembed';
  extractUrl: string = this.protocol + '://api.embed.ly/1/extract';

  constructor(private http: Http, @Inject('EMBEDLY_KEY') private EMBEDLY_KEY: string) {
  }

  embed(inputUrl: string, maxwidth?: number, scheme?: string) {
    let params: URLSearchParams = new URLSearchParams();
    params.set('key', this.EMBEDLY_KEY);
    params.set('url', encodeURIComponent(inputUrl));

    if (typeof maxwidth !== 'undefined') {
      params.set('maxwidth', maxwidth.toString());
    }

    if (typeof scheme !== 'undefined') {
      params.set('scheme', scheme);
    }

    return this.http.get(this.oembedUrl, { search: params })
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  };

  extract(inputUrl: string) {
    let params: URLSearchParams = new URLSearchParams();
    params.set('key', this.EMBEDLY_KEY);
    params.set('url', encodeURIComponent(inputUrl));

    return this.http.get(this.extractUrl, { search: params })
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  };

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
