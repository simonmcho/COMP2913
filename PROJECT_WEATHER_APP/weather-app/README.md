# Simple Weather App
This app will display the current and upcoming weather for one of five cities selected.     
     
## Pre-requisites    
• Knowledge of JavaScript ES6    
• Knowledge of JSX, REACT Props, REACT States       
    
## How to get started
• Install dependencies by running `npm install`. I recommend `yarn install` for a faster installation    
• Run the app with `yarn start`. The `npm` command can work too            
• Reference [Yahoo Weather API Developer Documentation] (https://developer.yahoo.com/weather/) for details    
    
### User stories
[x] When selecting one of the cities from the dropdown, the view should display the weather information for that specific city    
[x] Make HTTP request to fetch the data    
[x] Display images for each weather type. A rainy day should display a rainy icon    
[x] Display temperature in Celsius. The API request returns data in Fahrenheit format    

### Room for Improvement
• I started this application within `App.js`, and then started refactoring/componentizing my code after writing out the application. It would have been better to plan out which components I would have wanted to use    
• The result of the above means that the logic of the API request is made at the top level of `WeatherApp.js`. I could have handled the logic in `CitySelectionsjs` and then pass data up in to the state of `WeatherApp.js`. This way, the same data can be used when it is passed down to other child components, such as `WeatherStatus.js`        
