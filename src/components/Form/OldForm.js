import React, { useState } from "react";
// nodejs library that concatenates classes
// eslint-disable-next-line
import classNames from "classnames";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from "components/CustomButtons/Button.js";
import styles from "assets/jss/material-kit-react/views/landingPageSections/contactStyle.js";
import { Link } from "react-scroll";
import "assets/css/Form.css"
const useStyles = makeStyles(styles);
const CssTextField = withStyles({
    root: {
        margin:"10px !important",
        '& label' : {
            color:"white",
        },

        '& textarea':{
            color:"white"
        },
        '& input':{
            color:"white",
        },
        "& label.Mui-focused": {
            color: "purple"
        },
        "& label.Mui": {
            color: "red"
        },
        "& .MuiInput-underline:after": {
            borderBottomColor: "purple"
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'white',
                padding:10,
            },
            '&:hover fieldset': {
                borderColor: 'purple',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'purple',
            },
            '& textarea':{
                color:"white"
            }
        },



    }
})(TextField);


const inputStyle = {
    color:"white",
    margin: 5,
};



// Contact Section Hook
const OldForm = props => {
    const classes = useStyles();

    //State
    const [message, setMessage] = useState("");
    const [topic, setTopic] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [emailValid, setEmailValid] = useState(false);
    const [messageValid, setMessageValid] = useState(false);
    const [topicValid, setTopicValid] = useState(false);
    const [nameValid, setNameValid] = useState(false);
    const [formValid, setFormValid] = useState(false);
    //Validation

    const validateForm = () => {
        if (messageValid && topicValid && nameValid && emailValid) {
            setFormValid(true);
        }
    };

    const validateField = (fieldName, value) => {
        switch (fieldName) {
            case "email":
                if (value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
                    setEmailValid(true);
                }
                break;
            case "message":
                if (value.length > 0) {
                    setMessageValid(true);
                }
                break;
            case "topic":
                if (value.length > 0) {
                    setTopicValid(true);
                }
                break;
            case "name":
                if (value.length > 0) {
                    setNameValid(true);
                }
                break;
            default:
                break;
        }
    };

    //Events
    const handleMessageChange = event => {
        setMessage(event.target.value);
        validateField("message", message);
        validateForm();
    };
    const handleNameChange = event => {
        setName(event.target.value);
        validateField("name", name);
        validateForm();
    };
    const handleEmailChange = event => {
        setEmail(event.target.value);
        validateField("email", email);
        validateForm();
    };
    const handleTopicChange = event => {
        setTopic(event.target.value);
        validateField("topic", topic);
        validateForm();
    };

    const handleSubmit = event => {
        const templateId = "template_n0q0WHx8";

        var template_params = {
            reply_to: email,
            name_html: name,
            topic_html: topic,
            message_html: message
        };
        sendFeedback(templateId, template_params);
    };

    const sendFeedback = (templateId, template_params) => {
        window.emailjs
            .send("gmail", templateId, template_params)
            .then(res => {
                console.log(template_params);
            })
            // Handle errors here however you like, or use a React error boundary
            .catch(err =>
                console.error(
                    "Oh well, you failed. Here some thoughts on the error that occured:",
                    err
                )
            );
        // window.location.reload();
    };

    //this style and style below is using for centering description paragraph vertically


        return(
            <>
                <form className={classes.root} noValidate>
                <CssTextField
                    className={classes.margin}
                    id="custom-css-outlined-input"
                    label="Imię"
                    value={name}
                    variant="outlined"

                    onChange={handleNameChange}
                    fullWidth
                    margin="dense"
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end" style={inputStyle}>
                                <i className="fas fa-user" />
                            </InputAdornment>
                        )
                    }}
                />
                <CssTextField
                    className={classes.margin}
                    id="font-awesome"
                    required
                    label="Email"
                    value={email}
                    variant="outlined"

                    onChange={handleEmailChange}
                    fullWidth
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end"   style={inputStyle}>
                                <i className="fas fa-at" />
                            </InputAdornment>
                        )
                    }}
                />
                <CssTextField
                    className={classes.margin}
                    id="font-awesome"
                    label="Temat"
                    value={topic}
                    onChange={handleTopicChange}
                    fullWidth
                    variant="outlined"
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end" style={inputStyle}>
                                <i className="fas fa-star" />
                            </InputAdornment>
                        )
                    }}
                />
                <CssTextField
                    id="standard-multiline-flexible"
                    className={classes.margin}
                    label="Wiadomość"
                    multiline
                    value={message}
                    rows="2"
                    rowsMax="5"
                    variant="outlined"
                    fullWidth
                    onChange={handleMessageChange}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end" style={inputStyle}>
                                <i className="fas fa-comment" />
                            </InputAdornment>
                        )
                    }}
                />
                    <Link
                    activeClass="active"
                    to="menu-navbar"
                    spy={true}
                    smooth={true}
                    offset={10}
                    duration={700}>
                    <Button
                        color="primary"
                        round
                        onClick={handleSubmit}
                        disabled={!formValid}>
                        Wyślij
                    </Button>
                </Link>
                </form>
                </>
        );

}
export default OldForm;