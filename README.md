# DM124 - Final RESTful API with NodeJS

Trabalho de conclusão da disciplina DM124 (Desenvolvimento de Web Services sob a Plataforma NodeJS).
**Para as requisições que exigem autenticação (Basic Auth) deve ser feita utilizando as mesmas credenciais adotadas na sala de aula*

## Instructions

### Retrieve all deliveries

Request Method: **GET**
Endpoint: https://dm124-final-rodrigo.azurewebsites.net/api/deliveries

### Retrieve delivery by ID

Request Method: **GET**
Endpoint: https://dm124-final-rodrigo.azurewebsites.net/api/deliveries/<Your_deliveryID_here>

### Create delivery
*(Requires Authentication)**

Request Method: **POST**
Endpoint: https://dm124-final-rodrigo.azurewebsites.net/api/deliveries/
Body: 
```json
{
	"orderId" : Integer,
	"clientId" : Integer,
	"clientName" : String,
	"clientCPF" : Integer,
	"isClientReceiver" : Boolean,
	"geoLocation" : String
}
```

### Update delivery by ID (Inside the Body feel free to only send the keys and their respective values that will be updated)
*(Requires Authentication)**

Request Method: **PATCH**
Endpoint: https://dm124-final-rodrigo.azurewebsites.net/api/deliveries/<Your_deliveryID_here>
Body: 

```json
{
	"orderId" : Integer,
	"clientId" : Integer,
	"clientName" : String,
	"clientCPF" : Integer,
	"isClientReceiver" : Boolean,
	"geoLocation" : String
}
```

### Delete delivery by ID
*(Requires Authentication)**

Request Method: **DELETE**
Endpoint: https://dm124-final-rodrigo.azurewebsites.net/api/deliveries/<Your_deliveryID_here>

## References

- [DM124 Classes](https://github.com/inatel/DM124)