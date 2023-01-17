class SalesAgentController {
  async setCommission(percentage) {
    try {
      // Update the commission percentage in the Sales Agent schema
      await SalesAgent.updateMany({}, { $set: { commission: percentage } });
      return true;
    } catch (error) {
      throw new Error(`Error setting commission: ${error}`);
    }
  }

  async setBonus(percentage) {
    try {
      // Update the bonus percentage in the Sales Agent schema
      await SalesAgent.updateMany({}, { $set: { bonus: percentage } });
      return true;
    } catch (error) {
      throw new Error(`Error setting bonus: ${error}`);
    }
  }

  async setGuarantorBonus(percentage) {
    try {
      // Update the guarantor bonus percentage in the Sales Agent schema
      await SalesAgent.updateMany({}, { $set: { guarantorBonus: percentage } });
      return true;
    } catch (error) {
      throw new Error(`Error setting guarantor bonus: ${error}`);
    }
  }

  async setTarget(target) {
    try {
      // Update the target amount of loans sold in the Sales Agent schema
      await SalesAgent.updateMany({}, { $set: { target: target } });
      return true;
    } catch (error) {
      throw new Error(`Error setting target: ${error}`);
    }
  }

  async setReviewPeriod(period) {
    try {
      // Update the review period in the Sales Agent schema
      await SalesAgent.updateMany({}, { $set: { reviewPeriod: period } });
      return true;
    } catch (error) {
      throw new Error(`Error setting review period: ${error}`);
    }
  }
}
