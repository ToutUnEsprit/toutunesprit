import React from "react"
import GoogleMaps from "../../components/GoogleMaps"

const ContactSection = () => {
  return (
    <div style={{ paddingTop: "5%" }}>
      <h2>Nous Contacter</h2>

      <hr style={{ paddingBottom: "5%" }} />
      <div className="row contact" style={{ minHeight: "300px" }}>
        <div className="col-md-6" style={{ minHeight: "200px" }}>
          <GoogleMaps />
        </div>
        <div className="col-md-6">
          <div style={{ marginLeft: "10%" }}>
            {" "}
            <br />
            <br />
            <br />
            <p>
              <strong>Téléphone :</strong> 0473922438
            </p>
            <p>
              <strong>Adresse :</strong> 11 Rue Saint-Esprit, Clermont-Ferrand
            </p>
            <p
              style={{ fontSize: "18px", color: "white", textAlign: "center" }}
            >
              <a
                style={{ color: "white" }}
                href="https://www.facebook.com/Tout-un-Esprit-106361790733550/"
                target="_blank"
              >
                Facebook
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactSection
