import { Container, Nav, Navbar, Button } from "react-bootstrap";

export default function NavigationBar({ userType }) {
  const menuData = [
    {
      path: `/${userType}/dashboard`,
      name: "Dashboard"
    },

    {
      path: `/${userType}/addBike`,
      name: "Add Bike"
    },

    {
      path: `/${userType}/database`,
      name: "Database"
    },

    {
      path: `/${userType}/maps`,
      name: "Maps"
    },

    {
      path: `/${userType}/notifications`,
      name: "Notifications"
    }
  ];

  return (
    <Navbar className="navbar" expand="lg">
      <Container>
        <Navbar.Brand href="/" className="brand">
          Bike Rental
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {menuData.map((item) => (
              <Nav.Link href={item.path} key={item.name}>
                <div className="list_item">{item.name}</div>
              </Nav.Link>
            ))}
          </Nav>
          <Nav className="ms-auto">
            <Button variant="primary">Sign Up</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
