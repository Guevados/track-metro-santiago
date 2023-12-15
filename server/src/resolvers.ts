export const resolvers ={
    Query: {
        hello: () => "Hello, world!",

        busStop: (_, {id}, {dataSources}) => {
            return dataSources.trackAPI.getBusStop(id)
        },
    },
}