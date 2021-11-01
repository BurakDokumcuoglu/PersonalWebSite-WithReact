import React from "react";
import burak from "../images/burak.png";
import "../style/hakkimda.css";
import sau from "../images/saü.png";
import wroclaw from "../images/wroclaw.jpg";
import coding from "../images/coding.jpeg";

function Hakkimda() {
  return (
    <div className="hakkimda-container">
      <img src={burak} alt="burak" className="about-image" />
      <h1>Hakkımda</h1>
      <h3 className="mid-header">Eğitim</h3>

      <div class="card text-center">
        <div class="card-body">
          <h5 class="card-title">Lise</h5>
          <p class="card-text">
            Lise eğitimimi Kenan Evren Anadolu Lisesi'nde tamamladım.
          </p>
          <h5 class="card-title">Üniversite</h5>
          <p class="card-text">
            Sakarya Üniversitesi'nde İktisat bölümünden mezun oldum.
          </p>
          <h5 class="card-title">Üniversite</h5>
          <p class="card-text">
            Üniversite eğitimimin 2. senesinde Erasmus Öğrenci Değişim
            <br /> Programı ile Polonya'nın Wroclaw şehrindeki
            <br /> Wroclaw Ekonomi Üniversitesi'nde eğitimimi sürdürdüm.
          </p>
        </div>
      </div>

      <div className="school-logos">
        <img src={sau} alt="saü" className="school-img-sau" />
        <img src={wroclaw} alt="wroclaw" className="school-img-wroclaw" />
      </div>
      <h3 className="mid-header">Sertifika ve Yabancı Dil</h3>

      <div class="card text-center">
        <div class="card-body">
          <h5 class="card-title">Sertifika</h5>
          <p class="card-text">
            Arı Bilgi Eğitim Kurumu'ndan almış olduğum Yazılım Uzmanlığı
            Sertifikası'na sahibim.
          </p>
          <p class="card-text">
            Sertifika eğitimimin bitirme projesini Yaptığım İşler sekmesi'nde
            görebilirsiniz.
          </p>
          <h5 class="card-title">Yabancı Dil</h5>
          <p class="card-text">
            İyi derece İngilizce biliyorum. Yazma, okuma ve konuşma konusunda
            kendime güveniyorum.
          </p>
        </div>
      </div>

      <img src={coding} alt="coding" className="coding-img" />
    </div>
  );
}

export default Hakkimda;
