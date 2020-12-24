module.exports = {
  apps: [
    {
      name: "server",
      script: "./dist/app.js",
      env_production: {
        NODE_ENV: "production",
        PORT: 3001,
      },
    },
  ],
};
