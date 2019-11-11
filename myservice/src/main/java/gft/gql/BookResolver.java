package gft.gql;

import com.coxautodev.graphql.tools.GraphQLResolver;

import org.springframework.stereotype.Component;

import lombok.var;

@Component
class BookResolver implements GraphQLResolver<Book> {
    public Author author(Book book) {
        var name = Integer.toString(book.getAuthorId());
        var result = new Author();
        result.setId(book.getAuthorId());
        result.setName(name);
        return result;
    }
}