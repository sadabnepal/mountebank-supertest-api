# Mountebank Supertest mocha stub and test framework
boilerplate project to showcase virtualization of rest services using mountebank and testing rest api using supertest nodejs library with mocha framework

### getting started
```
git clone https://github.com/sadabnepal/mountebank-supertest-api.git
cd mountebank-supertest-api
```

### pre-requisite
[![NodeJs](https://img.shields.io/badge/-NodeJS-%23339933?logo=npm)](https://nodejs.org/en/download/)
[![VSCode](https://img.shields.io/badge/-Visual%20Studio%20Code-%233178C6?logo=visual-studio-code)](https://code.visualstudio.com/download)

### start stub
```
npm start
```

### set env
```
export ENV=local [make sure to start stub]
         OR
export ENV=dev
```

### run test
```
npm run test
```

### stub details
The project is using [mountebank](http://www.mbtest.org) as a service virtualization tool, which provides following endpoints 
| http call   | endpoint                   | status code | payload   |
|-------------|----------------------------|-------------|-----------|
| GET         | `/api/users/<id>`          | 200         | N/A       |
| GET         | `/api/users?page=<number>` | 200         | N/A       |
| POST        | `/api/users`               | 201         | `{"name": "sadab", "job": "tester" }` |
| PUT         | `/api/users/<id>`          | 200         | `{"name": "saqib", "job": "admin" }` |
| POST        | `/register`                | 200         | `{"email": "test@test.com", "password": "test@123" }` |
| POST        | `/login`                   | 200         | `{"email": "test@test.com", "password": "test@123" }` |

Note: default response will be empty object `{}` with response code: `404`


### learning references:
mountebank: http://www.mbtest.org <br>
supertest: http://visionmedia.github <br>
mocha: https://ricostacruz.com/mocha/ <br>
mocharc: https://github.com/mochajs/mocha/tree/master/example/config <br>
chai: https://www.chaijs.com <br>
report: https://github.com/adamgruber/mochawesome <br>
eslint: https://eslint.org/docs/latest/use/getting-started <br>
vscode settings: https://code.visualstudio.com/docs/getstarted/settings

### TODO
- [x] stub setup
- [x] simple stub
- [x] convert stub to dynamic
- [x] setup test framework
- [x] create simple test
- [x] add different env stage test support
- [x] add lint support for quality code
- [x] fix linting error in js files
- [x] fix default stub response error
- [x] add more stubs to replicate all https call
- [x] cover all test scenarios
- [x] create complex advance stubs (register and login)
- [x] document all endpoints in readme
