# Mountebank Supertest mocha stub and test framework

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

### run test
```
npm run test
```

### stub details
The project is using [Mountebank](http://www.mbtest.org) as a service virtualization tool, which provides following endpoints 

`GET: /api/users/userID` fetches the user information by `userID` <br>
`GET: /api/users?page=id` fetches the users information by `page number`

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
- [ ] fix linting error in js files
- [ ] add more stubs to replicate all https call
- [ ] cover all test scenarios
- [ ] create complex advance stubs
- [ ] document all endpoints in readme
