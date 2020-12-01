import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';

import {AppState} from '../../../store/state.model';
import {Todo} from '../domain/todo.model';

@Injectable()
export class TodoService {
  baseUrl = 'https://jsonplaceholder.typicode.com/todos';

  constructor(
    private store: Store<AppState>,
    private httpClient: HttpClient,
  ) {
  }

  getTodos() {
    return this.httpClient.get<Todo[]>(this.baseUrl);
  }

  getTodoById(id: number) {
    return this.httpClient.get<Todo>(`${this.baseUrl}/${id}`);
  }

  deleteTodoById(id: number) {
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }
}
