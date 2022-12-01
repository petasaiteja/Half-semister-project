
const is_valid_date = (month, day, year) => {
    if(month < 1 || month > 12 || day < 1 || day > 31 || year < 1582){
        return false
    }
    leap = is_leap_year(year)
    if ([1, 3, 5, 7, 8, 10, 12].includes(month) && day >= 1 && day <= 31){
        return true
    }else if ([4, 6, 9, 11].includes(month) && day >= 1 && day <= 30){
        return true
    }else if (month == 2 && leap && day >= 1 && day <= 29){
        return true
    }else if (month == 2 && !leap && day >= 1 && day <= 28){
        return true
    }else{
        return false
    }
}

const is_leap_year = year => {
    return year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)
}

const zodiac = (month, day, year) => {
    if ((month == 1 && range(20, 32).includes(day)) || (month == 2 && range(1, 19).includes(day))){
        return "Aquarius"
    }else if ((month == 2 && is_leap_year(year) && range(19, 30).includes(day)) || (month == 3 && range(1, 21).includes(day))){
        return "Pisces"
    }else if ((month == 2 && !is_leap_year(year) && range(19, 29).includes(day)) || (month == 3 && range(1, 21).includes(day))){
        return "Pisces"
    }else if ((month == 3 && range(21, 32).includes(day)) || (month == 4 && range(1, 20).includes(day))){
        return "Aries"
    }else if ((month == 4 && range(20, 31).includes(day)) || (month == 5 && range(1, 21).includes(day))){
        return "Taurus"
    }else if ((month == 5 && range(21, 32).includes(day)) || (month == 6 && range(1, 21).includes(day))){
        return "Gemini"
    }else if ((month == 6 && range(21, 31).includes(day)) || (month == 7 && range(1, 23).includes(day))){
        return "Cancer"
    }else if ((month == 7 && range(23, 32).includes(day)) || (month == 8 && range(1, 23).includes(day))){
        return "Leo"
    }else if ((month == 8 && range(23, 32).includes(day)) || (month == 9 && range(1, 23).includes(day))){
        return "Virgo"
    }else if ((month == 9 && range(23, 31).includes(day)) || (month == 10 && range(1, 23).includes(day))){
        return "Libra"
    }else if ((month == 10 && range(23, 32).includes(day)) || (month == 11 && range(1, 22).includes(day))){
        return "Scorpio"
    }else if ((month == 11 && range(22, 31).includes(day)) || (month == 12 && range(1, 22).includes(day))){
        return "Sagittarius"
    }else if ((month == 12 && range(22, 32).includes(day)) || (month == 1 && range(1, 20).includes(day))){
        return "Capricorn"
    }else{
        return "Unknown Zodiac Sign"
    }
}

const range = (start, stop=null, step=null) => {
    let result_arr = []
    let stop_pos = stop == null ? start : stop
    const arr = [...Array(stop_pos).keys()]
    arr.forEach((item, index)=>{
        if(stop == null){
            result_arr = [...result_arr, item]
        }else{
            if(step == null){
                if(index >= start){
                    result_arr = [...result_arr, item]
                }
            }else{
                if(index >= start && (index-start) % step == 0){
                    result_arr = [...result_arr, item]
                }
            }
        }
    })   

    return result_arr
}

