import { Component, Inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NotesService } from '../notes.service';
import { NoteFilter } from '../note-filter';
import { Note } from '../note';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { OKTA_AUTH } from '@okta/okta-angular';
import OktaAuth from '@okta/okta-auth-js';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-note-list',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './note-list.component.html',
  styleUrl: './note-list.component.scss',
  providers: [NotesService],
})
export class NoteListComponent implements OnInit {
  public total$: Observable<number> | undefined;
  filter = new NoteFilter();
  user: string = '';

  get noteList(): Note[] {
    return this.noteService.noteList;
  }

  constructor(
    private noteService: NotesService,
    @Inject(OKTA_AUTH) private oktaAuth: OktaAuth
  ) {
    console.log('In note list component');
  }

  async ngOnInit(): Promise<void> {
    // const user = await this.oktaAuth.getUser();
    // this.user = JSON.stringify(user, null, 4);
    this.search();
  }

  search() {
    this.noteService.load(this.filter);
    this.total$ = this.noteService.size$.asObservable();
  }
}
