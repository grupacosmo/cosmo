import { cardTitle, title } from "assets/jss/material-kit-react.js";
import imagesStyle from "assets/jss/material-kit-react/imagesStyles.js";

const teamStyle = {
    section: {
        background:"#000000",
        padding: "70px 0",
        textAlign: "center"
    },
    title: {
        ...title,
        marginBottom: "1rem",
        marginTop: "30px",
        minHeight: "32px",
        textDecoration: "none"
    },
    ...imagesStyle,
    itemGrid: {
        marginLeft: "auto",
        marginRight: "auto"
    },
    cardTitle,
    smallTitle: {
        color: "#6c757d"
    },
    description: {
        textAlign: "justify",
        fontFamily: "'Titillium Web', sans-serif",
        color:"white",
        padding: 20,
        fontSize: 26,
        margin: "auto"
    },
    justifyCenter: {
        justifyContent: "center !important"
    },
    socials: {
        marginTop: "0",
        width: "100%",
        transform: "none",
        left: "0",
        top: "0",
        height: "100%",
        lineHeight: "41px",
        fontSize: "20px",
        color: "#999"
    },
    margin5: {
        margin: "5px"
    },
    rocket:{
        maxWidth:"50%",
        height: "auto",
        padding:10,
        margin:"auto",
        minWidth:"150px"
    },
    card:{
        justifyContent: "center",
        textAlign: "justify",

    }
};

export default teamStyle;
