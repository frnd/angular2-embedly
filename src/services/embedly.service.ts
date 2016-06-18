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

  /**
   * oEmbed is Embedly’s basic offering, providing a simple API for embedding content from any URL. 
   * This method follows the oEmbed standard.
   * 
   * @param inputUrl  The URL is to retrieve embedding information. 
   * @param maxwidth  This is the maximum width of the embed in pixels. maxwidth is used for scaling 
   *                  down embeds so they fit into a certain width.
   * @param scheme    scheme allows to set the protocol scheme explicity to http or https.
   */
  embed(inputUrl: string, maxwidth?: number, scheme?: string): Promise<any> {
    let params: URLSearchParams = new URLSearchParams();
    params.set('key', this.EMBEDLY_KEY);
    params.set('url', inputUrl);

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

  /**
   * Extract allows users to dive into specifics on a site and beyond. With this API 
   * we allow developers to extract article text, topics, and retrieve more meta-data 
   * about articles, blog posts, and stories.
   * 
   * @param inputUrl  The URL is to retrieve embedding information.
   */
  extract(inputUrl: string): Promise<any> {
    let params: URLSearchParams = new URLSearchParams();
    params.set('key', this.EMBEDLY_KEY);
    params.set('url', encodeURIComponent(inputUrl));

    return this.http.get(this.extractUrl, { search: params })
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  };

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
