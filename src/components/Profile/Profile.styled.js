import styled from "@emotion/styled";

const MainDiv = styled.div`
  width: 300px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #f9f9f9;
  border-radius: 15px;
  border: 1px solid #ccc;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

const DescriptionDiv = styled.div`
  text-align: center;
`;

const Avatar = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  margin: 0 auto 20px;
  display: block;
  border: 3px solid #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const MainText = styled.p`
  text-align: center;
  color: #333;
  font-size: 24px;
  margin: 0;
`;

const SecondaryText = styled.p`
  color: #777;
  font-size: 14px;
  margin: 0;
`;

const Name = styled.h3`
  text-align: center;
  font-size: 28px;
  margin: 0;
`;

const StatsList = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  padding: 0;
  margin-top: 20px;
`;

const StatsListComponent = styled.li`
  flex: 1;
  height: 100px;
  width: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f1f1f1;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export {
  MainDiv,
  DescriptionDiv,
  Avatar,
  MainText,
  SecondaryText,
  Name,
  StatsList,
  StatsListComponent,
};
