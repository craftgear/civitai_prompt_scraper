export const configPanelStyle = `
  z-index: 100;
  position: fixed;
  top: 2rem;
  right: 2rem;
  width: 400px;

  display: none;
  gap: 0.5rem;
  flex-direction: column;
  padding: 1rem;

  border: 1px solid silver;
  background: white;
  box-shadow: 2px 2px 5px silver;
`;

export const buttonStyle = `
  display: flex;
  width: auto;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: #228be6;
  height: 36px;
  border-radius: 4px;
  font-weight: bold;
  font-size: small;
  cursor: pointer;
  word-break: keep-all;
`;

export const disabledButtonStyle = `
  display: flex;
  width: auto;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: grey;
  disable: true;
  height: 36px;
  border-radius: 4px;
  font-weight: bold;
  font-size: small;
  cursor: none;
  word-break: keep-all;
`;
