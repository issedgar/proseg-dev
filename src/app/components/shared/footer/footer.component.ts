import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Input() el: any;

  constructor() { }

  ngOnInit() {
  }

  moveInit() {
    this.el.scrollIntoView({block: 'start', behavior: 'smooth'});
  }

}
