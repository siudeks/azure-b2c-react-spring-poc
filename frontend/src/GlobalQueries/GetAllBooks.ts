import { gql } from 'apollo-boost';

const GetAllBooks = gql`
  query GetAllBooks {
    books {
        id
        name
        author {
            id
            name
        }
    }
  }
`;

export default GetAllBooks;