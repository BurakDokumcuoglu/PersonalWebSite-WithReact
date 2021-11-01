import React from "react";
import "../style/yorumlar.css";
import { useState } from "react";

function Yorumlar() {
  const [Yorum, setYorum] = useState("");
  const [Name, setName] = useState("");
  const [Yorumlar, setYorumlar] = useState([
   
  ]);

  const sendComment = () => {
    let body = {
      comment: Yorum,
      fullName: Name,
    };
    setYorumlar((Yorumlar) => [...Yorumlar, body]);
    console.log(Yorumlar);
  };

  return (
    <div className="comments-container">
      <h1 className="comments-heading">Yorumlar</h1>
      <p>Her türlü şikayet,öneri ve yorumunuzu gönderebilirsiniz.</p>

      <div class="col">
        <input
          type="text"
          class="form-control name-surname-area"
          placeholder="Ad ve Soyadınız..."
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div class="form-group">
        <textarea
          className="form-control comment-area"
          id="exampleFormControlTextarea1"
          rows="5"
          placeholder="Yorumunuz..."
          onChange={(e) => setYorum(e.target.value)}
        ></textarea>
      </div>

      <button
        type="button"
        className="btn btn-primary btn-lg"
        onClick={sendComment}
      >
        Gönder
      </button>

      <div className="user-comments">
        {Yorumlar.map((yorum) => (
          <div>
            <div className="card comment">
              <div className="card-body">
                <h5 className="card-title">{yorum.fullName}</h5>

                <p className="card-text">{yorum.comment}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Yorumlar;
