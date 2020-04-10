import React, { Component } from "react";
// nodejs library that concatenates classes
// eslint-disable-next-line
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from "components/CustomButtons/Button.js";
import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";
import { Link } from "react-scroll";
import getLocale from "../../util/internationalization";
import validateField from "../../util/emailValidator";


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


export default class Form extends Component {


    constructor(props) {
        super(props)
        this.state = {
            classes: this.props.classes || null,
            message: "",
            topic: "",
            name: "",
            email: "",
            emailValid: false,
            messageValid: false,
            topicValid: false,
            nameValid: false,
            formValid: false,
            locale: getLocale("index").contactSection,

        }
    }
    handleChange = e => {
        let { name, value } = e;
        let isValid = validateField(`${name}`, name);
        this.setState({ [name]: value })
        console.log(name)
        console.log(isValid)
        console.log(value)
    }

    // handleSubmit = () => {
    //     const templateId = "template_n0q0WHx8";

    //     var template_params = {
    //         reply_to: email,
    //         name_html: name,
    //         topic_html: topic,
    //         message_html: message
    //     };
    //     sendFeedback(templateId, template_params);
    // };

    render() {

        let {
            classes,
            message,
            topic,
            locale,
            name,
            email,
            emailValid,
            messageValid,
            topicValid,
            nameValid,
            formValid
        } = this.state;

        return (
            <>
                <form noValidate>
                    <CssTextField
                        id="custom-css-outlined-input"
                        label="Your Name"
                        name="name"
                        value={name}
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
                        label="Your email"
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
                        id="font-awesome"
                        label="Topic"
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
                        id="standard-multiline-flexible"
                        label="Your message"
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
                            // onClick={handleSubmit}
                            disabled={!formValid}>
                            {locale.sendButton}
                        </Button>
                    </Link>
                </form>
            </>
        )
    }

}