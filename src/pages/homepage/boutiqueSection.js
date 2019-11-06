import React from "react"
import thee from "../../images/thee.png"
import coffe from "../../images/coffe.png"
import theiere from "../../images/theiere.png"

const BoutiqueSection = () => {
  return (
    <div style={{ paddingBottom: "5%" }}>
      <h2>La boutique</h2>
      <hr />

      <div className="bd-example">
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleCaptions"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={theiere} className="d-block " alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h4>De la vaisselle et des accessoires</h4>
              </div>
            </div>
            <div className="carousel-item">
              <img src={thee} className="d-block " alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h4>Une centaine de thés</h4>
              </div>
            </div>
            <div className="carousel-item">
              <img src={coffe} alt="..." className="d-block " />
              <div className="carousel-caption d-none d-md-block">
                <h4>Des dizaines de cafés</h4>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleCaptions"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleCaptions"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default BoutiqueSection
