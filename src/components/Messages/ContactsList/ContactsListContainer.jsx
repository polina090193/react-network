import ContactsList from "./ContactsList";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
  return {
    contacts: state.messagesPage.contacts,
  }
}

const ContactsListContainer = connect(mapStateToProps)(ContactsList);

export default ContactsListContainer