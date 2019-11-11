# Simple service exposed by GraphQL

## Choosing stack

The service exposes simple GraphQL api so that we can use the service in some simple client-server graphql communication.

I reviewed a few projects:

- <https://github.com/graphql-java-kickstart/graphql-spring-boot> code first, spring integration
- <https://github.com/Enigmatis/graphql-java-annotations> (code first)
- <https://github.com/leangen/GraphQL-SPQR> (code first)
- <https://github.com/Distelli/graphql-apigen> (schema first)
- <https://graphql-code-generator.com/docs/plugins/java> (very promising, client and server)

Initially, to create simple server application, I decided to use graphql-spring-boot

- supports define api as graphql schema and map definitions to resolvers
- integration with spring boot
- live community (38 contributors)

## Smoke test

```shell
mvn spring-boot:run
http://localhost:9001/graphiql
```
