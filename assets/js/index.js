const buttons = document.querySelectorAll("button")
const result = document.querySelector("#result-display")

function addValue(value) {
  const span = document.querySelector(".selecte span")
  span.innerHTML = `${span.textContent}${value}`
}

function addOrRemoveClass(element) {
  if (!element.classList.contains("selecte")) {
    const item = document.querySelector(".selecte")
    item.classList.remove("selecte")
    return element.classList.add("selecte")
  }
  return null
}

function clearLastChild() {
  let value = document.querySelector(".selecte span")

  const newValue = value.textContent.substring(0, value.textContent.length - 1)
  return (value.innerHTML = newValue)
}

function clearTotal() {
  const todos = document.querySelectorAll(".calc span")
  todos.forEach(item => {
    item.textContent = ""
  })
  result.innerHTML = 0
}

function calc() {
  const taxaAdm = 25 / 100
  let valueCredit = parseFloat(
    document.querySelector(".credito span").textContent
  )
  const valueEntrada = parseFloat(
    document.querySelector(".entrada span").textContent
  )
  const valueMeses = parseFloat(
    document.querySelector(".meses span").textContent
  )
  if (isNaN(valueCredit) || isNaN(valueEntrada) || isNaN(valueMeses)) {
    return alert("Preencha todos os campos")
  }

  valueCredit += valueCredit * taxaAdm - valueEntrada

  let final = valueCredit / valueMeses
  return (result.innerHTML = final.toFixed(2))
}

buttons.forEach(btn => {
  btn.addEventListener("click", e => {
    const value = e.target.textContent
    if (value >= 0 || value === ",") {
      addValue(value)
    } else if (value === "C") {
      clearLastChild()
    } else if (value === "CE") {
      clearTotal()
    } else {
      calc()
    }
  })
})
