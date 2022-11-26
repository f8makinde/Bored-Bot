
 function boredBot(){
    fetch('https://apis.scrimba.com/bored/api/activity')
    .then(response => response.json())
    .then(data => {
        document.getElementById('activity').innerHTML = `${data.activity}`
        document.getElementById('title').textContent = "🦾 HappyBot🦿"
        document.body.classList.add(fun)
 })
}
document.getElementById("btn").addEventListener("click", boredBot)
