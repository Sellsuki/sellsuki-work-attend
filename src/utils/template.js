import { postFormatTime } from './Datetime'

const accountListString = (accountArray) => accountArray.reduce((acc, curr) => acc + curr + '\n', '')

export const fbPost = (selectedArray, unselectedArray) => `${postFormatTime()}
✔︎✔︎✔︎✔︎✔︎✔︎✔︎✔︎✔︎
✔︎  คนที่มาทัน 
✔︎✔︎✔︎✔︎✔︎✔︎✔︎✔︎✔︎
` + accountListString(selectedArray) +
`
⤬⤬⤬⤬⤬⤬⤬⤬⤬
⤬   คนที่มาไม่ทัน
⤬⤬⤬⤬⤬⤬⤬⤬⤬
` + accountListString(unselectedArray)
