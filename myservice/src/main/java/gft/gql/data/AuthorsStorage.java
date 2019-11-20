package gft.gql.data;

import org.springframework.stereotype.Component;

import gft.gql.models.Author;

@Component
public interface AuthorsStorage {

    Author GetAuthor(int id);
    
}