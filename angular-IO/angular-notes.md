# Introducion to Angular Concepts

* Angular: platform and framework
    * used to build single page applications (SPAs)
    * Main building blocks of Angular is **NgModules**

### Framewok
* A framework is a collection of programs that help you write and use a language more efficently. Angular is a TS framework
* TypeScript is just ES6 with Types


## NgModules
* these provide a complilation context for *components*
* Collect related code into funtional sets
* an Angular app is *defined* by it's NgModules.
* Alwaus has a root modulr thet enables bootstrapping
     * typically had more *feature modules*
* **components** define **views**
* **components** use **services** 
    * provide specific functionality not directly related to view.
    * service providers can be injected as dependancies
        * makes code modular, reusable and efficient

* components and services are **simply classes** with decorators (marking their type & providing metadata).
    * metadata for a compont class associates it with a template that defines a view
    * a template is just ordinary HTML with angular directives and binding markup that allows angular to modfy the HTML before it is rendered.
* The Router Service (or just the router) helps define sophisticated navigation capabilities.

## Modules
- differ from and compliment JS modules
- root module for Angular app is **AppModule**
    - provides bootstrap module that launches the application
- Angular app contains many functional modules
- Same as JS modules, Angular modules inherit functionality from other modules.
    - e.g. to use Router, import RouterModule
- Modules allow Lazy Loading which allows better performance and minimisation of inital page load.
- *reduces high bounce rates*

## Components 
- Angular app has at least 1
    - root component
    - connects component hierarchy with DOM (document object model)
- components define classes 
    - contain logic, and associated HTML template that defines view for display in target environment.
- @Component defines class as component & provides template & related, specific metadata
- **Decorators** are functions that modify JS angular defines decorators that attach specific metadata to classes so the system knows how it should work.

## Templates, Directives & Data Binding






