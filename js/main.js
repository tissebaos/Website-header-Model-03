/*-- main.js --*/
/*-- By Togodba Tissébé Jean (Tissébaos) --*/
let circle = document.querySelector("#circle")
let btn_up = document.querySelector("#btnUp")
let btn_down = document.querySelector("#btnDown")

let rotation_value = circle.style.transform
let rotation_sum

btn_up.addEventListener("click", function () {
  rotation_sum = rotation_value + "rotate(-90deg)"
  circle.style.transform = rotation_sum
  rotation_value = rotation_sum
})

btn_down.addEventListener("click", function () {
  rotation_sum = rotation_value + "rotate(90deg)"
  circle.style.transform = rotation_sum
  rotation_value = rotation_sum
})

function menu_display (id) {
  let items = document.getElementById(id)
  if (items.style.transform == "scale(0)") {
    items.style.transform = "scale(1)"
    items.style.animation = "radiusAnimation 1s linear"
  } else {
    items.style.transform = "scale(0)"
  }
}