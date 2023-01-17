function logEvent(log) {
    const logs = new Logs({ log });
    logs.save();
  }
  