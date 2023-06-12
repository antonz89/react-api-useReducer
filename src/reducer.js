export default function reducer(state, action){

    switch(action.type){
        case '1':
        // console.log(action.payload)


        return action.payload

        case '2':
        // console.log(action.payload)
        let holderArr = []
        holderArr.push(action.payload)


        return holderArr

        default:
            alert("no matching types")
            return state
    }
}