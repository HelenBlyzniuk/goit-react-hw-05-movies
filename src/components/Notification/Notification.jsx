import css from 'components/Notification/Notification.module.css';
import PropTypes from 'prop-types';

const Notification = ({ text }) => {
  return <div className={css.sentence}>{text}</div>;
};

export default Notification;

Notification.propTypes = {
  text: PropTypes.string.isRequired,
};
