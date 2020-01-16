import React from "react"
import { Link } from "gatsby"

const ItemCard = ({ cardTitle, cardText, cardImg, cardLink }) => {
  return (
    <div className="col-md-6 col-sm-6 col-lg-3">
      <div className="card " style={{ margin: "10% -2%", padding: "20% 5%" }}>
        <img
          src={cardImg}
          className="card-img-top"
          alt="..."
          style={{
            width: "200px",
            height: "200px",
            position: "relative",
            transform: "translateX(-50%)",
            left: "50%",
          }}
        />
        <div className="card-body">
          <h5
            className="card-title"
            style={{
              height: "60px",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {cardTitle}
          </h5>
          <p
            className="card-text"
            style={{
              height: "40px",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {cardText}
          </p>
          <Link
            to={cardLink}
            className="btn btn-primary"
            style={{ fontSize: "24px" }}
          >
            Découvrir
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ItemCard
