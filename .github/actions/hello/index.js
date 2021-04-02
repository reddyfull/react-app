const core = require('@actions/core');
const github = require('@actions/github');
const { GitHub } = require('@actions/github/lib/utils');

try {
    //throw(new Error("Some Error message"));

    const name = core.getInput('who-to-greet');
    console.log(`Hello ${name}`)

    const time = new Date();
    core.setOutput("time", time.toString());

    console.log(JSON.stringify(github, null, '\t'));

    
} catch(error) {
    core.setFailed(error.message);
}