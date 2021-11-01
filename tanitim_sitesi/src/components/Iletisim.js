import React from "react";
import "../style/iletisim.css"
import contact from "../images/contact.jpg"

function Iletisim() {
  return (
    <div>
        <h1 className="contact-heading">İletişim</h1>
      <table class="table table-striped">
       
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Cep Telefonu</td>
            <td>0532 468 28 42</td>
            
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Mail Adresi</td>
            <td>burakdokumcuoglu3@gmail.com</td>
            
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Instagram</td>
            <td>https://www.instagram.com/burakdkmcoglu/</td>
            
          </tr>
        </tbody>
      </table>  

      <img src={contact} alt="contact" className="contact-img" />

    </div>
  );
}

export default Iletisim;
