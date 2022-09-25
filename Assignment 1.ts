type Last = <T>(arr:T[]) => T

type Prepend = <M>(arr:M[], item: M) => M

const last : Last = (arr) => arr[arr.length -1]
const prepend : Prepend = (arr, item) => {
    arr.unshift(item)
    return arr[0]
}
