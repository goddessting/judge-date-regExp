function judgeDate(date) {
    let dateRegExp = /^((?:19|20)\d\d)-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/;
    if (dateRegExp.test(date)) {
        let dateArr = date.split('-');

        if(parseInt(dateArr[0]) % 4 === 0 && dateArr[1] === '02') {
            let flag = parseInt(dateArr[2]) < 30;
            console.log(flag);
            return;
        }

        if(dateArr[1] === '02'){
            let flag = parseInt(dateArr[2]) < 29;
            console.log(flag);
            return;
        }
        console.log(true);
        return;
    }
    console.log('> Error: the booking is invalid!');
}

judgeDate('2017-03-30');
judgeDate('2009-02-28');