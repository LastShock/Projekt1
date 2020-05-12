const graphql = require('graphql');
const {GraphQLObjectType, GraphQLString, GraphQLSchema} = graphql;
const _= require('lodash');

var songs=[
    {id:'1',autor: 'Nirvana',name:'Sappy', logo:'', text:'' , akordy:''},
    {id:'2',autor: 'Nirvana',name:'Rape me', logo:'', text:'', akordy:''},
    {id:'3',autor: 'Bush',name:'Glycerin', logo:'', tex:'',akordy:''},
];

const SongType= new GraphQLObjectType({
    name:'Song',
    fields:()=>({
        id: {type:GraphQLString},
        name:{type:GraphQLString},
        autor: {type:GraphQLString},
        logo: {type:GraphQLString},
        text: {type:GraphQLString},
        akordy: {type:GraphQLString}
    })
});

const RootQuery= new GraphQLObjectType({
    name:'RootQueryType',
    fields:{
        song:{
            type: SongType,
            args: {id: {type:GraphQLString}},
            resolve(parent,args){
               return _.find(songs,{id:args.id});
            }
        }
    }
})





module.exports= new GraphQLSchema({
    query: RootQuery
})