import axios from 'axios'

const activitiesActions = {
    getActivities: (id) => {
        console.log(id)
        return async (dispatch, getState) => {
            let response = await axios.get('https://mytinerarywebapp.herokuapp.com/api/activities/' + id)
            console.log(response.data)
            if (!response.data.success) {
                throw new Error ("Error backend-DB response")
            }
            return response
/*             dispatch({type: 'GET_ACTIVITIES', payload: response.data.response})
 */        }
    }
}

export default activitiesActions