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
}
