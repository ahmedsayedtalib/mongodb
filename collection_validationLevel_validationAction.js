db.runCommand({
    collMod:"products",
    validator:{
$jsonSchema:{
    bsonType: "object",
    required: ["name","price","specs"],
    properties: {
        name: {
            bsonType: "string",
            description: "name field is required"
        },
        price: {
            bsonType: "number",
            description: "price field is required"
        },
        specs: {
        bsonType: "object",
        description: "specs are required"
    }}}},
validationLevel:"strict", // "strict" or "moderate",,
validationAction:"error" // "error" or "warn",,
})
