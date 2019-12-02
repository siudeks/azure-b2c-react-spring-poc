package gft.gql;

import com.coxautodev.graphql.tools.GraphQLSubscriptionResolver;
import org.reactivestreams.Publisher;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import gft.gql.data.InMemoryMockStorage;
import gft.gql.models.Book;
import io.reactivex.rxjava3.core.BackpressureStrategy;
import io.reactivex.rxjava3.core.Observable;

import java.util.concurrent.TimeUnit;

@Component
class Subscription implements GraphQLSubscriptionResolver {

    @Autowired
    private InMemoryMockStorage generator;

    Publisher<Book> newBook() {
        return Observable.interval(1, TimeUnit.SECONDS).map(i -> generator.GenerateBookMockData(i.intValue()))
                .toFlowable(BackpressureStrategy.BUFFER);
    }

    Publisher<Integer> deletedBook() {
        return Observable.interval(5, TimeUnit.SECONDS).map(i -> i.intValue()).toFlowable(BackpressureStrategy.BUFFER);
    }
}