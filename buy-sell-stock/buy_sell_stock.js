const maxProfit = (prices) => {
  let buy = 0,
    sell = 1,
    max = (profit = 0);

  while (sell < prices.length) {
    if (prices[buy] < prices[sell]) {
      profit = prices[sell] - prices[buy];
      max = Math.max(max, profit);
    } else {
      buy = sell;
    }
    sell++;
  }
  return max;
};
prices = [1, 2, 3, 4, 5, 6, 7];
console.log(maxProfit(prices));
