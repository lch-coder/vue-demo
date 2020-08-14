const isObject = obj => typeof obj === 'object' && obj != null

export default {
    /**
     * 判断一个对象是否在数组里面
     * @param {Array} arr 对象数组
     * @param {Object} obj 对象
     */
    isObjInArr(arr, obj) {
        if (JSON.stringify(arr).includes(JSON.stringify(obj)) !== -1) {
            return true
        } else {
            return false
        }
    },
    // 获取上个月的时间范围
    getLastMonthRange() {
        var dataValue = new Date()
        var currentYear = dataValue.getFullYear()
        var currentMonth = dataValue.getMonth()
        var prevCurrentYear = 0,
            prevCurrentMonth = 0
        if (currentMonth == 0) {
            prevCurrentYear = currentYear - 1
            prevCurrentMonth = 12
        } else {
            prevCurrentYear = currentYear
            prevCurrentMonth = currentMonth - 1
        }
        var prevmonthLastday =
            new Date(currentYear, currentMonth, 1).getTime() - 1
        var stime = formatDate(new Date(prevCurrentYear, prevCurrentMonth, 1)) //开始时间
        var etime = formatDate(new Date(prevmonthLastday)) //结束时间
        return [stime, etime]
    },
    /**
     *
     * @param {Array} arr1 // 排序数组
     * @param {Array} arr2 // 需要排序的对象数组
     */
    sortByArr(arr1, arr2) {
        arr2.sort((prev, next) => {
            return arr1.indexOf(prev.age) - arr1.indexOf(next.age)
        })
        return arr2
    },

    cloneDeep(source) {
        if (!isObject(source)) return source // 非对象返回自身
        const target = Array.isArray(source) ? [] : {}
        for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                if (isObject(source[key])) {
                    target[key] = this.cloneDeep(source[key]) // 注意这里
                } else {
                    target[key] = source[key]
                }
            }
        }
        return target
    },

    // getDay(0);//当天日期   getDay(-7);//7天前日期   getDay(0);//当天日期   getDay(-3);//3天前日期
    getDay(day) {
        var today = new Date()
        var targetday_milliseconds = today.getTime() + 1000 * 60 * 60 * 24 * day
        today.setTime(targetday_milliseconds) //注意，这行是关键代码
        var tYear = today.getFullYear()
        var tMonth = today.getMonth()
        var tDate = today.getDate()
        tMonth = this.doHandleMonth(tMonth + 1)
        tDate = this.doHandleMonth(tDate)
        return tYear + '-' + tMonth + '-' + tDate
    },
    doHandleMonth(month) {
        var m = month
        if (month.toString().length == 1) {
            m = '0' + month
        }
        return m
    },
}
function formatDate(date) {
    var myyear = date.getFullYear()
    var mymonth = date.getMonth() + 1
    var myweekday = date.getDate()
    if (mymonth < 10) {
        mymonth = '0' + mymonth
    }
    if (myweekday < 10) {
        myweekday = '0' + myweekday
    }
    return myyear + '/' + mymonth + '/' + myweekday
}
