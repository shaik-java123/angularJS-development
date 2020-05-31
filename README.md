# angularJS-development
1: Install angular cli by executing npm install -g @angular/cli in terminal.
2: Check the CLI version by executing command ng -version
3: Create Angular project by executing command ng new employee-management
4: Go to component then execute ng serve
5: open the browser and hit localhost:4200
6: Create Angular component using ng generate component employee
7:Next, in the app-routing.module.ts file, we will be defining the URL for accessing this component.

If we got o localhost:4200, we can see the following output 
8: Create HttpClient Service by executing 
ng generate service service/httpClient

We will be modifying the http-client.service.ts file. In the constructor define the HTTPClient instance we will be using to make a call to the Spring Boot application. Here we will be using the Angular HTTPClient for calling the Spring Boot API to fetch the employee data. Also, we will be creating a method which makes calls to the Spring Boot application using the defined httpClient. Also, we need to add the HTTPClientModule to the app.module.ts

Insert HttpClient Service in Employee Component
