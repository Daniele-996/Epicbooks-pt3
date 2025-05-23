import { Col, Container, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";

const BookList = function (props) {
  //   console.log("Books", books);

  return (
    <Container fluid>
      <Row className="justify-content-center">
        {props.books.map((book) => (
          <Col xs={8} sm={6} md={4} lg={3} xxl={2} key={book.asin}>
            <SingleBook
              key={book.asin}
              book={book}
              cardImg={book.img}
              cardTitle={book.title}
              cardPrice={book.price}
              cardId={book.asin}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BookList;
