# WeatherApp Component

## Description
The WeatherApp component is a React component that allows users to search for weather information based on city names. It displays the current weather conditions, including temperature, humidity, wind speed, and an icon representing the weather condition.

## JSX Structure
The component is structured as follows:

- **Container:** The main container for the WeatherApp component. It contains the top bar, weather image, temperature, location, and data container.

- **Top Bar:** Contains an input field for entering city names and a search icon for initiating the search.

- **Weather Image:** Displays an icon representing the weather condition.

- **Weather Temp:** Displays the current temperature.

- **Weather Location:** Displays the name of the city for which weather information is being displayed.

- **Data Container:** Contains elements for displaying humidity and wind speed information.

## CSS Styles
The component's styles are defined in the `WeatherApp.css` file. The styles are organized to provide a visually appealing and responsive layout for the component. Key styles include:

- **Container:** Sets the width, height, margin, and background color of the component.

- **Top Bar:** Styles the input field and search icon.

- **Weather Image:** Centers the weather icon.

- **Weather Temp:** Styles the temperature display.

- **Weather Location:** Styles the city name display.

- **Data Container:** Styles for the container displaying humidity and wind speed information.

- **Element:** Styles for individual data elements (humidity and wind speed).

- **Warning:** Styles for displaying warning messages.

## Functionality
The component uses the OpenWeatherMap API to fetch weather information based on the city name entered by the user. It handles errors such as invalid city names or failed API requests by displaying appropriate warning messages.

## Dependencies
The component relies on the following assets for weather icons:
- clear.png
- cloud.png
- drizzle.png
- humidity.png
- rain.png
- search.png
- snow.png
- wind.png

## Usage
To use the WeatherApp component, include it in your React application and ensure that the `WeatherApp.css` file and the required assets are properly imported.

![image](https://github.com/i-sayankh/weather-app/assets/100083146/1ca7d178-ded7-45be-b4bc-a9fea9040fc7)
