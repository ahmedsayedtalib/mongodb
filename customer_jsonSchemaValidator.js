db.createCollection("customers", {validator:{
    $jsonSchema:{
        bsonType:"object",
        required:["name", "email","address","phone"],
        properties: {
            name: {
                bsonType: "string",
                description: "name is a required field"
            },
            email:{
                bsonType: "string",
                description: "email is a required field"
            },
            address: {
                bsonType: "object",
                description: "address is a required field",
                properties: {
                    street: {
                        bsonType: "string"
                    },
                    city : {
                        bsonType: "string"
                    },
                    country: {
                        bsonType: "string"
                    }
                }
            },
            phone: {
                bsonType: "number",
                description: "phone field is required"
            }
        }
    }
}
})