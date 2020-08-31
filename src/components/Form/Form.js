import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { InputAdornment, TextField} from "@material-ui/core";
import Button from "components/CustomButtons/Button.js";
import { Link } from "react-scroll";
import { getLocale, getLanguage } from "../../util/internationalization";
import { emailValidator, emailTemplate, sendFeedback } from "../../util/email";


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
const FormValues = {
    PL: {
        name: "Twoje Imię",
        email: "Twój Email",
        topic: "Temat",
        message: "Twoja Wiadomość"
    },
    EN: {
        name: "Your Name",
        email: "Your Email",
        topic: "Topic",
        message: "Your Message"
    }
}

export default class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message: "",
            topic: "",
            name: "",
            email: "",
            emailValid: false,
            messageValid: false,
            topicValid: false,
            nameValid: false,
            formValues: getLanguage() === "pl" ? FormValues.PL : FormValues.EN,
            locale: getLocale("index").contactSection,

        }
    }
    handleChange = e => {
        let { name, value } = e;
        if (emailValidator(`${name}`, value)) {
            this.setState({ [`${name}Valid`]: true })
        }
        this.setState({ [name]: value })
    }
    handleSubmit = () => {
        let { email, name, topic, message } = this.state;
        let template = emailTemplate(email, name, topic, message);
        sendFeedback(template.templateId, template.template_params);
    };

    render() {
        let {
            message,
            topic,
            locale,
            name,
            email,
            formValues,
            emailValid,
            messageValid,
            topicValid,
            nameValid,
        } = this.state;
        let formValid = emailValid && messageValid && topicValid && nameValid;

        return (
            <form noValidate>
                <CssTextField
                    required
                    id="custom-css-outlined-input"
                    value={name}
                    name="name"
                    label={formValues.name}
                    onChange={e => this.handleChange(e.target)}
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
                    id="font-awesome"
                    required
                    label={formValues.email}
                    value={email}
                    name="email"
                    onChange={e => this.handleChange(e.target)}
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
                    required
                    id="font-awesome"
                    label={formValues.topic}
                    value={topic}
                    name="topic"
                    onChange={e => this.handleChange(e.target)}
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
                    required
                    id="standard-multiline-flexible"
                    label={formValues.message}
                    multiline
                    value={message}
                    rows="2"
                    rowsMax="5"
                    fullWidth
                    name="message"
                    onChange={e => this.handleChange(e.target)}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
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
                        onClick={this.handleSubmit}
                        disabled={!formValid}>
                        {locale.sendButton}
                    </Button>
                </Link>
            </form>
        )
    }
}