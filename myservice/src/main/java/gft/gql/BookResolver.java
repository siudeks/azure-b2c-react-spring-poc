package gft.gql;

import com.coxautodev.graphql.tools.GraphQLResolver;

import org.springframework.stereotype.Component;
import org.ajbrown.namemachine.NameGenerator;
import gft.gql.models.Book;
import gft.gql.models.Author;

import lombok.var;

@Component
class BookResolver implements GraphQLResolver<Book> {

    private static NameGenerator nameGenerator = new NameGenerator();

    public Author author(Book book) {
        var name = nameGenerator.generateName();
        var nameId = book.getAuthorId();
        var result = new Author(nameId, name.getFirstName(), name.getLastName());
        return result;
    }
}