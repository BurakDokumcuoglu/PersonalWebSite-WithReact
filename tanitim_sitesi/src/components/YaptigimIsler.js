import React from "react";
import "../style/jobs.css";
import ss1 from "../images/ss1.png";
import ss2 from "../images/ss2.png";
import futbol1 from "../images/futbol1.png"
import futbol2 from "../images/futbol2.png"

function YaptigimIsler() {
  return (
    <div className="container jobs-container">
      <h1 className="jobs-header">Yaptığım İşler</h1>
      <p className="jobs-info">Projelerin kaynak kodlarını github hesabımda, aynı isimlerdeki repositorylerde görebilirsiniz.</p>
      <div className="jobs">
        <div className="job">
          <h3>Yazılım Uzmanlığı Sertifikası Bitirme Projesi</h3>
          <p>
            Backend api'sini kendim yazdığım ve frontend'de de Angular
            kullandığım projem.
          </p>
          <div
            id="carouselExampleControls"
            class="carousel slide"
            data-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img class="d-block w-75 job-image" src={ss1} alt="First slide"/>
              </div>
              <div class="carousel-item">
                <img class="d-block w-75 job-image" src={ss2} alt="Second slide" />
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExampleControls"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon carousel-arrow"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleControls"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon carousel-arrow"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>

        <div className="job">
        <h3>Ranna Digital Works'de Geliştirdiğim Futbol Bilgi Yarışması Sitesi</h3>
          <p>
           Geliştirme frontend tarafında React ile yapıldı.
          </p>
          <div
            id="carouselExampleControls2"
            class="carousel slide"
            data-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img class="d-block w-75 job-image" src={futbol1} alt="First slide"/>
              </div>
              <div class="carousel-item">
                <img class="d-block w-75 job-image" src={futbol2} alt="Second slide" />
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExampleControls2"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon carousel-arrow"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleControls2"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon carousel-arrow"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}

export default YaptigimIsler;
