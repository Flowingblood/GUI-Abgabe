import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/entities/user';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  displayedColumns: string[] = ['id','username', 'firstname', 'lastname', 'actions'];

  users : MatTableDataSource<User>;

  constructor(public backendService: BackendService) { }

  ngOnInit(): void {

    
    this.backendService.getAllUser().then((u) => {this.users = new MatTableDataSource(u); console.log(this.users.data);})
    
  }

}
