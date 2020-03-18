import React from 'react'
import {getLanguage} from "../util/internationalization";
import Button from "components/CustomButtons/Button.js";

export default function SwitchLanguageButton(props) {

  const language = getLanguage();
  const {href} = props;
  return (
    <Button
      type="button"
      round
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        border: "2px solid white",
        margin: "0 30px 0 0",
      }}
      onClick={() => {
        language === "pl" ? sessionStorage.setItem("lang", "en") : sessionStorage.setItem("lang", "pl");
        window.open(href, "_self");
      }}
    >
      {language === "pl" ? "Switch to English" : "Zmień na Polski"}
    </Button>
  )
}