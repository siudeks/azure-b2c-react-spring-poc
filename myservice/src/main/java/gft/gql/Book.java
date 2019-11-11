package gft.gql;

import lombok.Data;

@Data
public class Book {
    private int id;
    private String name;
    private int authorId;
}