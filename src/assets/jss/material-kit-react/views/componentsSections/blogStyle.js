import { cardTitle, title } from "assets/jss/material-kit-react.js";
import imagesStyle from "assets/jss/material-kit-react/imagesStyles.js";

const teamStyle = {
    section: {
        background:"white",
        padding: "70px 0",
        textAlign: "center"
    },
    title: {
        ...title,
        color:"#3C4858",
        fontFamily:"'Titillium Web', sans-serif",
        marginBottom: "1rem",
        marginTop: "30px",
        minHeight: "32px",
        fontWeight: 700,
        textDecoration: "none"
    },
    ...imagesStyle,
    itemGrid: {
        marginLeft: "auto",
        marginRight: "auto"
    },
    cardTitle,
    smallTitle: {
        color: "red"
    },
    description: {
        color:"black",
        fontSize:18,
        fontFamily:"'Titillium Web', sans-serif",

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
        margin: "5px",
    },
    card:{
        padding:10,

    },
    cardMain:{
        backgroundColor:"#454545",
    }
};

export default teamStyle;
