import { Component, OnInit } from '@angular/core';
import { JournalEntriesService } from 'app/services/journal-entries.service';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {

  entries: Object[];

  constructor(private journalEntries : JournalEntriesService) { }

  ngOnInit() {
    this.journalEntries.getList()
    .then((entries) => {
      this.entries = entries;
    })
  }

}
