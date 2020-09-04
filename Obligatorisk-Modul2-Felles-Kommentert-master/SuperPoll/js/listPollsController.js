function pollDetails(id) 
{ 
    model.inputs.createPoll = model.polls[id];
    console.log("id: ", id, "createPoll ", model.inputs.createPoll)
    return model.polls[id];
    //updateViewCreateVotePage();
    // model.app.currentPoll = id;
    //     document.getElementById("app").innerHTML = `
    //     <input id="question" value="${model.polls[id].question}">
    //     <input id="question" value="${model.polls[id].options}">
    //     <input id="question" value="${model.polls[id].question}">
    //     <input id="question" value="${model.polls[id].question}">
    //     `;
}