import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Badge.css';

Badge.propTypes = {
  className: PropTypes.string,

  // TODO: Create custom proptype accepting only `<svg>` or `<img>`
  // TODO: Once above is done, add integration tests regarding proptype
  icon: PropTypes.element.isRequired,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  isImageFirst: PropTypes.bool,
};

Badge.defaultProps = {
  className: undefined,
  isImageFirst: true,
};

function Badge({ className, icon, isImageFirst, label }) {
  return (
    <div className={classNames(styles.Badge, className)}>
      {isImageFirst ? (
        <figure className={styles.iconContainer}>
          {icon}
          <figcaption className={styles.label}>{label}</figcaption>
        </figure>
      ) : (
        <figure className={styles.label}>
          {label}
          <figcaption className={styles.iconContainer}>{icon}</figcaption>
        </figure>
      )}
    </div>
  );
}

export default Badge;
