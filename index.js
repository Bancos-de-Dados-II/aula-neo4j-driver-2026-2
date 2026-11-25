import neo4j from 'neo4j-driver';

let driver = neo4j.driver(
    "neo4j://localhost:7687",
    neo4j.auth.basic('neo4j', 'neo4j123')
);

let session = driver.session();

session.run('MATCH (u1:Usuario{email:$email}) MATCH (u1)-[:AMIGO*1..2]->(u2) RETURN u2.email',{
    email:'maria@gmail.com'
}).then(result =>{
    console.log(result.records.map(
        record => record.get('u2.email')));
});