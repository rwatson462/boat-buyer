
export default function formatCurrency(amount) {
  const num = (amount/100).toLocaleString('en-GB', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })
  
  return `£${num}`
}
