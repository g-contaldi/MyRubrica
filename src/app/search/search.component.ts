import {Component, OnInit} from '@angular/core';
import {Contact} from "../model/contact";
import {ContactService} from "../providers/contact.service";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  listContact$: Observable<Array<Contact>>;
  selected: Contact = new Contact();
  private searchTerms = new Subject<string>();

  constructor(private contactService: ContactService) {
  }

  ngOnInit() {
    this.listContact$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.contactService.searchContact(term)),
    );
  }

  search(term: string) {
    this.searchTerms.next(term);
  }

  selectedItem(c) {
    this.selected = c;
  }


}
