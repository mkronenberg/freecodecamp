const denominations = {
  "PENNY"       : .01, 
  "NICKEL"      : .05, 
  "DIME"        : .1, 
  "QUARTER"     : .25, 
  "ONE"         : 1, 
  "FIVE"        : 5, 
  "TEN"         : 10, 
  "TWENTY"      : 20, 
  "ONE HUNDRED" : 100
};

function checkCashRegister(price, cash, cid) {

  let changeDue = cash - price;

  // for the remaining amound due, dispense the maximum possible of a denomination
  const dispenseAvailable = (due, denominationValue, ValueInRegisterOfDenomination) => {
    const maxDispenseOfDenomination = Math.floor( due / denominationValue );
        //console.log("maxDispenseOfDenomination is " + maxDispenseOfDenomination)
    const availableUnitsOfDenomination = ValueInRegisterOfDenomination / denominationValue;
    if (maxDispenseOfDenomination <= availableUnitsOfDenomination) 
      {return maxDispenseOfDenomination * denominationValue}
    else if (maxDispenseOfDenomination > availableUnitsOfDenomination) 
      {return availableUnitsOfDenomination * denominationValue};
  }

  // A dry run of dispersing cash to see if remaining due can reach 0
  const statusGenerator = () => {
    let remainderDue = changeDue;

    const totalcid = cid.reduce(
      (accumulator, currentValue) => accumulator + currentValue[1], 
      0,
    ).toFixed(2);

    // loop through each denomination from top to botton
    for (let index = 8; index >= 0; index--) {
      let [denomination, value] = cid[index];
          //console.log("at start of loop remainderDue = " + remainderDue)
  
      // run index through dispenseAvailable function and save
      const dispenseCash = dispenseAvailable(remainderDue, denominations[denomination], value);
          //console.log("in this loop dispense " + dispenseCash + " in " + denomination)
  
      // subtract the dispensal of cash for the cid array
      value -= dispenseCash;
  
      // subtract the dispensal of cash from the change due
      remainderDue = (remainderDue - dispenseCash).toFixed(2);
          //console.log("at end of loop remainderDue = " + remainderDue)
    }
    console.log("cash due is " + changeDue + " remainder after test is " + remainderDue + " and amount in register is " + totalcid)
    if (remainderDue > 0) {return "INSUFFICIENT_FUNDS"}
    else if (changeDue == totalcid) {return "CLOSED"}
    else if (changeDue < totalcid) {return "OPEN"}
  }

  const registerStatus = statusGenerator();
  console.log("register status is " + registerStatus)
  
  if (registerStatus === "INSUFFICIENT_FUNDS") {
    return {status: "INSUFFICIENT_FUNDS", change: []};
  }

  

  const changeArr = []

  // repeat of dispersing cash while building the Change Array
  for (let index = 8; index >= 0; index--) {
    let [denomination, value] = cid[index];
        //console.log("at start of loop changeDue = " + changeDue)

    // run index through dispenseAvailable function and save
    const dispenseCash = dispenseAvailable(changeDue, denominations[denomination], value);
        //console.log("in this loop dispense " + dispenseCash + " in " + denomination)

    if (registerStatus === "OPEN" && dispenseCash > 0) {
      changeArr.push([denomination, dispenseCash]);
    }

    else if (registerStatus === "CLOSED") {
      changeArr.unshift([denomination, dispenseCash]);
    }

    // subtract the dispensal of cash for the cid array
    value -= dispenseCash;

    // subtract the dispensal of cash from the change due
    changeDue = (changeDue - dispenseCash).toFixed(2);
        //console.log("at end of loop changeDue = " + changeDue)
  }
  
  return {status: registerStatus, change: changeArr}
  
}

checkCashRegister(19.5, 20, 
  [
    ["PENNY", 1.01], 
    ["NICKEL", 2.05], 
    ["DIME", 3.1], 
    ["QUARTER", 4.25], 
    ["ONE", 90], 
    ["FIVE", 55], 
    ["TEN", 20], 
    ["TWENTY", 60], 
    ["ONE HUNDRED", 100]
  ]
) 
    //should return {status: "OPEN", change: [["QUARTER", 0.5]]}.

checkCashRegister(3.26, 100, 
  [
    ["PENNY", 1.01], 
    ["NICKEL", 2.05], 
    ["DIME", 3.1], 
    ["QUARTER", 4.25], 
    ["ONE", 90], 
    ["FIVE", 55], 
    ["TEN", 20], 
    ["TWENTY", 60], 
    ["ONE HUNDRED", 100]
  ]
) 

    //should return {status: "OPEN", change: 
    //  [
    //    ["TWENTY", 60], 
    //    ["TEN", 20], 
    //    ["FIVE", 15], 
    //    ["ONE", 1], 
    //    ["QUARTER", 0.5], 
    //    ["DIME", 0.2], 
    //    ["PENNY", 0.04]
    //  ]
    //}

checkCashRegister(19.5, 20, 
  [
    ["PENNY", 0.01], 
    ["NICKEL", 0], 
    ["DIME", 0], 
    ["QUARTER", 0], 
    ["ONE", 0], 
    ["FIVE", 0], 
    ["TEN", 0], 
    ["TWENTY", 0], 
    ["ONE HUNDRED", 0]
  ]
) 
    //should return {status: "INSUFFICIENT_FUNDS", change: []}.

checkCashRegister(19.5, 20, 
  [
    ["PENNY", 0.01], 
    ["NICKEL", 0], 
    ["DIME", 0], 
    ["QUARTER", 0], 
    ["ONE", 1], 
    ["FIVE", 0], 
    ["TEN", 0], 
    ["TWENTY", 0], 
    ["ONE HUNDRED", 0]
  ]
) 
    //should return {status: "INSUFFICIENT_FUNDS", change: []}.

checkCashRegister(19.5, 20, 
  [
    ["PENNY", 0.5], 
    ["NICKEL", 0], 
    ["DIME", 0], 
    ["QUARTER", 0], 
    ["ONE", 0], 
    ["FIVE", 0], 
    ["TEN", 0], 
    ["TWENTY", 0], 
    ["ONE HUNDRED", 0]
  ]
) 

    //should return {status: "CLOSED", change: 
    //  [
    //    ["PENNY", 0.5], 
    //    ["NICKEL", 0], 
    //    ["DIME", 0], 
    //    ["QUARTER", 0], 
    //    ["ONE", 0], 
    //    ["FIVE", 0], 
    //    ["TEN", 0], 
    //    ["TWENTY", 0], 
    //    ["ONE HUNDRED", 0]
    //  ]
    //}