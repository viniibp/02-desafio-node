import { randomUUID } from "node:crypto";
import type { FastifyInstance } from "fastify";
import { z } from "zod";

import { knex } from "../database";

export async function usersRoutes(app: FastifyInstance) {
  app.get("/", (request, reply) => {
    return "Hello";
  });
  
  app.post('/', (request, reply) => {
    return 
  })
}
