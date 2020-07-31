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
