import styled from 'styled-components';

export const DashContainer = styled.div`
  display: grid;
  grid-template-rows: 41vh 41vh;
  grid-template-columns: 1fr;
  gap: 32px;
  padding-top: 16px;
  height: 100%;
  box-sizing: border-box;
`;

export const Component = styled.div`
  background-color: ${(props) => props.theme.grey};
  border-radius: 20px;
  padding: 12px 20px;
  box-sizing: border-box;
  height: 100%;
  display: grid;
  grid-template-rows: min-content 1fr;
  grid-template-columns: 1fr;
`;

export const PageInput = styled.input`
  background-color: ${(props) => props.theme.grey};
  color: ${(props) => props.theme.white};
  border: 0;
  width: 40px;
  font-size: 20px;
  border: 0;
  text-align: center;

  &:focus {
    color: ${(props) => props.theme.pink};
    border: 0;
    outline: none;
  }
`;

export const Header = styled.h2`
  color: ${(props) => props.theme.white};
  display: block;
  flex: 1;
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #f8c8dc;
`;

export const Table = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: min-content minmax(0, 1fr);
  overflow-y: auto;
`;

export const TableRow = styled.div`
  padding: 12px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  box-sizing: border-box;
  justify-content: space-between;
`;

export const TableHead = styled.div`
  ${TableRow} {
    border-bottom: 2px solid ${(props) => props.theme.pink};
    color: ${(props) => props.theme.pink};
    font-weight: bold;
  }
`;

export const TableBody = styled.div`
  ${TableRow} {
    padding: 12px 0;
    margin: 0 12px;

    :not(:last-child) {
      border-bottom: 1px solid ${(props) => props.theme.white};
    }
  }
  display: grid;
  grid-template-rows: 1fr;
  overflow-y: auto;
  width: 100%;
`;

export const TableCell = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

export const TableLogo = styled.img`
  width: 30px;
  border-radius: 20%;
`;