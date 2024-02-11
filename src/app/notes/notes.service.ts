import { Note } from './note';
import { NoteFilter } from './note-filter';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

const headers = new HttpHeaders().set('Accept', 'application/json');

@Injectable()
export class NotesService {
  noteList: Note[] = [];
  size$ = new BehaviorSubject<number>(0);
  constructor(private http: HttpClient) {}

  load(filter: NoteFilter): void {
    this.find(filter).subscribe({
      next: (result: Note[]) => (this.noteList = result),
      error: (err) => console.error('error loading', err),
    });
  }

  find(filter: NoteFilter): Observable<Note[]> {
    const params: any = {
      title: filter.title,
      sort: `${filter.column},${filter.direction}`,
      size: filter.size,
      page: filter.page,
    };

    if (!filter.direction) delete params.sort;

    const userNotesUrl = `${environment.apiUrl}/user/notes`;
    return this.http.get(userNotesUrl, { params, headers }).pipe(
      map((response: any) => {
        this.size$.next(response.totalElements);
        return response.content;
      })
    );
  }
}
