import React from "react";
import "../index.css";

export default function Card() {
  return (
    <div className="container text-center mt-3">
      <h1 className="mt-5"> Pricing </h1>
      <div className="row mt-5" style={{ width: "80%", marginLeft: "10%" }}>
        <div className="col-md-4">
          <div className="card border-0 shadow-lg p-3 mb-5 bg-white rounded">
            <div className="card-body">
              <h3 className="card-title">Sole Proprietor</h3>
              <h1 className="text-primary mt-3 mb-1">$19.99</h1>
              <span> Per Month </span>
              <p className="card-text mt-4">100 invoices</p>
              <p className="card-text">Custom scripting & scheduling</p>
              <p className="card-text mb-5">
                Payment & accounting software integration
              </p>
              <a
                href="#"
                className="bg-primary text-white text-decoration-none p-2"
              >
                Start Free Trial
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card  border-top border-0 border-success shadow-lg p-3 mb-5 bg-white rounded">
            <div className="card-body ">
              <h3 className="card-title">Small Business</h3>
              <p className="text-success"> Most Popular </p>
              <h1 className="text-primary mt-3 mb-1">$49.99</h1>
              <span> Per Month </span>
              <p className="card-text mt-4">300 invoices</p>
              <p className="card-text">Custom scripting & scheduling</p>
              <p className="card-text mb-5">
                Payment & accounting software integration
              </p>
              <a
                href="#"
                className="bg-primary text-white text-decoration-none p-2"
              >
                Start Free Trial
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card border-0 shadow-lg p-3 mb-5 bg-white rounded">
            <div className="card-body">
              <h3 className="card-title">Enterprise</h3>
              <h1 className="text-primary mt-3 mb-1">$99.99</h1>
              <span> Per Month </span>
              <p className="card-text mt-4">500 invoices</p>
              <p className="card-text">Custom scripting & scheduling</p>
              <p className="card-text mb-5">
                Payment & accounting software integration
              </p>
              <a
                href="#"
                className="bg-primary text-white text-decoration-none p-2"
              >
                Start Free Trial
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <p className="text-dark">Design and Credit <a href="https://www.florin-pop.com/blog/2019/09/100-days-100-projects/">FlorinPop</a></p>
          <p className="text-dark"> Developed By <a href="https://github.com/tinsaye-simeneh"> Tinsaye Simeneh </a></p>
      </div>
      </div>
    </div>
  );
}
