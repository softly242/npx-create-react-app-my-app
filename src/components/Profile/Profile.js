import PropTypes from 'prop-types';
import css from './Profile.module.css';
export default function Profile({ avatar, username, tag, location, stats }) {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <div className={css.avatarBox}>
          <img src={avatar} alt="User avatar" className={css.avatar} />
        </div>
        <p className={css.name}>{username}</p>
        <p className={css.tag}>{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li>
          <div className={css.info}>
            <span className={css.label}>Followers</span>
            <span className={css.quantity}>{stats.followers}</span>
          </div>
        </li>
        <li>
          <div className={css.info}>
            <span className={css.label}>Views</span>
            <span className={css.quantity}>{stats.views}</span>
          </div>
        </li>
        <li>
          <div className={css.info}>
            <span className={css.label}>Likes</span>
            <span className={css.quantity}>{stats.likes}</span>
          </div>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  stats: PropTypes.object,
};
