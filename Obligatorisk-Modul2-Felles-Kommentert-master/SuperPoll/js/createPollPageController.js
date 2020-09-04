function createOrUpdatePoll(dummyObj) {

    let inputObj = model.inputs.createPoll;
    inputObj = dummyObj != null ? inputObj = dummyObj : inputObj = model.inputs.createPoll;

    if (inputObj.id == null) {
        model.polls.push({
            id: model.polls.length, 
            isOpen: true,
            usersCanAddAlternatives: inputObj.usersCanAddAlternatives,
            question: inputObj.question,
            options: [...inputObj.options],
            votes: {},
        });
    }


    console.log("model length . ", model.polls.length);

    updateView();
}