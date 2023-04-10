import { StatisticsList, Result } from './Statistics.styled';

import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <StatisticsList>
            <Result>Good: {good}</Result>
            <Result>Neutral: {neutral}</Result>
            <Result>Bad: {bad}</Result>
            <Result>Total: {total}</Result>
            <Result>Positive feedback: {positivePercentage}%</Result>
        </StatisticsList>
    );
};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;