export class Todo {
  id: number;
  userId: number;
  title: string;
  completed: boolean;

  constructor(props = {}) {
    Object.assign(this, props);
  }
}
