/** @type {import('@storybook/nextjs').StorybookConfig} */
const config = {
  stories: ["../com/stories/**/*.stories.@(js|jsx)"],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },

  babel() {
    return {
      presets: [
        [
          "@babel/preset-react",
          { runtime: "automatic", importSource: "@emotion/react" },
        ],
      ],
      plugins: ["@emotion/babel-plugin"],
    };
  },
};

export default config;
