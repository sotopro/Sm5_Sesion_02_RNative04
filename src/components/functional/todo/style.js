import styled from "styled-components";

export const TodoItem = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  border-radius: 3px;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15);
  font-size: 12px;
  flex-direction: row;
  flex: 1;
  margin-bottom: 6px;
  padding: 0 14px;
  text-decoration: ${props => (props.isCompleted ? "line-through" : "")};
  
  .left {
    flex: 0.72;
  }
  .right {
    flex: 0.28;
  }
`;

export const Button = styled.button`
  background: #fafafa;
  border: 1px solid #ddd;
  color: #212121;
  cursor: pointer;
  font-size: 12px;
  outline: none;
  padding: 5px 10px;
  text-decoration: none;
`