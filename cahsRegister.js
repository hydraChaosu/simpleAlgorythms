function checkCashRegister(price, cash, cid) {
  var change;
  // Here is your change, ma'am.
  const tempcid = cid;
  let changevalue = cash - price;
  let result = {
    status: "",
    change: []
  };
  const moneyValue = [
    ["PENNY", 0.01],
    ["NICKEL", 0.05],
    ["DIME", 0.1],
    ["QUARTER", 0.25],
    ["ONE", 1],
    ["FIVE", 5],
    ["TEN", 10],
    ["TWENTY", 20],
    ["ONE HUNDRED", 100]
  ];
  for (let i = 8; i >= 0; i--) {
    // console.log(cid[i], moneyValue[i])
    if (changevalue >= moneyValue[i][1]) {
      const maxAmountOfCurrency = Math.round(tempcid[i][1] / moneyValue[i][1]);
      const howMuchINeed = Math.floor(changevalue / moneyValue[i][1]);
      // console.log(`I have ${maxAmountOfCurrency} ${tempcid[i][0]}`);
      // console.log(`I need ${howMuchINeed}`);
      debugger;
      if (maxAmountOfCurrency > howMuchINeed) {
        const givedMoney = howMuchINeed * moneyValue[i][1];
        changevalue = (changevalue - givedMoney).toFixed(2);
        changevalue = Number(changevalue);
        tempcid[i][1] -= givedMoney;
        result.change.push([tempcid[i][0], givedMoney]);
        result.status = "OPEN";
        // console.log(JSON.stringify(result));
        // console.log(changevalue, tempcid[i][1]);
        debugger;
      } else {
        const givedMoney = maxAmountOfCurrency * moneyValue[i][1];
        debugger;
        // console.log(givedMoney);
        changevalue = (changevalue - givedMoney).toFixed(2);
        changevalue = Number(changevalue);
        tempcid[i][1] -= givedMoney;
        result.change.push([tempcid[i][0], givedMoney]);
        debugger;
      }
    }
  }
  const emptyDrawer = tempcid.reduce((acc, item) => {
    return (acc = item[1]);
  }, 0);

  // console.log(emptyDrawer, "rule");

  if (emptyDrawer === 0 && changevalue === 0) {
    result.status = "CLOSED";
    const rule = tempcid.reduce((acc, item) => {
      acc.push(item);
      return acc;
    }, []);
    for (let currency in rule) {
      for (let record in result.change) {
        console.log(rule[currency][0], result.change[record][0]);
        if (rule[currency][0].includes(result.change[record][0])) {
          rule[currency][1] = result.change[record][1];
        }
      }
    }
    console.log(JSON.stringify(rule));
    result.change = rule;
  } else if (changevalue === 0) {
    result.status = "OPEN";
  } else {
    result.status = "INSUFFICIENT_FUNDS";
    result.change = [];
  }
  console.log(JSON.stringify(result));
  return result;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

// checkCashRegister(19.5, 20, [
//   ["PENNY", 1.01],
//   ["NICKEL", 2.05],
//   ["DIME", 3.1],
//   ["QUARTER", 4.25],
//   ["ONE", 90],
//   ["FIVE", 55],
//   ["TEN", 20],
//   ["TWENTY", 60],
//   ["ONE HUNDRED", 100]
// ]);

// checkCashRegister(19.5, 20, [
//   ["PENNY", 0.01],
//   ["NICKEL", 0],
//   ["DIME", 0],
//   ["QUARTER", 0],
//   ["ONE", 0],
//   ["FIVE", 0],
//   ["TEN", 0],
//   ["TWENTY", 0],
//   ["ONE HUNDRED", 0]
// ]);

checkCashRegister(19.5, 20, [
  ["PENNY", 0.5],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 0],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0]
]);
