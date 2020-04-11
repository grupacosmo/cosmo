
export const sendFeedback = (templateId, template_params) => {
    window.emailjs
        .send("gmail", templateId, template_params)
        .then(res => {
            console.log(template_params);
        })
        .catch(err =>
            console.error(
                "Oh well, you failed. Here some thoughts on the error that occured:",
                err
            )
        );
};
export default sendFeedback;