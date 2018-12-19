module.exports = {
  apps : [
      {
        name: "sara",
        script: "./backend/index.js",
        max_restarts: 50,
        watch: true,
        env: {
            "PORT": 3000,
            "NODE_ENV": "development"
        },
        env_production: {
            "PORT": 80,
            "NODE_ENV": "production",
        }
      }
  ]
}