# CSDS-383-No-Names-Layered

## Versions
Presentation Layer: Node v18.12.0\
Business and Persistence Layer: JDK version 19 (Amazon Corretto)\
Data Layer: PostgresSQL in the cloud via https://aws.amazon.com/rds/

## Explanation of Project
The goal of this project was to develop an application using a layered architecture. The application had the following requirements:

- The client should be able to execute and interact with the application via a web browser.
- The client should be able to create events.
  - Each event should have the following attributes:
    - Event Id: A UUID. If the UUID is not provided, the application should generate one for the
    - event.
    - Event Date
      - The event date must follow the format: YYYY-MM-DD
    - Event Time: Date of the event.
      - The event time must follow the format: HH:MM AM/PM 
    - Event Title: Title of the event.
      - The event title should not be longer than 255 characters.
    - Event Description: Description of the event.
    - The event title should not be longer than 600 characters.
    - Event Host Email: The email of the host of the event.
      - The event host's email should be valid.
      - Invalid emails should be rejected.
- The client should be able to register participants to events.
  - Each event participant should have the following attributes:
    - Event Participant Id:  A UUID. If the UUID is not provided, the application should generate one for the participant.
    - Event Id: Id of the event to which the participant is registered to.
    - Event participant name: Name of the event participant.
      - The name of the event participant should not be longer than 600 characters.
    - Event participant email: Email of the event participant.
      - The event participant's email should be valid string (format). No need to authenticate.
      - Invalid emails should be rejected.
- All events and event participants should be stored in a database (relational databases are recommended, but any database works for this exercise).
- The client should be able to list all the events and event participants available stored in the system (database).
- The application should be layered and should have at least four main layers, teams might choose to reorganize the layers as needed:
  - Presentation Layer
  - Business Layer or Service Layer.
  - Persistence Layer
  - Additionally, a Data Layer is required for the Database. 
- The application should have at least three tiers. For this exercise all the tiers can be located in the same machine.
  - Presentation Layer - Single Deployment Unit
  - Business Layer or Service Layer, plus Persistence Layer - Single Deployment Unit
  - Data Layer - Single Deployment Unit
- This application should not use micro-services.

## How to run the project
- Make sure you have the relevant version of Node and Java Development Kit installed (see [Versions Section](#versions))
- Clone the repository
- Navigate into the "Business and Persistence Layer" folder with ```cd '.\Business and Persistence Layer\layered'```
- Start the backend by either:
  - running the jar file with ```java -jar ```
  - OR building the java project with Maven and running "LayeredApplication.java"
- In a NEW terminal, navigate into the "presentation-layer" with ```cd presentation-layer```
- Start the presenation layer by running the following commands in order:
  - ```npm install```
  - ```npm run start```
- Open a browser and navigate to [http://localhost:3000](http://localhost:3000)
