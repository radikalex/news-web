# News Web 🖥

This project has been made as the first small project in React. The idea with this project was to practice the use of Context API, requests to an API with axios and additionally the use of SASS for the style of the web.

The API chosen to make the requests is [New York Times API](https://developer.nytimes.com/apis) and in my case specifically Top Stories API. 
The idea was to make requests to this API and display them using the Context API and React component states. To print the news, it was chosen to give it a style similar to an old newspaper.

## Technologies used 🛠
- React
- React Router DOM
- Context API
- Axios
- SASS

## Previews 👀 

### Home

This page is the main one, it only shows a box with information about the project and its different views.

![image](/src/assets/preview-home.png)

### Articles

This is the most important page. In it the different news that are obtained from the API are painted. Two filters appear at the top of this page. The first is to choose the news section, and the second is to filter the news by title.

![image](/src/assets/preview-articles.gif)

### Add new article

This page only contains a form to add a new item. The form has validations so that certain fields are not empty. Once the information is sent, it is saved in the localStorage to be used in the 'Articles' view.

![image](/src/assets/preview-new.png)

## Pre-requirements 📣

If you want to use the repository locally follow these steps:

1 - In order to start the project first make a git clone of this project.

2 - Once the project is cloned, you must install the necessary modules with npm:
> npm install

3 - The project is ready to start
> npm start

Made by [Alex Jiménez](https://github.com/radikalex) 😁
