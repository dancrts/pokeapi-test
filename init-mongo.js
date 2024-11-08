conn = new Mongo();
db = conn.getDB("pokeapi");

db.createUser({
    user: "PokeApiAdmin",
    pwd: "123PokeApi",
    roles: [
        {
            role: "readWrite",
            db: "pokeapi"
        }
    ]
})