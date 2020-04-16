import React, {useState} from "react";

import {backendUrl} from "../../../components/properties";
import JsxParser from "react-jsx-parser";
import "assets/css/announcement.css";
import {getLanguage} from "../../../util/internationalization";

let announcement = {}
export default function AnnouncementSection(props) {

  const fixed = !!props.fixed;
  const lang = getLanguage();

  const [announcementLoaded, setAnnouncementLoaded] = useState(false);
  const [closed, setClosed] = useState(false);

  const url = backendUrl + "/announcements?per_page=1&page=1";
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      if (json.length > 0) {
        announcement = json[0];
        setAnnouncementLoaded(true);

        // sets up anchors
        document.querySelectorAll(".announcementContainer a")
          .forEach(a => {
            a.style.color = announcement.anchorscolor;
            a.target = "_blank";
          });
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    })

  return (
    announcementLoaded && !closed && (
      <div className={`announcementContainer ${fixed ? "fixed" : "nonFixed"}`}
           style={{
             backgroundImage: `url(${announcement.background.guid})`,
             color: announcement.textcolor
           }}>
        {fixed && <button className="announcementCloseButton" onClick={() => setClosed(true)}>x</button>}
        <h1 style={{color: announcement.titlecolor}} className="announcementTitle">
          {lang === "pl" ? announcement.title.rendered : announcement.englishtitle}
        </h1>
        <JsxParser
          className="announcementContent"
          jsx={lang === "pl" ? announcement.content.rendered : announcement.englishcontent}
        />
      </div>
    )
  )
}
