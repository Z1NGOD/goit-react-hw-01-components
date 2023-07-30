import styled from "@emotion/styled";

const List = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 14px;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-bottom: 8px;
  background-color: white;
`;

const Status = styled.span`
  display: inline-block;
  width: 10px;
  height: 10px;
  background-color: ${(props) => (props.isOnline ? "#3cb371" : "#ff4500")};
  border-radius: 50%;
  margin-right: 8px;
`;

const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 15px;
  margin-right: 16px;
  border: 2px solid #ccc;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Name = styled.p`
  font-size: 16px;
  color: #333;
  margin: 0;
`;

export { List, ListItem, Status, Avatar, Name };
