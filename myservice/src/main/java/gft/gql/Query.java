package gft.gql;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.Random;
import java.util.Set;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import com.coxautodev.graphql.tools.GraphQLQueryResolver;

import org.springframework.stereotype.Component;

import lombok.var;
import net.moznion.random.string.RandomStringGenerator;
import gft.gql.models.Book;

@Component
class Query implements GraphQLQueryResolver {

    private final int BOOKS_TO_GENERATE = 100;

    private final String BOOK_ISBN_PATTERN = "\\d{3}-\\d{1}-\\d{3}-\\d{5}-\\d{1}";
    private final Set<String> LANGUAGES_OR_FRAMEWORKS;
    private final Set<String> RECIPIENTS;
    private final Set<String> PARTS;
    private final Set<String> FORMATS;

    public Query() {
        LANGUAGES_OR_FRAMEWORKS = Stream.of("JAVA", "C#", "Java Script", "Python", "Type Script", "F#", ".NET",
                "Angular", "React", "Spring Boot", "WPF").collect(Collectors.toCollection(HashSet::new));
        RECIPIENTS = Stream.of("dummies", "beginners", "pr0s", "code monkeys")
                .collect(Collectors.toCollection(HashSet::new));
        PARTS = Stream.of("", " part 1", " part 2", " new edition", " second edition", " II", " III")
                .collect(Collectors.toCollection(HashSet::new));
        FORMATS = Stream.of("%s for %s%s", "%s and %s%s", "%s and you", "Just %s", "The Art of %s: %s edition")
                .collect(Collectors.toCollection(HashSet::new));
    }

    public Iterable<Book> books() {
        var generator = new RandomStringGenerator();
        var books = new ArrayList<Book>(BOOKS_TO_GENERATE);
        for (int i = 0; i < BOOKS_TO_GENERATE; i++) {
            books.add(new Book(i, generateRandomBookName(), String.format("ISBN %s", generator.generateByRegex(BOOK_ISBN_PATTERN)) , i));
        }
        return books;
    }

    private String generateRandomBookName() {
        return String.format(getRandomSetElement(FORMATS), getRandomSetElement(LANGUAGES_OR_FRAMEWORKS),
                getRandomSetElement(RECIPIENTS), getRandomSetElement(PARTS));
    }

    // From stackoverflow <3
    static <E> E getRandomSetElement(Set<E> set) {
        return set.stream().skip(new Random().nextInt(set.size())).findFirst().orElse(null);
    }

}
