import React from 'react';
import s from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, percent }) => (
  <ul className={s.list}>
    <li>Good: {good}</li>
    <li>Neutral: {neutral}</li>
    <li>Bad: {bad}</li>
    <li>Total: {total}</li>
    <li>Positive precentage: {percent}%</li>
  </ul>
);

export default Statistics;
