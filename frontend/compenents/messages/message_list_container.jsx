import { connect } from 'react-redux';
import MessageList from './message_list';

// Actions
import { receiveMessages } from '../../actions/message_actions'
import { wsConnect } from '../../actions/websocket_actions'

// Selectors
import { allMessages } from '../../selectors/messageSelectors'

const mapStateToProps = state => ({
    messages: allMessages(state)
});

const mapDispatchToProps = dispatch => ({
  connectAndJoin: host => dispatch(wsConnect(host)),
  receiveMessage: message => dispatch(receiveMessage(message))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageList);