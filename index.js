import neo4j from 'neo4j-driver';

let driver = neo4j.driver(
    "neo4j://localhost:7687",
    neo4j.auth.basic('neo4j', 'neo4j123')
);

let session = driver.session();

await driver.close();