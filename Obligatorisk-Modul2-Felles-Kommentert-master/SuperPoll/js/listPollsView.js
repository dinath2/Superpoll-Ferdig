    function updateListPollsView() {
    const modelPolls = model.polls;
    const pollLength = modelPolls.length
    
    document.getElementById('app').innerHTML = `<h1>Undersøkelser</h1>`

    if (modelPolls === null) {
        document.getElementById('app').innerHTML = `
        Ingen undersøkelser funnet. Klikk "lag ny" for å lage en.`
    } else {
        modelPolls.forEach(poll => {

            document.getElementById('app').innerHTML += `
            <br/>
            <h3>${poll.question}</h3>
            <button id="${poll.id+1}"onclick="pollDetails(${poll.id})">Vis/Endre</button>

            Klikk her for å redigere
            `  
        });
    }
}

function pollDetails(id) { 
    model.inputs.createPoll = model.polls[id]; 
    console.log("id: " , id, "createPoll ", model.inputs.createPoll )
    return model.inputs.createPoll;
    //updateViewCreateVotePage();
    // model.app.currentPoll = id;
    //     document.getElementById("app").innerHTML = `
    //     <input id="question" value="${model.polls[id].question}">
    //     <input id="question" value="${model.polls[id].options}">
    //     <input id="question" value="${model.polls[id].question}">
    //     <input id="question" value="${model.polls[id].question}">
    //     `;
}