import { NotificationMessage  } from './Notification.styled';
import PropTypes from 'prop-types';

const Notification = ({ message }) => {
    return <NotificationMessage >{message}</NotificationMessage >;
};

NotificationMessage.propTypes = {
    message: PropTypes.string.isRequired,
};
export default Notification;