export const getRandomFromArr = (nums: number[]) => {
    let tempNum = Math.floor(Math.random() * nums.length)
    let tempEl = nums[tempNum]
    nums.splice(tempNum, 1)
    return tempEl
}