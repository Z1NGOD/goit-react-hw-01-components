import { PropTypes } from "prop-types";
import {
  StatisticContainer,
  MainText,
  StatsList,
  StatsItem,
  StatsLabel,
  StatsPercentage,
} from "./Statistics.styled";

const Statistics = ({ title, stats }) => {
  return (
    <StatisticContainer className="statistics">
      <MainText className="title">{title}</MainText>
      <StatsList className="stat-list">
        {stats.map((stat) => (
          <StatsItem className="item" key={stat.id}>
            <StatsLabel className="label">{stat.label}</StatsLabel>
            <StatsPercentage className="percentage">
              {stat.percentage}
            </StatsPercentage>
          </StatsItem>
        ))}
      </StatsList>
    </StatisticContainer>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;
