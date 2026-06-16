export default {
  apps: [
    {
      name: "web-server-2",
      script: "./dist/index.js",
      node_args: "--env-file=.env",
    },
  ],
};
