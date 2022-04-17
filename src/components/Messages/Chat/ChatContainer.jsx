import Chat from "./Chat";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
  return {
    messages: state.messagesPage.messages,
  }
}

const ChatContainer = connect(mapStateToProps)(Chat);

export default ChatContainer