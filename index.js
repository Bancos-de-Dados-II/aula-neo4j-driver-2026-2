import neo4j from 'neo4j-driver';

let driver = neo4j.driver(
    "neo4j://localhost:7687",
    neo4j.auth.basic('neo4j', 'neo4j123')
);

let session = driver.session();

session.run('MATCH (u1:Usuario{email:$email1}) MATCH (u2:Usuario{email:$email2}) MERGE (u1)-[:AMIGO{desde:date()}]->(u2)',
    {email1: 'maria@gmail.com', email2:'pedro@gmail.com'}
).then(result =>{
    console.log(result.summary.counters);
});