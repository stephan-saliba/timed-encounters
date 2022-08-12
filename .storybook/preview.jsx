export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const RpgUI = (Story) => {
  return (
    <div className="rpgui-content">
      <Story />
    </div>
  );
};

export const decorators = [RpgUI];
