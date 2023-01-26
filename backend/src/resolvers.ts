import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const resolvers = {
    Query: {
      allUsers: () => {
        return prisma.user.findMany();
      },
      allPosts: () => {
        return prisma.post.findMany();
      },
      findPost: (id:string) => {
        return prisma.post.findUnique(id);
      }
    }
  };