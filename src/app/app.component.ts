import {Component, OnInit} from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'MyRubrica';

  loading: true;

  ngOnInit() {
    $('.nav a').on('click', function () {
      $('.navbar-toggle').click()
    });
  }
}
