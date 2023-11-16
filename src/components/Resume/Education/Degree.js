import React from 'react';
import PropTypes from 'prop-types';

const Degree = ({ data }) => (
  <article className="degree-container">
    <header>
      <h4 className="degree">{data.degree} - <span>{data.score}</span></h4>
      <p className="school"><a href={data.link}>{data.school}</a>, {data.year}</p>
    </header>
  </article>
);

Degree.propTypes = {
  data: PropTypes.shape({
    degree: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    school: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    score: PropTypes.string.isRequired,
  }).isRequired,
};

export default Degree;
