const express = require('express');
const graphqlHTTP= require('express-graphql');
const schema = require('../server/schema/schema.jsx');

const app = express();
const mongoose= require('mongoose');

const {MONGODB} = require('./config.js');
mongoose.connect(MONGODB,{useNewUrlParser:true}).then(()=>{
    return app.listen({port:4000});
}).then((res)=>{
    console.log(`Server beží na ${res.url}`);
});
const typeDefs=gql`
    type Post{
        id: ID!
        name:String!
        autor: String!
        logo: String!
        text: String!
        akordy: String!
    }
    type Query{
        getpost:[Post]
    }
`;

app.use('/graphql',graphqlHTTP({
    schema: schema,
    graphiql:true
}))

/*app.listen(4000,()=>{
    console.log('port 4000');
});*/