# API Documentation Question App

List of available endpoints:

- `POST /register`
- `POST /login`
- `POST / questions`
- `GET /questions?page=${pageNumber}`
- `GET /questions/:uuid`
- `DELETE /questions/:uuid`
- `PATCH /questions/:uuid`



### REGISTER USER
* **URL**

  /register

* **Method:**

  `POST`
  
*  **Query Params**

   none

* **Data Params**

  ```json
    {
        "email":"string",
        "password":"string"
    }
  ```

* **Headers**

  none

* **Success Response:**
  
  <_What should the status code be on success and is there any returned data? This is useful when people need to to know what their callbacks should expect!_>

  * **Code:** 201 <br />
    **Content:** 
    ```json
    {
        "message": "Register Success!",
        "email": "string",
    }
    ```
 
* **Error Response:**

  <_Most endpoints will have many ways they can fail. From unauthorized access, to wrongful parameters etc. All of those should be liste d here. It might seem repetitive, but it helps prevent assumptions from being made where they should be._>

  * **Code:** 500 <br />
    **Content:** `{ errors : ["Internal server error"] }`

    OR

  * **Code:** 400 <br />
    **Content:** `{ errors : ["Email is Required"] }`

    OR

  * **Code:** 400 <br />
    **Content:** `{ errors : ["Email already registered"] }`


### LOGIN USER
* **URL**

  /login

* **Method:**

  `POST`
  
*  **Query Params**

   none

* **Data Params**

  ```json
    {
        "email":"string",
        "password":"string"
    }
  ```

* **Headers**

  none

* **Success Response:**
  
  <_What should the status code be on success and is there any returned data? This is useful when people need to to know what their callbacks should expect!_>

  * **Code:** 200 <br />
    **Content:** 
    ```json
    {
        "message": "Login Success!",
        "id": "integer",
        "email": "string",
        "token": "string"
    }
    ```
 
* **Error Response:**

  <_Most endpoints will have many ways they can fail. From unauthorized access, to wrongful parameters etc. All of those should be liste d here. It might seem repetitive, but it helps prevent assumptions from being made where they should be._>

  * **Code:** 500 <br />
    **Content:** `{ errors : ["Internal server error"] }`

    OR

  * **Code:** 400 <br />
    **Content:** `{ errors : ["Invalid email or password"] }`


### CREATE NEW QUESTION
* **URL**

  /questions

* **Method:**

  `POST`
  
*  **Query Params**

   none

* **Data Params**

  ```json
    {
        "question":"string",
        "isActive":"boolean"
    }
  ```

* **Headers**

  ```json
  token: "string"
  ```

* **Success Response:**
  
  <_What should the status code be on success and is there any returned data? This is useful when people need to to know what their callbacks should expect!_>

  * **Code:** 201 <br />
    **Content:** 
    ```json
    {
        "message": "Success Create new Question",
        "newQuestion": {
            "id": "integer",
            "uuid": "uuid",
            "question": "string",
            "createdBy": "string",
            "updatedBy": "string",
            "isActive": "boolean",
            "updatedAt": "timestamps",
            "createdAt": "timestamps"
        }
    }
    ```
 
* **Error Response:**

  <_Most endpoints will have many ways they can fail. From unauthorized access, to wrongful parameters etc. All of those should be liste d here. It might seem repetitive, but it helps prevent assumptions from being made where they should be._>

  * **Code:** 500 <br />
    **Content:** `{ errors : ["Internal server error"] }`

    OR

  * **Code:** 400 <br />
    **Content:** `{ errors : ["Question is Required"] }`

    OR

  * **Code:** 401 <br />
    **Content:** `{ errors : ["Failed to Authenticate!"] }`


### GET QUESTIONS BY PAGE
* **URL**

  /questions

* **Method:**

  `GET`
  
*  **Query Params**

   `page="integer"`

* **Data Params**

  none

* **Headers**

  none

* **Success Response:**
  
  <_What should the status code be on success and is there any returned data? This is useful when people need to to know what their callbacks should expect!_>

  * **Code:** 200 <br />
    **Content:** 
    ```json
    {
        "qeustion": [
            {
                "id": "integer",
                "uuid": "uuid",
                "question": "string",
                "createdBy": "string",
                "updatedBy": "string",
                "isActive": "boolean",
                "createdAt": "timestamps",
                "updatedAt": "timestamps"
            },
        ]
    }
    ```
 
