import styled from "@emotion/styled";

const TransactionHistoryTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  border: 1px solid #e0e0e0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  background-color: #ffffff;
`;

const TableHead = styled.thead`
  background-color: #f0f0f0;
  border-bottom: 2px solid #e0e0e0;
`;

const TableHeadRow = styled.tr``;

const TableHeaderCell = styled.th`
  padding: 16px 24px;
  font-size: 14px;
  text-align: left;
`;

const TableBody = styled.tbody``;

const TableBodyRow = styled.tr`
  &:nth-of-type(even) {
    background-color: #f9f9f9;
  }
`;

const TableDataCell = styled.td`
  padding: 16px 24px;
  font-size: 14px;
  color: #333333;
`;

export {
  TransactionHistoryTable,
  TableHead,
  TableHeadRow,
  TableHeaderCell,
  TableBody,
  TableBodyRow,
  TableDataCell,
};
