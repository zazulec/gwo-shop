# GWO shop - online bookstore
Simple App giving the user the opportunity to choose and buy books in the store.

## Table of contents
* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## General info
The project was created for the purposes of recruitment. My task was to create a frontend layer with the appropriate requirements.

The application allows the user to:
* browsing available book collections, 
* adding them to the basket,
* shopping operations in the basket,
* purchase of books.

I wrote the application in typescript which was not required in the project, my motivation was to learn this coding language even better.

I am aware that the application is not outstanding in terms of UX / UI. However, that was not her goal, I focused on perfect functionality.

## Screenshots

Login Page
<img width="1440" alt="Zrzut ekranu 2020-11-29 o 00 14 56" src="https://user-images.githubusercontent.com/60104519/100527992-103c0d00-31d8-11eb-9d08-ca5e36d53cff.png">

Main Page
<img width="1439" alt="Zrzut ekranu 2020-11-29 o 00 17 41" src="https://user-images.githubusercontent.com/60104519/100528018-4d080400-31d8-11eb-9302-1cff19a537a2.png">

Shopping Cart Page
<img width="1435" alt="Zrzut ekranu 2020-11-29 o 00 18 58" src="https://user-images.githubusercontent.com/60104519/100528034-7c1e7580-31d8-11eb-937a-a8cc4f78756f.png">

Order Page
<img width="1440" alt="Zrzut ekranu 2020-11-29 o 00 19 56" src="https://user-images.githubusercontent.com/60104519/100528047-a1ab7f00-31d8-11eb-9397-5afb8e06a71b.png">

## Technologies
### Front
* TypeScript - version 3.9.3
* ReactJS - version 17.0.1
* React-Redux - version 7.2.2
* Redux-thunk - version 2.3.0
* Material-UI - version 4.11.1
* Scss - version 4.14.1

## Setup
To run the application locally first of all ypu need to use any IDE(Visual Studio Code) Next step , you must turn on the backend server and the frontend application. Below are the installation instructions.

Backend server install.
Type in terminal:
```bash
cd api
npm install
npm start
```
Frontend application install.
Type in terminal:
```bash
cd front
npm install
npm start
```

## Features
List of features ready and TODOs for future development
* user login
* viewing the contents of the online bookstore
* adding books to the basket
* manipulations in the basket (adding the number of copies, removing from the basket, price control)
* displaying the receipt (number of pieces)
* user information collection and validation
* Sending the order and providing information to the user

## Status
Project is: _finished_. The application meets all the assumptions of the project, so at the moment I do not plan to develop it further. However, I will consider connecting Stripe payments in the future.

## Inspiration
Project created for recruitment purposes. It allows me to delve deeper into typescript.
[@recruitment task](https://gitlab.gwo.pl/recruitment/react-task)

## Contact
Front-End part created by Paweł Zarzycki / pawelzarzyckimail@gmail.com - feel free to contact me!