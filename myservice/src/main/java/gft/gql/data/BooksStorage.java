package gft.gql.data;

import java.util.List;

import org.springframework.stereotype.Component;

import gft.gql.models.Book;

@Component
public interface BooksStorage {

    List<Book> GetAllBooks();

    Book GetBook(int id);
    
}