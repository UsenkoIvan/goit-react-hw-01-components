import React from 'react';
import styles from './Profile.module.css';
import PropTypes from 'prop-types';

const Profile = ({ name, tag, location, avatar, stats }) => (
  <div className={styles.profile}>
    <div className="description">
      <img src={avatar} alt={name} className={styles.avatar} />
      <p className={styles.name}>{name}</p>
      <p className={styles.tag}>{tag}</p>
      <p className={styles.location}>{location}</p>
    </div>

    <ul className={styles.stats}>
      <li className={styles.stats_item}>
        <span className="label">Followers</span>
        <span className="quantity">{stats.followers}</span>
      </li>
      <li className={styles.stats_item}>
        <span className="label">Views</span>
        <span className="quantity">{stats.views}</span>
      </li>
      <li className={styles.stats_item}>
        <span className="label">Likes</span>
        <span className="quantity">{stats.likes}</span>
      </li>
    </ul>
  </div>
);

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;
