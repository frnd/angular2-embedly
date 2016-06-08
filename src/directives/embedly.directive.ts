import { Directive, ElementRef, Input, Output, EventEmitter, OnChanges} from '@angular/core';
import { EmbedlyService } from '../services';

@Directive({
  selector: 'em-embed',
  providers: [EmbedlyService]
})
export class EmbedlyDirective implements OnChanges {
  @Input() url: string;
  @Input() width: number;
  @Output() onEmpty = new EventEmitter<Object>();

  constructor(private el: ElementRef, private embedly: EmbedlyService) {
    console.log(el);
  }

  ngOnChanges(changes) {
    console.log(changes.url.currentValue);
    this.embedly.embed(changes.url.currentValue, this.width)
      .then((data) => {
        if(data.html){
          this.el.nativeElement.innerHTML = data.html;
        } else {
          this.onEmpty.emit(data)
        }
      })
      .catch((data)=> {this.onEmpty.emit({})});
  }

}
