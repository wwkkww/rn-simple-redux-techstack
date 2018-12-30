//action is js object that tell reducer how to change the data/state 

export const selectLibrary = (libraryId) => { // <==action creator
    return {
        type: 'select_library', //type: (string) tell reducer commit a specific operation
        payload: libraryId //payload is the data that we will manipulate work on
    }
}