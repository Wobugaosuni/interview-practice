export const simplifyPath = function(path) {
    const arr = path.split('/')
    const pathArr = []

    for (let item of arr) {
        if (item !== '' && item !== '.' && item !== '..') {
            // 推入
            pathArr.push(item)
        }

        if (item === '..') {
            // 删除数组最后一个
            pathArr.pop()
        }
    }

    const result = '/' + pathArr.join('/')
    console.log('result:', result)
    return result
}