const fs = require('fs');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Do you want to create a readme? (y/n)', (response) => {
    if (response == 'y') {
        console.log('You said: y');
        genTitle();
    }
    else {
        console.log('Closing');
        process.exit();
    }
})

function genTitle() {
    readline.question('What is the title of the Project?', (title) => {
        fs.writeFileSync('README.md', '# ' + (title) + '\n\n');
        genDescription();
    })
}

function genDescription() {
    readline.question("What is your Project's Description?", (description) => {
        fs.appendFileSync('README.md', '## ' + (description) + "\n\n");
        genTableOfContents();
    })
}

function genTableOfContents() {
    fs.appendFileSync('README.md', '[Installation](#Installation)\n[Usage](#Usage)\n[Credits](#Credits)\n[License](#License)' + '\n\n');
    genInstallInstructions();
}

function genInstallInstructions() {
    readline.question('What are the installation intructions for your Project?', (install) => {
        fs.appendFileSync('README.md', '## Install Instructions \n\n' + (install) + '\n\n');
        genUsage()
    }
    )
}

function genUsage() {
    readline.question('What are the usage instruction for your project?', (usage) => {
        fs.appendFileSync('README.md', '## Usage \n\n' + (usage) + '\n\n');
        genCredits()
    })
}

function genCredits() {
    readline.question('What are the credits for your projects (who did what)?', (credits) => {
        fs.appendFileSync('README.md', '## Credits \n\n' + (credits) + '\n\n');
        genBadges()
    })
}

function genBadges() {
    readline.question('What are the badges associated with your project?', (badges) => {
        fs.appendFileSync('README.md', '## Badges \n\n' + (badges) + '\n\n');
        genFeatures()
    })
}

function genFeatures() {
    readline.question('What are the features of your project?', (features) => {
        fs.appendFileSync('README.md', '## Features \n\n' + (features) + '\n\n');
        genContribute()
    })
}

function genContribute() {
    readline.question('How should people contribute to your project?', (contribute) => {
        fs.appendFileSync('README.md', '## How to Contribute \n\n' + (contribute) + '\n\n');
        genTests()
    })
}

function genTests() {
    readline.question('How can users test your project?', (test) => {
        fs.appendFileSync('README.md', '## Tests \n\n' + (test) + "\n\n")
        genLicense()
    })
}

function genLicense() {
    readline.question('What license does your project have?', (license) => {
        fs.appendFileSync('README.md', '## License \n\n', (license))
        exit()
    })
}

function exit() {
    console.log("Your README is done!")
    process.exit();
}