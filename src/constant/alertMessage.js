// 统一处理 Alert Message
export const alertMessage = (msg, condition) => {
  const alert_message = {
    'USED': {
      title: '該優惠碼已被兌換使用',
      message: '請核對輸入的優惠碼是否正確或輸入新的優惠碼兌換使用'
    },
    'INSUFFICIENT': {
      title: `該優惠碼僅可用於單一訂單金額滿$${parseInt(condition)}時使用`,
      message: '請核對輸入的優惠碼是否正確或輸入新的優惠碼兌換使用'
    },
  }
  let message = alert_message[msg] || {
    title: '該優惠碼已失效',
    message: '請核對輸入的優惠碼是否正確或輸入新的優惠碼兌換使用'
  }
  return message
}
