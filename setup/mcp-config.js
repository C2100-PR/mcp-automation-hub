// MCP Configuration
const mcpConfig = {
  browserAutomation: {
    enabled: true,
    defaultTimeout: 30000,
    retryAttempts: 3
  },
  github: {
    enabled: true,
    defaultBranch: 'main',
    autoCreatePR: true
  },
  database: {
    enabled: false,
    type: 'placeholder'
  }
};

module.exports = mcpConfig;