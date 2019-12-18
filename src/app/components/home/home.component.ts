import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

declare function init_plugins();

declare var jQuery: any;
declare var  $: any;

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    public customOptions: OwlOptions = {
        loop: true,
        margin: 0,
        nav: true,
        autoWidth: false,
        navText: ['<i class="fa fa-arrow-circle-left" title="Anterior"></i>', '<i class="fa  fa-arrow-circle-right" title="Siguiente"></i>'],
        responsive: {
            0: {
                items: 1
            },
            500: {
                items: 2
            },
            800: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    };

    constructor() { }

    ngOnInit() {
        init_plugins();
    }

    move(el){
        el.scrollIntoView({block: 'start', behavior: 'smooth'});
    }

}
