# Weather Forecast - Setup

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.5.

## Requirements

The project requires the Node.js runtime environment. You can download it from here: `https://nodejs.org`.

It also requires the Angular CLI to run. It can be installed via using npm:

 <code>npm install -g @angular/cli</code>

## Install Dependencies

Run `npm install` for installing the dependencies. 

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


# Weather Forecast - How does it work?

## Start

Use `http://localhost:4200/` to access the UI.

## How to use?

- The selected city is stored in a sessionStorage, so closing a tab will clear the storage.
- Without a selected city value, the city selector popup shows up.
- Type the name of the city, you want to check.
- Click on the name of the city and select it from the list OR navigate to the city with arrow keys and press enter. 
- (The popup also can be closed with the X at the right top corner)
- To choose another city, click on the name of the city on the main page.

## The UI
- Below the name of the city, you can see the current temperature and the icon and description of the weather.
- Next to the current values (below on mobile view) you can see a weather forecast for the next seven days.
- Below the forecast table a graph shows the expected maximum values of the next seven days.