const day_number_of_date = (month, day, year) => {
    if (month < 0 || day < 0 || year < 0){
        throw Error("Values must be postive integer values")
    }else if (!is_valid_date(month, day, year)){
        throw Error("Invalid date format")
    }else{
        let days = 0
        if (month == 1){
            // days = day
            range(1, day+1).forEach(d=>{
                da_te = new Date(`${year}-${month}-${d}`)
                if(da_te.getDay() != 0){
                    days += 1
                }
            })
        }else if (month == 2) {
            // days = 31 + day
            range(1, month+1).forEach(m=>{
                if(m == 1){
                    range(1, 32).forEach(d=>{
                        da_te = new Date(`${year}-${m}-${d}`)
                        if(da_te.getDay() != 0){
                            days += 1
                        }
                    })
                }else{
                    range(1, day+1).forEach(d=>{
                        da_te = new Date(`${year}-${m}-${d}`)
                        if(da_te.getDay() != 0){
                            days += 1
                        }
                    })
                }
            })
        }else{
            range(1, month + 1).forEach(m => {
                if ([1, 3, 5, 7, 8, 10, 12].includes(m) && m != month){
                    // days += 31
                    range(1, 32).forEach(d=>{
                        da_te = new Date(`${year}-${m}-${d}`)
                        if(da_te.getDay() != 0){
                            if(m == 12 && d == 24){
                                days += 0
                            }else{
                                days += 1
                            }
                        }
                    })
                }else if ([1, 3, 5, 7, 8, 10, 12].includes(m) && m == month){
                    // days += day
                    range(1, day+1).forEach(d=>{
                        da_te = new Date(`${year}-${m}-${d}`)
                        if(da_te.getDay() != 0){
                            if(m == 12 && d == 24){
                                days += 0
                            }else{
                                days += 1
                            }
                        }
                    })
                }else if ([4, 6, 9, 11].includes(m) && m != month){
                    // days += 30
                    range(1, 31).forEach(d=>{
                        da_te = new Date(`${year}-${m}-${d}`)
                        if(da_te.getDay() != 0){
                            if(m == 11){
                                thanksgiving = getThanksGiving(year)
                                if(d == thanksgiving){
                                    days += 0
                                }else{
                                    days += 1
                                }
                            }else{
                                days += 1
                            }
                        }
                    })
                }else if ([4, 6, 9, 11].includes(m) && m == month){
                    // days += day
                    range(1, day+1).forEach(d=>{
                        da_te = new Date(`${year}-${m}-${d}`)
                        if(da_te.getDay() != 0){
                            if(m == 11){
                                thanksgiving = getThanksGiving(year)
                                if(d == thanksgiving){
                                    days += 0
                                }else{
                                    days += 1
                                }
                            }else{
                                days += 1
                            }
                        }
                    })
                }
            })
            day_val = is_leap_year(year) ? 29 : 28
            range(1, day_val+1).forEach(d=>{
                da_te = new Date(`${year}-2-${d}`)
                if(da_te.getDay() != 0){
                    days += 1
                }
            })
        }
        return days
    }
}

const getThanksGiving = (year) => {
    let v = 0
    let td = {1: 29, 2:25, 3:24, 4:25, 5:26, 6:27, 7:28}
    range(1, 8).forEach(d=>{
        da_te = new Date(`${year}-11-${d}`)
        if(da_te.getDay() == 4){
            v = d
        }
    })
    return td[v]
}

