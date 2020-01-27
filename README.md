# venstore-be

https://venstore-api.herokuapp.com/

### Endpoints
| Method      | Description    | Endpoints    | BODY |
| :------------- | :----------: | -----------: | -----------: | 
|  POST | Add product   | /products    |  { name:"String",description:"String",price:"float",category:"String",color:"String", image:"File JPG/PNG" }   | 
| GET   | Fetch all products | /products | N/A    | 
|  GET | Fetch product by Id   | /products/:id | N/A    |
| PATCH  | Update product | /products/:id | { name:"String",description:"String",price:"float",category:"String",color:"String", image:"File JPG/PNG" }    | 
| DELETE  | Delete product | /products/:id | N/A    | 