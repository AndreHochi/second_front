

const tick = ({ interval }) => {
    return {
        type: 'TICK',
        time: new Date((new Date() - 7200000) + 2 * 7200000),
        interval
    }
}


export const startTimer = (dispatch) => {
        
    dispatch({
        type: 'TICK'
    });

    //clearInterval(getState.interval);

    const interval = setInterval(() => {
        dispatch(tick({ interval }))
    }, 1000)

}