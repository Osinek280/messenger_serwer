# DataBase for Messenger Clone App
This is a Messenger clone application built using React, TypeScript, Vite, React Router Dom, and CSS. It provides a user-friendly interface for sending messages and emoticons, conducting conversations with different users, and interacting with a database.
## Users Data
| username        | login              | password |
|-----------------|--------------------|----------|
| John Doe        | `john@example.com` | 123      |
| Jane Smith      | `jane@example.com` | 123      |
| Alice Johnson   | `alice@example.com`| 123      |

## Features
- LOGIN SYSTEM
- SEND MESSAGES AND EMOTICONS 😎
- THE ABILITY TO CONDUCT CONVERSATIONS WITH DIFFERENT USERS
- COMMUNICATION WITH THE DATABASE
## Tech Stack
App:
- REACT
- TYPESCRIPT
- VITE
- REACT ROUTER DOM
- CSS

DATABASE:
- TYPESCRIPT
- CORS
- UUID
## Data structure
Users:
```
  id: string;
  img: string;
  username: string;
  login: string;
  password: string;
```
Converstations:
```
  id: string;
  usersId: string[];
  lastActive: number;
```
Messages:
```
  id: string;
  title: string;
  ownerId: string;
  conversationId: string;s
  date: number;
```


## API Reference

#### Get User

```http
  GET /user/:id
```

| Parameter | Type     | Description       |
| :-------- | :------- | :---------------- |
| `api_key` | `string` | Required. User ID |

Response:

- Success: Returns the user object if found.
- Error: Returns a 404 error if the user is not found.

Response Body:

```http
  {
    conversationId: string,
    secondUserName: string,
    secondUserImage: string,
    lastMessage: {
      id: string,
      title: string,
      ownerId: string',
      conversationId: string,
      date: number
  }
```

#### Get Conversations

```http
  GET /conversations?userId=:userId
```

| Parameter | Type     | Description       |
| :-------- | :------- | :---------------- |
| `userId`  | `string` | Required. User ID |

Response:

 - Success: Returns an array of conversations with details such as the conversation ID,   the second user's name and image, and the last message in the conversation.

Example:

```http
  GET /conversations?userId=462dbe84-b7b2-40f3-849b-2843627b06e9
```

#### Get Messages

```http
  GET /messages/:id
```

| Parameter | Type     | Description               |
| :-------- | :------- | :------------------------ |
| `userId`  | `string` | Required. Conversation ID |

Response:

- Success: Returns an array of messages for the conversation.

Example:

```http
  GET /messages/e8408761-aea6-4234-a531-4b83927df02a
```


#### Post Messages

```http
  GET /messages
```

| Parameter       | Type     | Description                       |
| :--------       | :------- | :-------------------------------- |
| `title`         | `string` | Required. Message title           |
| `ownerId`       | `string` | Required. ID of the message owner |
| `conversationId`| `string` | Required. ID of the conversation  |
| `date`          | `string` | Required. Timestamp of the message|

Response:

- Success: Returns a 200 OK response if the message was added successfully.

Example:

```http
  POST /messages
  
  {
    "title": "New Message",
    "ownerId": "462dbe84-b7b2-40f3-849b-2843627b06e9",
    "conversationId": "e8408761-aea6-4234-a531-4b83927df02a",
    "date": 1625136000
  }
```

#### Post login

```http
  POST /login
```

| Parameter | Type     | Description            |
| :-------- | :------- | :--------------------- |
| `login`   | `string` | Required. User login   |
| `password`| `string` | Required. User password|  

Response:

- Success: Returns a success message and the user object if the login is successful.
- Error: Returns a 401 unauthorized error if the login credentials are invalid.

Example:

```http
  POST /login

  {
    "login": "john@example.com",
    "password": "123"
  }
```

## Run Locally 🛠️

Clone the project

```bash
  git clone https://github.com/Osinek280/messenger_serwer
```

Go to the project directory

```bash
  cd messenger_app
```

Install dependencies

```bash
  npm install
```

Build the app

```bash
  npm run build
```

Start the server

```bash
  npm start
```