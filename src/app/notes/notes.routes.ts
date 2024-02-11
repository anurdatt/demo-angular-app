import { Routes } from '@angular/router';
import { NoteListComponent } from './note-list/note-list.component';
import { NoteEditComponent } from './note-edit/note-edit.component';

export const NOTE_ROUTES: Routes = [
  {
    path: 'note-list',
    component: NoteListComponent,
  },
  {
    path: 'note-edit/:id',
    component: NoteEditComponent,
  },
];
