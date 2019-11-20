package gft.gql;

import com.coxautodev.graphql.tools.GraphQLQueryResolver;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import gft.gql.data.BooksStorage;
import gft.gql.models.Book;

@Component
class Query implements GraphQLQueryResolver {

    @Autowired
    BooksStorage booksStorage;

    public Iterable<Book> books() {
        return booksStorage.GetAllBooks();
    }

    public Book book(int id) {
        return booksStorage.GetBook(id);
    }

}
