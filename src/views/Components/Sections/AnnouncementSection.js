import React, {useState} from "react";

import {backendUrl} from "../../../components/properties";
import JsxParser from "react-jsx-parser";
import "assets/css/announcement.css";

let announcement = {}
// todo anchors color
// todo announcement pop up
// todo internationalization
export default function AnnouncementSection() {

  const [announcementLoaded, setAnnouncementLoaded] = useState(false);
  const url = backendUrl + "/announcements?per_page=1&page=1";
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      if (json.length > 0) {
        announcement = json[0];
        setAnnouncementLoaded(true);

        // sets up color of anchors
        document.querySelectorAll(".announcementContainer a")
          .forEach(a => a.style.color = announcement.anchorscolor);
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    })

  return (
    announcementLoaded && (
      <div className="announcementContainer"
           style={{backgroundImage: `url(${announcement.background.guid})`, color: announcement.textcolor}}>
        <h1 style={{fontWeight: 900, color: announcement.titlecolor}}>{announcement.title.rendered}</h1>
        <JsxParser
          className="announcementContent"
          jsx={announcement.content.rendered}
        />
      </div>
    )
  )
}
