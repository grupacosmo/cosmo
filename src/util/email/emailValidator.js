export function emailValidator(fieldName, value) {
    console.log(fieldName);
    console.log(value);
    switch (fieldName) {
        case "email":
            if (value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
                return true;
            }
            return false;
        case "message":
            if (value.length > 0) {
                return true;
            }
            return false;
        case "topic":
            if (value.length > 0) {
                return true;
            }
            return false;
        case "name":
            if (value.length > 0) {
                return true;
            }
            return false;
        default:
            return false;
    }
};
export default emailValidator;
