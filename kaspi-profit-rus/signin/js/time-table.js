function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}



let now = new Date()
let yesterday = new Date()
// yesterday.setDate(yesterday.getDate() - 1);

let selectDateMob = $(".signals__col").find("span");
let selectTimeMob = $(".signals__col").find("pop");


let selectDateDesctop = $(".dim-date")
let selectTimeDesctop = $(".dim-time")

let arrRandomTime = []

for (let i = 0; i < selectDateMob.length; i++) {
    let randomClode = getRandomArbitrary(10, 90)
    let pastClose = new Date()

    arrRandomTime.push(pastClose.setMinutes(pastClose.getMinutes() - randomClode));
}

arrRandomTime.sort((a, b) => b - a);


for (let i = 0; i < selectDateMob.length; i++) {
    let randomOpen = getRandomArbitrary(91, 300)
    let pastClose = new Date(arrRandomTime[i])
    let pastOpen = new Date()
    pastOpen.setMinutes(pastOpen.getMinutes() - randomOpen)


    if (i % 2 == 0) {
        let time = getTimeGenerator(pastOpen.getHours(), pastOpen.getMinutes())

        $(selectDateMob[i]).html(pastOpen.toLocaleDateString())
        $(selectTimeMob[i]).html(time)

        $(selectDateDesctop[i]).html(pastOpen.toLocaleDateString())
        $(selectTimeDesctop[i]).html(time)

    } else {
        let time = getTimeGenerator(pastClose.getHours(), pastClose.getMinutes())

        $(selectDateMob[i]).html(pastClose.toLocaleDateString())
        $(selectTimeMob[i]).html(time)

        $(selectDateDesctop[i]).html(pastClose.toLocaleDateString())
        $(selectTimeDesctop[i]).html(time)
    }
}


function randomSeconds(min, max) {
    let rand = Math.round(min + Math.random() * (max - min));
    return rand < 10 ? "0" + rand : rand;
}

function getTimeGenerator(hours, minutes) {

    var res = [hours, minutes].map(function(x) {
        return x < 10 ? "0" + x : x
    }).join(":");

    let seconds = randomSeconds(0, 59);
    fulltime = `${res}:${seconds}`;

    return fulltime
}