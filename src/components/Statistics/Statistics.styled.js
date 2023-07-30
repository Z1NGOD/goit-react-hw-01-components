import styled from "@emotion/styled";

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const StatisticContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  background-color: #f9f9f9;
  border-radius: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

const MainText = styled.h2`
  font-size: 28px;
  margin-bottom: 20px;
`;

const StatsList = styled.ul`
  display: flex;
  width: 100%;
`;

const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background-color: ${(props) => getRandomColor()};
  border-radius: 50%;
  font-size: 16px;
  color: #fff;
  font-weight: bold;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

const StatsLabel = styled.span`
  font-size: 14px;
  color: white;
  margin-top: 8px;
`;

const StatsPercentage = styled.span`
  font-size: 16px;
  color: white;
  font-weight: bold;
`;

export {
  StatisticContainer,
  MainText,
  StatsList,
  StatsItem,
  StatsLabel,
  StatsPercentage,
};