* **Error Response:**

  <_Most endpoints will have many ways they can fail. From unauthorized access, to wrongful parameters etc. All of those should be liste d here. It might seem repetitive, but it helps prevent assumptions from being made where they should be._>

  * **Code:** 500 <br />
    **Content:** `{ errors : ["Internal server error"] }`


### GET QUESTION BY UUID
* **URL**

  /questions

* **Method:**

  `GET`
  
*  **Query Params**

   none

*  **URL Params**

   **Required:**

   `uuid="uuid"`

* **Data Params**

  none

* **Headers**

  none

* **Success Response:**
  
  <_What should the status code be on success and is there any returned data? This is useful when people need to to know what their callbacks should expect!_>

  * **Code:** 200 <br />
    **Content:** 
    ```json
    {
        "questionByUuid": {
            "id": "integer",
            "uuid": "uuid",
            "question": "string",
            "createdBy": "string",
            "updatedBy": "string",
            "isActive": "boolean",
            "createdAt": "timestamps",
            "updatedAt": "timestamps"
        }
    }
    ```
 
* **Error Response:**

  <_Most endpoints will have many ways they can fail. From unauthorized access, to wrongful parameters etc. All of those should be liste d here. It might seem repetitive, but it helps prevent assumptions from being made where they should be._>

  * **Code:** 500 <br />
    **Content:** `{ errors : ["Internal server error"] }`

    OR

  * **Code:** 404 <br />
    **Content:** `{ errors : ["Data Not Found"] }`


### DELETE QUESTION BY UUID
* **URL**

  /questions

* **Method:**

  `DELETE`
  
*  **Query Params**

   none

*  **URL Params**

   **Required:**

   `uuid="uuid"`

* **Data Params**

  none

* **Headers**

  ```json
  token: "string"
  ```

* **Success Response:**
  
  <_What should the status code be on success and is there any returned data? This is useful when people need to to know what their callbacks should expect!_>

  * **Code:** 200 <br />
    **Content:** 
    ```json
    {
        "message": "Success Delete Question!"
    }
    ```
 
* **Error Response:**

  <_Most endpoints will have many ways they can fail. From unauthorized access, to wrongful parameters etc. All of those should be liste d here. It might seem repetitive, but it helps prevent assumptions from being made where they should be._>

  * **Code:** 500 <br />
    **Content:** `{ errors : ["Internal server error"] }`

    OR

  * **Code:** 404 <br />
    **Content:** `{ errors : ["Data Not Found"] }`

    OR

  * **Code:** 401 <br />
    **Content:** `{ errors : ["Failed to Authenticate!"] }`


### UPDATE QUESTION BY UUID
* **URL**

  /questions

* **Method:**

  `PATCH`
  
*  **Query Params**

   none

*  **URL Params**

   **Required:**

   `uuid="uuid"`

* **Data Params**

  ```json
    {
        "question":"string",
        "isActive":"boolean"
    }
  ```

* **Headers**

  ```json
  token: "string"
  ```

* **Success Response:**
  
  <_What should the status code be on success and is there any returned data? This is useful when people need to to know what their callbacks should expect!_>

  * **Code:** 200 <br />
    **Content:** 
    ```json
    {
        "message": "Success Edit Question!"
    }
    ```
 
* **Error Response:**

  <_Most endpoints will have many ways they can fail. From unauthorized access, to wrongful parameters etc. All of those should be liste d here. It might seem repetitive, but it helps prevent assumptions from being made where they should be._>

  * **Code:** 500 <br />
    **Content:** `{ errors : ["Internal server error"] }`

    OR

  * **Code:** 404 <br />
    **Content:** `{ errors : ["Data Not Found"] }`

    OR

  * **Code:** 401 <br />
    **Content:** `{ errors : ["Failed to Authenticate!"] }`

    OR

  * **Code:** 400 <br />
    **Content:** `{ errors : ["Question is Required"] }`
