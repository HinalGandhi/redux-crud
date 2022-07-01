
export const getEmployee = () => async (dispatch) => {
  try {
    dispatch({ type: "USER_LIST_REQUEST" });
    const response = await fetch(`https://jsonplaceholder.typicode.com`);
    const data = await response.json();
    dispatch({ type: "USER_LIST_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "USER_LIST_FAILURE", payload: error.message });
  }
};

export function addEmployee(data) {
  return dispatch => {
    return dispatch({
      type: 'ADD_EMPLOYEE',
      payload: data
    });
  }
};

export function editEmployee(data) {
  return dispatch => {
    return dispatch({
      type: 'EDIT_EMPLOYEE',
      payload: data
    });
  }
};

export function deleteEmployee(employeeId) {
  return dispatch => {
    return dispatch({
      type: 'DELETE_EMPLOYEE',
      payload: employeeId
    });
  }
};
