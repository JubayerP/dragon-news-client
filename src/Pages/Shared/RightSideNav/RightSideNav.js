import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ListGroup from "react-bootstrap/ListGroup";
import { FaGithub, FaGoogle, FaFacebook, FaWhatsapp, FaTwitter, FaTwitch } from "react-icons/fa";
import BrandCarousel from "../BrandCarousel/BrandCarousel";


const RightSideNav = () => {
  return (
    <div>
      <ButtonGroup vertical>
        <Button className="mb-2 rounded" variant="outline-primary">
          <FaGoogle /> Login with Google
        </Button>
        <Button variant="outline-dark" className="rounded">
          <FaGithub /> Login with Github
        </Button>
      </ButtonGroup>
      <div className="mt-4">
        <h5>Find us on</h5>
        <ListGroup>
          <ListGroup.Item className="mb-2 rounded"><FaFacebook /> Facebook</ListGroup.Item>
          <ListGroup.Item className="mb-2 rounded"><FaWhatsapp /> WhatsApp</ListGroup.Item>
          <ListGroup.Item className="mb-2 rounded"><FaTwitter /> Twitter</ListGroup.Item>
          <ListGroup.Item className="mb-2 rounded"><FaTwitch /> Twitch</ListGroup.Item>
          <ListGroup.Item className="mb-2 rounded">Vestibulum at eros</ListGroup.Item>
        </ListGroup>
          </div>
          
          <div>
              <BrandCarousel />
          </div>
    </div>
  );
};

export default RightSideNav;