const prev_nex_date = (month, day, year) => {
    if (month == 2 && is_valid_date(month, day, year)){  // Check if the month is February
        if (is_leap_year(year)){  
            if (day == 29 || day == 1){   // Check if the day is the first or last day of the month
                if (day == 29){   // If it is the last day of February in a leap year, we do the following
                    nex_month = (month + 1) % 12
                    nex_day = 1
                    nex_year = year
                    nex_date = `${nex_year}-${nex_month}-${nex_day}`
                    
                    prev_month = month
                    prev_day = day - 1
                    prev_year = year
                    prev_date = `${prev_year}-${prev_month}-${prev_day}`
                    return {"prev_date": prev_date, "nex_date": nex_date}
                }else{   // If it is the first day of February in a leap year, we do the following
                    nex_month = month
                    nex_day = day + 1
                    nex_year = year
                    nex_date = `${nex_year}-${nex_month}-${nex_day}`
                    
                    prev_month = month - 1 
                    prev_day = [1, 3, 5, 7, 8, 10, 12].includes(prev_month) ? 31 : 30
                    prev_year = year
                    prev_date = `${prev_year}-${prev_month}-${prev_day}`
                    return {"prev_date": prev_date, "nex_date": nex_date}
                }
            }else{   // If it is any other day in February in a leap year, we do the following
                nex_date = `${year}-${month}-${day+1}`
                prev_date = `${year}-${month}-${day-1}`
                return {"prev_date": prev_date, "nex_date": nex_date}
            }
        }else{   // If it is not a year leap year, February has 28 days
            if (day == 28 || day == 1){   // Check if it is the first or last day of February
                if (day == 28){   // If it is the last day of February, do the following
                    nex_month = (month + 1) % 12
                    nex_day = 1
                    nex_year = year
                    nex_date = `${nex_year}-${nex_month}-${nex_day}`
                    
                    prev_month = month
                    prev_day = day - 1
                    prev_year = year
                    prev_date = `${prev_year}-${prev_month}-${prev_day}`
                    return {"prev_date": prev_date, "nex_date": nex_date}
                }else{   // If it is the first day of February, do the following
                    nex_month = month
                    nex_day = day + 1
                    nex_year = year
                    nex_date = `${nex_year}-${nex_month}-${nex_day}`
                    
                    prev_month = month - 1 
                    prev_day = [1, 3, 5, 7, 8, 10, 12].includes(prev_month) ? 31 : 30
                    prev_year = year
                    prev_date = `${prev_year}-${prev_month}-${prev_day}`
                    return {"prev_date": prev_date, "nex_date": nex_date}
                }
            }else{   // If it is any other day in February, do the following
                nex_date = `${year}-${month}-${day+1}`
                prev_date = `${year}-${month}-${day-1}`
                return {"prev_date": prev_date, "nex_date": nex_date}
            }
        }
    }else if ([1, 3, 5, 7, 8, 10, 12].includes(month)){  // Check if the month is month with 31 days
        if (day == 31 || day == 1){   // Check if it is the first or last day of the month
            if (day == 31){   // If it is the last day, do the following
                nex_month = (month + 1) % 12
                nex_day = 1
                nex_year = month == 12 ? year + 1 : year
                nex_date = `${nex_year}-${nex_month}-${nex_day}`
                
                prev_month = month
                prev_day = day - 1
                prev_year = year
                prev_date = `${prev_year}-${prev_month}-${prev_day}`
                return {"prev_date": prev_date, "nex_date": nex_date}
            }else{   // If it is the first day, do the following
                nex_month = month
                nex_day = day + 1
                nex_year = year
                nex_date = `${nex_year}-${nex_month}-${nex_day}`
                
                prev_month = null
                prev_day = null
                prev_year = null
                if (month - 1 == 2){  // Check if the previous month is February and do the following
                    if (is_leap_year(year)){  // If it is a leap year, do the following
                        prev_month = month - 1
                        prev_day = 29
                        prev_year = year
                    }else{   // If it is not a leap year, do the following
                        prev_month = month - 1
                        prev_day = 28
                        prev_year = year
                    }
                }else{   // If it is any other month but February, do the following
                    prev_month = month == 1 ? 12 : month - 1
                    prev_day = [1, 3, 5, 7, 8, 10, 12].includes(prev_month) ? 31 : 30
                    prev_year = month == 1 ? year - 1 : year
                }
    
                prev_date = `${prev_year}-${prev_month}-${prev_day}`
                return {"prev_date": prev_date, "nex_date": nex_date}
            }
        }else{   // If it is any other day in the month with 31 days, do the following
            prev_date = `${year}-${month}-${day-1}`
            nex_date = `${year}-${month}-${day+1}`
            return {"prev_date": prev_date, "nex_date": nex_date}
        }
    }else{   // This is for the months with 30 days
        if (day == 30 || day == 1){   // Check if it is the first or last day of the month
            if (day == 30){   // If it is the last day of the month, do the following
                nex_month = month == 11 ? 12 : (month + 1) % 12
                nex_day = 1
                nex_year = year
                nex_date = `${nex_year}-${nex_month}-${nex_day}`
                
                prev_month = month
                prev_day = day - 1
                prev_year = year
                prev_date = `${prev_year}-${prev_month}-${prev_day}`
                return {"prev_date": prev_date, "nex_date": nex_date}
            }else{   // If it is the first day of the month, do the following
                nex_month = month
                nex_day = day + 1
                nex_year = year
                nex_date = `${nex_year}-${nex_month}-${nex_day}`
                
                prev_month = month - 1
                prev_day = [1, 3, 5, 7, 8, 10, 12].includes(month) ? 31 : 30
                prev_year = year
                prev_date = `${prev_year}-${prev_month}-${prev_day}`
                return {"prev_date": prev_date, "nex_date": nex_date}
            }
        }else{   // If it is any other day of the month, do the following
            prev_date = `${year}-${month}-${day-1}`
            nex_date = `${year}-${month}-${day+1}`
            return {"prev_date": prev_date, "nex_date": nex_date}
        }
    }
}

