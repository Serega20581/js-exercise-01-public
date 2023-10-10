const isHappyTicket = (number) => {
    let x = 0;
    let y = 0;
    for(let z = 0;z<number.length/2;z++) x+=parseInt(number[z]);
    for(let z = number.length/2;z<number.length;z++) y+=parseInt(number[z]);
    if(x==y)return true;
    else return false;
};

export { isHappyTicket };