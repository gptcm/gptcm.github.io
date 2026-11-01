const festivals = {

    default: {
        name: "Festival Season",
        subtitle: "CELEBRATE EVERY MOMENT",
        title: "Welcome to<br>Festival Seasons",
        description: "A little colour, joy and celebration for every season.",
        footer: "Wishing you happiness throughout the year",
        symbols: [""]
    },

    vishu: {
        name: "Vishu Celebrations",
        subtitle: "HAPPY VISHU",
        title: "Happy<br>Vishu!",
        description: "May this Vishu bring prosperity, peace and happiness.",
        footer: "Wishing you a prosperous Vishu",
        symbols: ["🌼", "🌻", "✨", "🌿"]
    },

    onam: {
        name: "Onam Celebrations",
        subtitle: "ഓണം ആശംസകൾ",
        title: "Happy<br>Onam!",
        description: "Celebrate happiness, unity and the beautiful spirit of Onam.",
        footer: "May your Onam be filled with happiness",
        symbols: ["🌸", "🌼", "🌺", "✨"]
    },

    eid: {
        name: "Eid Celebrations",
        subtitle: "EID MUBARAK",
        title: "Eid<br>Mubarak!",
        description: "May this Eid bring peace, love and happiness to everyone.",
        footer: "Wishing you a blessed Eid",
        symbols: ["☪", "🌙", "✨", "⭐"]
    },

    christmas: {
        name: "Christmas Celebrations",
        subtitle: "MERRY CHRISTMAS",
        title: "Merry<br>Christmas!",
        description: "May your Christmas be filled with love, joy and happiness.",
        footer: "Season's greetings to everyone",
        symbols: ["❄", "🎄", "⭐", "✨"]
    }

};


// Automatic month selection
function getFestival() {

    const month = new Date().getMonth();

    if (month === 3) {
        return "vishu";       // April
    }

    if (month === 7 || month === 8) {
        return "onam";        // August / September
    }

    if (month === 2) {
        return "eid";         // March
    }

    if (month === 11) {
        return "christmas";   // December
    }

    return "default";
}


// Apply festival theme
function changeFestival() {

    const festivalName = getFestival();
    const festival = festivals[festivalName];

    const container = document.getElementById("festival");

    container.style.background = festival.background;

    createAnimation(festival.symbols);
}


// Create falling decorations
function createAnimation(symbols) {

    document.querySelectorAll(".particle").forEach(p => p.remove());

    for (let i = 0; i < 35; i++) {

        const particle = document.createElement("div");

        particle.className = "particle";

        particle.innerText =
            symbols[Math.floor(Math.random() * symbols.length)];

        particle.style.left = Math.random() * 100 + "%";

        particle.style.fontSize =
            (15 + Math.random() * 20) + "px";

        particle.style.animationDuration =
            (5 + Math.random() * 10) + "s";

        particle.style.animationDelay =
            (-Math.random() * 10) + "s";

        document.getElementById("festival").appendChild(particle);
    }
}


// Start automatically
changeFestival();

// Check every hour
setInterval(changeFestival, 60 * 60 * 1000);