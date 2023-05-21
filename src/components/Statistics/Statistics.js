import PropTypes from 'prop-types';
import { getRandomHexColor } from '../utils/getRandomHexColor';
import css from './Statistics.module.css';
export default function Statistics({ title, stats }) {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statList}>
        {stats && stats.map(stat => 
          <li className={css.item} style={{backgroundColor: getRandomHexColor()}} key={stat.id}>
          <div className={css.info}>
            <span className={css.label}>{stat.label}</span>
            <span className={css.percentage}>{stat.percentage}%</span>
          </div>
        </li>
        
        )}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};
