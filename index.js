// code your solution here
function saturdayFun(action="roller-skate"){
    return `This Saturday, I want to ${action}!`}

function mondayWork(activity="go to the office"){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(sign="*"){
    const innerfunction = function(adjective="special"){
        return `You are ${sign}${adjective}${sign}!`
    }
    return innerfunction
}

