import React from "react"
import the from "../../assets/the.svg"
import cafe from "../../assets/cafe.svg"
import { Link } from "gatsby"
import accessoires from "../../assets/accessoires.svg"

const DiscoverSection = () => {
  return (
    <div className="discover-section">
      <div style={{ paddingBottom: "5%" }}>
        <h2>Découvrez toute nos gammes</h2>
        <hr />
      </div>
      <div className="row">
        <div className="col-md-4 ">
          <Link to="/tea">
            <div className="card">
              <h3>Thés</h3>
              <hr />
              <img src={the} alt="" />
            </div>{" "}
          </Link>
        </div>
        <div className="col-md-4 ">
          <Link to="/coffee">
            <div className="card">
              <h3>Cafés</h3>
              <hr />
              <img src={cafe} alt="" />
            </div>
          </Link>
        </div>
        <div className="col-md-4 ">
          <Link to="/accessories">
            <div className="card">
              <h3>Accessoires</h3>
              <hr />
              <img src={accessoires} alt="" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default DiscoverSection
