import { Nav } from "react-bootstrap";

const MyFooter = function () {
  return (
    <>
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Contact Us</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Work with Us</Nav.Link>
        </Nav.Item>
      </Nav>
      <p className="text-center mt-4 mb-4">MyLibrary®</p>
    </>
  );
};

export default MyFooter;
