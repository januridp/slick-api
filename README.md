# Web Service For Selling Rocket and Components

RESTful API for selling rockets and it's components.

## Endpoints

| Method  | Endpoint          | Description                 | Data                  |
|---------|-------------------|-----------------------------|-----------------------|
| GET     | /products      | List of products            | `[{}, {}, {}]`        |
| GET     | /products/:id  | View a products             | `{}`                  |
| POST    | /products      | Create a new product        | `{"info": ""}`        |
| PUT     | /products/:id  | Update a product            | `{"info": ""}`        |
| DELETE  | /products/:id  | Delete a product            | `{"info": ""}`        |

### Credit
[rizafahmi](https://github.com/rizafahmi) repo for workshop by [hacktiv8] (https://github.com/hacktiv8)