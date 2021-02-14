export default {
  async registerCoach(context, data) {
    const userId = context.rootGetters.userId;
    const coachData = {
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      hourlyRate: data.rate,
      areas: data.areas
    };

    const response = await fetch(`https://vue-main-project-57792-default-rtdb.firebaseio.com/coaches/${userId}.json`, {
      method: 'PUT',
      body: JSON.stringify(coachData)
    });

    //const responseData = await response.json();

    if (!response.ok) {
      //error
    }

    context.commit('registerCoach', { ...coachData, id: userId });
  },
  async loadCoaches(context) {
    const response = await fetch(`https://vue-main-project-57792-default-rtdb.firebaseio.com/coaches.json`);
    const responseData = await response.json();

    console.log(responseData);

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to fetch');
      throw error
    }

    //parce qu'on recoit un objet et qu'on a besoin de mettre ça dans un array
    const coaches = [];
    for (const key in responseData) {
      const coach = {
        id: key,
        firstName: responseData[key].firstName,
        lastName: responseData[key].lastName,
        description: responseData[key].description,
        hourlyRate: responseData[key].hourlyRate,
        areas: responseData[key].areas
      }
      coaches.push(coach);
    }

    context.commit('setCoaches', coaches);
  }
}