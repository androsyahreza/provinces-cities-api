# provinces-cities-api
## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [RESTful API Endpoints](#restful-api-endpoints)
* [Setup](#setup)

## General info
![tech-stack](/assets/images/techStack.png)

This is a simple provinces and cities REST-API project using nodeJS, expressJS, and sequelize. The database used in this project is MySQL. 
### Database Design
![erd](/assets/images/erd.png)

In this simple project there are two tables that are related to each other. The table is provinces and cities, the relationship between the two is one-to-many (provinces has many cities). The picture above shows the entity relationship diagram on this project.

### Database Setup
Please note that to run this application, the first thing to do is create a database. here is the query :
```
CREATE DATABASE provinces_cities_api;
```
Don't forget to configure the database username and password on `/config/config.json`

Database model can be created using the following command:
```
npx sequelize-cli model:generate --name Provinces --attributes name:string
```
```
npx sequelize-cli model:generate --name Cities --attributes name:string,provinceId:integer
```
after the model is created, please configure the model on `/models/provinces.js` and `/models/cities.js` with the following code:
```javascript
// associate function in provinces.js 
static associate(models) {
  // define association here
  Provinces.hasMany(models.Cities);
}
```
```javascript
// associate function in cities.js 
static associate(models) {
  // define association here
  Cities.belongsTo(models.Provinces, {
    foreignKey: "provinceId"
  });
}
```
then add references to the migration file on `/migrations/generatednumber-created-cities.js` with the following code:
```javascript
provinceId: {
  type: Sequelize.INTEGER,
  allowNull: false,
  references: {         // Cities belongsTo Provinces
    model: 'Provinces',
    key: 'id'
  }
},
```
after all stages are completed, migration can be done with the following command:
```
npx sequelize-cli db:migrate
```
## Technologies
Project is created with:
* node : 14.16.1
* express : 4.18.2
* sequelize : 6.27.0
* mysql2 : 2.3.3

## RESTful API Endpoints
RESTful API Endpoints are shown in the table below:
| Method | Endpoint | Description |
| --- | --- | --- |
| GET | /provinces | List of provinces |
| GET | /provinces/{id} | View a province |
| GET | /provinces/{id}/city | View a province include cities |
| POST | /provinces | Create new province |
| PUT | /provinces{id} | Update a province |
| DELETE | /provinces{id} | Delete a province |
| GET | /cities | List of cities |
| GET | /cities/{id} | View a city |
| POST | /cities | Create new city |
| PUT | /cities{id} | Update a city |
| DELETE | /cities{id} | Delete a city |

## Setup
To run this project, install it locally using npm:
```
$ cd provinces-cities-api
$ npm install
$ npm start
```
