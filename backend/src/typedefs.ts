export const typeDefs = `
  type User {
    email: String!
    name: String
  }

  type Post {
    title: String!,
    content: String
  }

  type Query {
    allUsers: [User],
    allPosts: [Post]

  }
`;

