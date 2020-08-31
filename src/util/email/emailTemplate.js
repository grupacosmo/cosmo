
export function emailTemplate(props) {
    const templateId = "template_n0q0WHx8";
    let {email,name,topic,message} = props;
    var template_params = {
        reply_to: email || "",
        name_html: name || "",
        topic_html: topic || "",
        message_html: message || "",
    };
    return {templateId,template_params}
}

export default emailTemplate;