package gft.gql;

import com.coxautodev.graphql.tools.GraphQLResolver;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import gft.gql.models.Book;
import gft.gql.data.AuthorsStorage;
import gft.gql.models.Author;

@Component
class BookResolver implements GraphQLResolver<Book> {

    @Autowired
    AuthorsStorage authorsStorage;

    public Author author(Book book) {
       return authorsStorage.GetAuthor(book.getAuthorId());
    }
}