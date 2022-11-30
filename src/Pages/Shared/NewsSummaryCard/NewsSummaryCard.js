import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Image from 'react-bootstrap/Image'

const NewsSummaryCard = ({ news }) => {
  const { _id, title, total_view, author, details, image_url } = news;
  return (
    <div className="mb-5">
      <Card>
              <Card.Header>
                  <div>
                      <Image roundedCircle src={author.img} style={{height: '60px'}} />
                  </div>
        </Card.Header>
        <Card.Body>
                  <Card.Title>{title}</Card.Title>
                  <Card.Img variant="top" src={image_url} />
          <Card.Text>
            {details.length > 250 ? (
              <p>
                {details.slice(0, 250) + "..."}{" "}
                <Link to={`news/${_id}`}>Read More</Link>
              </p>
            ) : (
              <p>{details}</p>
            )}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default NewsSummaryCard;
