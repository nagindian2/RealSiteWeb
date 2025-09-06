import { Component } from '@angular/core';
import { IBank } from 'src/app/model/IBank';

import { FileReassignService } from 'src/app/services/services/realpageapi.service';



@Component({
  selector: 'app-list-bank',
  templateUrl: './listbanks.component.html',
})
export class ListBankComponent {
  banks: IBank[] = [];
  constructor(private fileReassignService: FileReassignService) {}

  ngOnInit(): void {
    this.fileReassignService.getbanks().subscribe({
      next: (data) => {
        console.log('API Data:', data);
        this.banks = data;
      },
      error: (err) => {
        console.error('API Error:', err);
      }
    });  
  }
}
