let showUserAction = () => {
    return async function (dispatch) {
        const res = await fetch(
            "http://localhost:8080/myapp/admin"
          );
          const data = await res.json();
          dispatch({type: "SHOW_USERS", payload: data});
    }
}

export default showUserAction;
