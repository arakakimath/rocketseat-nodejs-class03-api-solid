import '@fastify/jwt'

declare module '@fastify/jwt' {
  export interface fastifyJwt {
    // payload: { id: number } // payload type is used for signing and verifying
    user: {
      sub: string
      // id: number
      // name: string
      // age: number
    }
  }
}
