// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
  type User {
        _id: ID
        username: String
        email: String
        bookCount: Int
        savedBooks: [Book]
    }

    type Book {
        bookId: String
        title: String
        author: Author
        description: String
        image: String
        link: String
    }

    type Author {
        name: String
        books: [Book]
    }

    type Query {
        me: User
        users: [User]
        user(username: String!): User
        books: [Book]
        authors: [Author]
        
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addBook(bookText: String!): Book
       
    }

    type Auth {
        token: ID!
        user: User
    }
`;

// export the typeDefs
module.exports = typeDefs;