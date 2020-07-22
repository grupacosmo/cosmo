import React, { useState } from "react";
// nodejs library that concatenates classes
// eslint-disable-next-line
import { withStyles, makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from "components/CustomButtons/Button.js";
import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";
import getLocale from "../../util/internationalization";

const sender = require("util/mail/EmailjsSender");
const useStyles = makeStyles(styles);
const CssTextField = withStyles({
    root: {
        "& label.Mui-focused": {
            color: "purple"
        },
        "& .MuiInput-underline:after": {
            borderBottomColor: "purple"
        }
    }
})(TextField);


// Contact Section Hook
const MailForm = props => {
    const {receiver} = props;
    const locale = getLocale("index").contactSection;

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
      sender
        .send(email, name, receiver, topic, message)
        .then(r => {
          console.log(r);
          console.log(receiver);
        });
    };
        return(
            <>
                <form className={classes.root} noValidate>
                <CssTextField
                    className={classes.margin}
                    id="custom-css-outlined-input"
                    label="Your Name"
                    value={name}
                    onChange={handleNameChange}
                    fullWidth
                    margin="dense"
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <i className="fas fa-user" />
                            </InputAdornment>
                        )
                    }}
                />
                <CssTextField
                    className={classes.margin}
                    id="font-awesome"
                    required
                    label="Your email"
                    value={email}
                    onChange={handleEmailChange}
                    fullWidth
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <i className="fas fa-at" />
                            </InputAdornment>
                        )
                    }}
                />
                <CssTextField
                    className={classes.margin}
                    id="font-awesome"
                    label="Topic"
                    value={topic}
                    onChange={handleTopicChange}
                    fullWidth
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <i className="fas fa-star" />
                            </InputAdornment>
                        )
                    }}
                />
                <CssTextField
                    id="standard-multiline-flexible"
                    label="Your message"
                    multiline
                    value={message}
                    rows="2"
                    rowsMax="5"
                    fullWidth
                    onChange={handleMessageChange}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <i className="fas fa-comment" />
                            </InputAdornment>
                        )
                    }}
                />
                  <Button
                      color="primary"
                      round
                      onClick={handleSubmit}
                      disabled={!formValid}>
                    {locale.sendButton}
                  </Button>
                </form>
                </>
        );

}
export default MailForm;