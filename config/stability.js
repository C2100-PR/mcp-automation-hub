const stabilityConfig = {
  // Error handling and retry logic
  retryPolicy: {
    maxAttempts: 3,
    backoffMS: 1000,
    timeout: 5000
  },
  
  // Validation checks
  validation: {
    checkPermissions: true,
    validateConfig: true,
    enforceSSL: true
  },
  
  // Monitoring
  monitoring: {
    enabled: true,
    logLevel: "debug",
    alertOnError: true
  }
};

module.exports = stabilityConfig;