const calendarDay = (month, day, year) => {
    const da_te = new Date(`${year}-${month}-${day}`)
    const da_y = (da_te.getDay() + (year == new Date().getFullYear() ? 1 : 0)) % 7
    const days = {
        0: "Sunday", 
        1: "Monday", 
        2: "Tuesday", 
        3: "Wednesday", 
        4: "Thursday", 
        5: "Friday", 
        6: "Saturday"
    }
    return days[da_y]
}

const shoppingDays = (month, day, year) => {
    // This gives us the number of shopping days to Christmas
    const xmas_days = day_number_of_date(12, 24, year)

    // The day_number_of_date function gives us the total number of shopping days from Jan 1 to 
    // the selected date. Hence if the selected date is 2022-01-14, the total shopping days is 12
    let x_num_days = xmas_days - day_number_of_date(month, day, year)
    let d_total = 0

    // If the x_num_days is less than 0, it means the date selected is after December 25 of that 
    // year. So we calculate the appropriate number of days from that date to the next year of 
    // December 25 to get the total number of shopping days until Christmas
    if(x_num_days < 0){
        range(day, 32).forEach(d=>{
            da_te = new Date(`${year}-${month}-${d}`)
                if(da_te.getDay() != 0){
                    d_total += 1
                }
        })
        x_num_days = d_total + day_number_of_date(12, 24, year+1)
    }
    
    return x_num_days
}

const onChange = e => {
    let split_val = e.target.value.split('-')
    let yy = Number(split_val[0])
    let mm = Number(split_val[1])
    let dd = Number(split_val[2])

    // const yy = document.querySelector('#yy').value
    // const mm = document.querySelector('#mm').value
    // const dd = document.querySelector('#dd').value
    // Check if user has selected a date from the calendar and it is not an empty string
    if(yy != '' && dd != '' && dd != ''){

        // This is our targeted output
        const output = document.querySelector('#output')

        try{
        let year = Number(yy)
        let month = Number(mm)
        let day = Number(dd)


        // The prev_next_date function returns an object containing the previous and next date
        // of the selected date. Hence if the selected date is 2022-11-20,
        // the previous date becomes 2022-11-19 and the next date is 2022-11-21
        const {prev_date, nex_date} = prev_nex_date(month, day, year)

        const x_num_days = shoppingDays(month, day, year)

        // Check if the date is valid and proceed.
        if(is_valid_date(month, day, year)){
            output.style.visibility = 'visible'
            output.innerHTML = `
                <div style="padding: 10px">
                    <div>The selected date is <span class="green-text1">${year}-${month}-${day}</span></div>
                    <div>It's ${calendarDay(month, day, year)} of ${year}-${month}-${day}</div>
                    <div>The previous date is ${prev_date}</div>
                    <div>The next date is ${nex_date}</div>
                    <div>The Zodiac sign of the date is ${zodiac(month, day,year)}</div>
                    <div>There are ${x_num_days} shopping day until Christmas</div>
                </div>
            `
        }else{
            output.style.visibility = 'visible'
            output.innerHTML = `
                <div style="padding: 10px; color: red">Date entered is invalid!</div>
            `
        }
        }catch(e){
            output.style.visibility = 'visible'
            output.innerHTML = `${e.message}`
        }
    }else{
        const output = document.querySelector('#output')
        output.style.visibility = 'visible'
        output.innerHTML = `<div style="padding: 10px">Enter a valid date to continue</div>`
    }
}
module.exports = {
    zodiac,
    calendarDay,
    prev_nex_date,
    shoppingDays,
    is_valid_date
}
