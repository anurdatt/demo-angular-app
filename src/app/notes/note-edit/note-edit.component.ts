import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-note-edit',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './note-edit.component.html',
  styleUrl: './note-edit.component.scss',
  providers: [NotesService],
})
export class NoteEditComponent {
  constructor() {
    console.log('In note edit component');
  }
}
