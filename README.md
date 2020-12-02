# Angular 7 Project Starter

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.10.

## Development server

Run the project with `npm start`

## Login Credentials

**username**: Panos  
**password**: t^2Yvg8!bbUPWJHq

## API

BaseUrl: https://jsonplaceholder.typicode.com

| Method  | Resource         | Comments
| ---     | ---              | ---
| GET     | /todos           |
| GET     | /todos/:todoId   | Mocked
| POST    | /todos           |
| PUT     | /todos/:todoId   | Mocked
| DELETE  | /todos/:todoId   |

The free `jsonplaceholder` service does not support for remote alteration of the data, as expected.
  
As a result, querying id's (`GET /todos/:todoId`) _over_ the range of [1-200] returns 404. Also, calls  _in_ the range return the original item and not the locally altered one.  

For that reason some services are mocked as noted in the comments of the table above to avoid inconsistencies.

**Caution:** The returned object has always id = n+1 from the initial list count and in that case it's always 201 no matter how many new entries we have. 

## Future developments

- Use Angular 10+
- Use Angular Material UI
- Fully functional (local!?) backend
- Proper authentication mechanism
- Usu ngx-datatable for the table
- Proper error handling across the application
