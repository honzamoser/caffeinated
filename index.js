function calculateCaffeineContent(initialIntake, halfLife, hoursPassed) {
    return initialIntake * Math.pow(0.5, hoursPassed / halfLife);
}

function calculateNegligibleCaffeineContent(initialIntake, halfLife) {
    t = (Math.log(50 / initialIntake) / Math.log(0.5)) * halfLife
    return t
}

function run() {
    const caffeineIntake = document.getElementById('caffeineIntake').textContent;
    const caffeineTime = document.getElementById('caffeineTime').textContent;

    const currentCaffeineContent = calculateCaffeineContent(caffeineIntake, 5, caffeineTime);
    const negligibleCaffeineContent = calculateNegligibleCaffeineContent(currentCaffeineContent, 5);

    const time_hours = Math.round(negligibleCaffeineContent);

    const html = `
        <p>Your current caffeine content is about ${Math.round(currentCaffeineContent)} mg.</p>
        ${time_hours > 0 ? `<p>It will take about ${time_hours} hours for the caffeine in your system to be negligible.</p>` :
            `<p>Your caffeine content is already negligible.</p>`
        }

`

    document.getElementById('output').innerHTML = html;
}