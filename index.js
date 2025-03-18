function calculateCaffeineContent(initialIntake, halfLife, hoursPassed) {
    return initialIntake * Math.pow(0.5, hoursPassed / halfLife);
}

function calculateNegligibleCaffeineContent(initialIntake, halfLife) {
    let hoursPassed = 0;
    let caffeineContent = initialIntake;
    while (caffeineContent > 50) {
        caffeineContent = calculateCaffeineContent(initialIntake, halfLife, hoursPassed);
        hoursPassed++;
    }
    return hoursPassed;
}

function run() {
    const caffeineIntake = document.getElementById('caffeineIntake').textContent;
    const caffeineTime = document.getElementById('caffeineTime').textContent;

    const currentCaffeineContent = calculateCaffeineContent(caffeineIntake, 5, caffeineTime);
    const negligibleCaffeineContent = calculateNegligibleCaffeineContent(currentCaffeineContent, 5);

    const html = `
        <p>Your current caffeine content is ${Math.round(currentCaffeineContent)} mg.</p>
        ${negligibleCaffeineContent > 0 ? `<p>It will take about ${negligibleCaffeineContent} hours for the caffeine in your system to be negligible.</p>` : `<p>The caffeine in your system is already negligible.</p>`}

`

    document.getElementById('output').innerHTML = html;
}