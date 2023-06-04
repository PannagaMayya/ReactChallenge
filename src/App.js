import "./styles.css";
import { useState } from "react";
export default function App() {
  let years = [
    "",
    "0",
    "1",
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ];
  let year2 = ["", "2", "20", "202", "2023", "2024", "2025", "2026"];
  const [cardNum, setCardNum] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardMon, setCardMon] = useState("");
  const [cardYear, setCardYear] = useState("");
  const [cardCvv, setCardCvv] = useState("");

  return (
    <div className="App">
      <div className="container">
        <h3>Card Number</h3>
        <p>{cardNum ? cardNum : "XXXX-XXXX-XXXX-XXXX"}</p>
        <h3>Card Holder Name</h3>
        <p>{cardName ? cardName : "Name"}</p>
        <h3>Expiry MM/YY</h3>
        <p>
          {cardMon ? cardMon : "MM"}/{cardYear ? cardYear : "YY"}
        </p>
        <h3>Card CVV</h3>
        <p>XXXX</p>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div>
          <label htmlFor="cardNumber">Card Number : </label>
          <input
            id="cardNumber"
            type="text"
            placeholder="16 digits"
            required={true}
            value={cardNum}
            onChange={(e) => {
              if (!isNaN(e.target.value) && e.target.value.length <= 16) {
                setCardNum(e.target.value);
              }
            }}
          />
          {cardNum.length < 16 && (
            <p className="error-input">Invalid CC number</p>
          )}
        </div>
        <div>
          <label htmlFor="cardName">Card Holder Name : </label>
          <input
            id="cardName"
            type="text"
            required={true}
            value={cardName}
            onChange={(e) => {
              if (
                (e.target.value.charAt(e.target.value.length - 1) >= "A" &&
                  e.target.value.charAt(e.target.value.length - 1) <= "z") ||
                e.target.value == ""
              ) {
                setCardName(e.target.value);
              }
            }}
          />
          {cardName.length < 1 && <p className="error-input">Invalid Name</p>}
        </div>
        <div>
          <label htmlFor="cardExpiryMonth">Card Expity month : </label>
          <input
            id="cardExpiryMonth"
            type="text"
            required={true}
            value={cardMon}
            onChange={(e) => {
              if (years.filter((a) => a === e.target.value).length === 1) {
                setCardMon(e.target.value);
              }
            }}
          />
          {cardMon.length < 2 && (
            <p className="error-input">Invalid Expiry month</p>
          )}
        </div>
        <div>
          <label htmlFor="cardExpiryYear">Card Expiry Year : </label>
          <input
            id="cardExpiryYear"
            type="text"
            value={cardYear}
            required={true}
            onChange={(e) => {
              if (year2.filter((a) => a === e.target.value).length === 1) {
                setCardYear(e.target.value);
              }
            }}
          />
          {cardYear.length < 4 && (
            <p className="error-input">Invalid Expiry Year</p>
          )}
        </div>
        <div>
          <label htmlFor="cardCvv">Card CVV : </label>
          <input
            id="cardCvv"
            type="text"
            required={true}
            value={cardCvv}
            onChange={(e) => {
              if (!isNaN(e.target.value) && e.target.value.length <= 4) {
                setCardCvv(e.target.value);
              }
            }}
          />
          {cardCvv.length < 4 && <p className="error-input">Invalid CVV</p>}
        </div>
        <input
          type="submit"
          id="inp-sub"
          disabled={
            cardCvv.length < 4 ||
            cardYear.length < 4 ||
            cardMon.length < 2 ||
            cardName.length < 1 ||
            cardNum.length < 16
          }
        />
      </form>
    </div>
  );
}
