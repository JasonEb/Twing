import { connect } from 'react-redux';
import MessageList from './message_list';

// Actions
import { receiveMessages } from '../../actions/message_actions'
import { allMessages } from '../../selectors/messageSelectors'

const mapStateToProps = state => ({
    messages: allMessages(state)
});

const mapDispatchToProps = dispatch => ({
  receiveMessage: message => dispatch(receiveMessage(message))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageList);