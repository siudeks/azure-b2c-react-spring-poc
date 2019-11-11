package gft.gql;

import com.coxautodev.graphql.tools.GraphQLQueryResolver;
import org.springframework.stereotype.Component;

import io.vavr.collection.List;
import lombok.val;

@Component
class Query implements GraphQLQueryResolver {

    public Iterable<Book> books() {
        val book = new Book();
        book.setAuthorId(2);
        book.setName("Siudek");
        book.setId(1);
        return List.of(book);
    }
}
