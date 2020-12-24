module.exports = {
  apps: [
    {
      name: "hardware-service",
      script: "./dist/app.js",
      env_production: {
        NODE_ENV: "production",
        PORT: 3002,
        ARDUINO_PORT: "/dev/ttyUSB0",
      },
    },
  ],
};
