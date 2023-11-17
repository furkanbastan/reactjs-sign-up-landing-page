export const HERO_TITLE_THICK = "Try it free 7 days";
export const HERO_TITLE = "then $20/mo. thereafter";
export const ERROR_ICON_SRC = "./images/icon-error.svg";
export const SUBMIT_BUTTON_TEXT = "claim your free trial";
export const TERMS_INFO_TEXT = "By clicking the button you are agreeing to our";
export const TERMS_INFO_LINK_TEXT = "Terms and Services";

export const INPUTS = [
    {
        id: 1,
        name: "firstname",
        type: "text",
        placeholder: "First Name",
        validations: {
            required: {
                value: true,
                message: "First Name cannot be empty!",
            },
            minLength: {
                value: 3,
                message: "First Name at least must be 3 length!",
            },
        },
    },
    {
        id: 2,
        name: "lastname",
        type: "text",
        placeholder: "Last Name",
        validations: {
            required: {
                value: true,
                message: "Last Name cannot be empty!",
            },
        },
    },
    {
        id: 3,
        name: "email",
        type: "email",
        placeholder: "Email Address",
        validations: {
            required: {
                value: true,
                message: "Email Address cannot be empty!",
            },
            validate: (value) =>
                isEmail(value) || "Looks like this is not an email!!",
        },
    },
    {
        id: 4,
        name: "password",
        type: "password",
        placeholder: "Password",
        validations: {
            required: {
                value: true,
                message: "Password cannot be empty!",
            },
        },
    },
];

const isEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
};
