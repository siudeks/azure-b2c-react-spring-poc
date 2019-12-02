package gft.gql.data;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Random;
import java.util.Set;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import lombok.var;
import net.moznion.random.string.RandomStringGenerator;
import org.ajbrown.namemachine.NameGenerator;
import org.springframework.stereotype.Component;
import org.springframework.util.ResourceUtils;
import java.nio.file.Files;
import java.io.File;

import gft.gql.models.Author;
import gft.gql.models.Book;

@Component
public class InMemoryMockStorage implements BooksStorage, AuthorsStorage {

    private final int BOOKS_TO_GENERATE = 10;

    private final String BOOK_ISBN_PATTERN = "\\d{3}-\\d{1}-\\d{3}-\\d{5}-\\d{1}";
    private final Set<String> LANGUAGES_OR_FRAMEWORKS;
    private final Set<String> RECIPIENTS;
    private final Set<String> PARTS;
    private final Set<String> FORMATS;

    private String description;

    private NameGenerator nameGenerator;
    private RandomStringGenerator randomStringGenerator;

    private List<Book> books;
    private List<Author> authors;

    public InMemoryMockStorage() {
        LANGUAGES_OR_FRAMEWORKS = Stream.of("JAVA", "C#", "Java Script", "Python", "Type Script", "F#", ".NET",
                "Angular", "React", "Spring Boot", "WPF").collect(Collectors.toCollection(HashSet::new));
        RECIPIENTS = Stream.of("dummies", "beginners", "pr0s", "code monkeys")
                .collect(Collectors.toCollection(HashSet::new));
        PARTS = Stream.of("", " part 1", " part 2", " new edition", " second edition", " II", " III")
                .collect(Collectors.toCollection(HashSet::new));
        FORMATS = Stream.of("%s for %s%s", "%s and %s%s", "%s and you", "Just %s", "The Art of %s: %s edition")
                .collect(Collectors.toCollection(HashSet::new));

        nameGenerator = new NameGenerator();
        randomStringGenerator = new RandomStringGenerator();
        description = ReadDescription();
        GenerateMockData();
    }

    @Override
    public List<Book> GetAllBooks() {
        return books;
    }

    @Override
    public Book GetBook(int id) {
        return books.stream().filter(b -> b.getId() == id).findFirst().orElse(null);
    }

    @Override
    public Author GetAuthor(int id) {
        return authors.stream().filter(b -> b.getId() == id).findFirst().orElse(null);
    }

    private void GenerateMockData() {
        books = new ArrayList<Book>(BOOKS_TO_GENERATE);
        authors = new ArrayList<Author>(BOOKS_TO_GENERATE);
        for (int i = 0; i < BOOKS_TO_GENERATE; i++) {
            books.add(GenerateBookMockData(i));
            authors.add(GenerateAuthorMockData(i));
        }
    }

    public Book GenerateBookMockData(int bookId) {
        return new Book(bookId, generateRandomBookName(),
                String.format("ISBN %s", randomStringGenerator.generateByRegex(BOOK_ISBN_PATTERN)), description,
                bookId);
    }

    private Author GenerateAuthorMockData(int bookId) {
        var name = nameGenerator.generateName();
        var result = new Author(bookId, name.getFirstName(), name.getLastName());
        return result;
    }

    private String generateRandomBookName() {
        return String.format(getRandomSetElement(FORMATS), getRandomSetElement(LANGUAGES_OR_FRAMEWORKS),
                getRandomSetElement(RECIPIENTS), getRandomSetElement(PARTS));
    }

    private String ReadDescription() {
        try {
            File file = ResourceUtils.getFile("classpath:lorem-ipsum.txt");
            return new String(Files.readAllBytes(file.toPath()));
        } catch (Exception e) {
            return "Error occurred - no descrption";
        }
    }

    // From stackoverflow <3
    private static <E> E getRandomSetElement(Set<E> set) {
        return set.stream().skip(new Random().nextInt(set.size())).findFirst().orElse(null);
    }

}