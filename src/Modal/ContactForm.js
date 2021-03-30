import { reduxForm } from "redux-form";
import Form from "./Form";

const ContactForm = reduxForm({ form: "Add hot-dog" })(Form);

export default ContactForm;
