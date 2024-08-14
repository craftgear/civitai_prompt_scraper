export const configPanelStyle = `
  z-index: 1000;
  position: fixed;
  top: 2rem;
  right: 2rem;
  width: 400px;
  max-height: 90vh;
  overflow: scroll;

  display: none;
  gap: 0.5rem;
  flex-direction: column;
  padding: 1rem;

  color: black;
  border: 1px solid silver;
  background: white;
  box-shadow: 2px 2px 5px silver;
`;

export const buttonStyle = `
  display: flex;
  flex-grow: 1;
  min-height: 34px;
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
  padding: 0 2rem;
  white-space: nowrap;
  overflow: hidden;
`;

export const disabledButtonStyle = `
  ${buttonStyle}
  background-color: grey;
  disable: true;
`;

export const downloadAllGalleryButtonStyle = `
  ${buttonStyle}
  flex: none;
`;

export const downloadAllGalleryDisabledButtonStyle = `
  ${disabledButtonStyle}
  flex: none;
  `;

export const galleryButtonStyle = `
  ${buttonStyle}
  margin: 0 12px;
  width: auto;
`;

export const galleryDisabledButtonStyle = `
  ${disabledButtonStyle}
  margin: 0 12px;
  width: auto;
`;

export const downloadAllButtonStyle = `
  ${buttonStyle}
  padding: 0;
  fontWeight: bold;
  background-color: #228be6;
`;

export const buttonContainerStyle = `
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 0.7rem;
`;

export const toggleGalleryStyle = `
  border: 1px solid silver;
  color: silver;
  font-weight: bold;
  padding: 0 8px;
`;
