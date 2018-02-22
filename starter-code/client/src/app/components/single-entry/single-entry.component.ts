import { Component, OnInit, Input } from '@angular/core';
import { JournalEntriesService } from 'app/services/journal-entries.service';

@Component({
  selector: 'app-single-entry',
  templateUrl: './single-entry.component.html',
  styleUrls: ['./single-entry.component.css']
})
export class SingleEntryComponent implements OnInit {
 
  @Input() entry: any;
  
  ourEntry: any;

  constructor( private entryService : JournalEntriesService ) { }

  ngOnInit() {
    this.entryService.getOneEntry(this.entry)
    .then((oneEntry) => {
      this.ourEntry = oneEntry;
    })
  }

}
