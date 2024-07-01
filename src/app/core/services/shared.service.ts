import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../interfaces/user';
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private userSource = new BehaviorSubject<User|null|undefined>(null);
  currentUser = this.userSource.asObservable();

  constructor() { }
  changeUser(user: User) {
    this.userSource.next(user);
  }
}
