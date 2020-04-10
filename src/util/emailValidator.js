//todo upewnic się ,że działa
export function validateField (fieldName, value){
        switch (fieldName) {
            case "email":
                if (value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
                    return true;
                }
                break;
            case "message":
                if (value.length > 0) {
                    return true;
                }
                break;
            case "topic":
                if (value.length > 0) {
                    return true;
                }
                break;
            case "name":
                if (value.length > 0) {
                    return true;
                }
                break;
            default:
                return false;
        }
    };
export default validateField;
