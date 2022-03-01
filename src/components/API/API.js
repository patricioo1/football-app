export const getAllLeagues = async () => {
    const response = await fetch(new Request(`https://api.football-data.org/v2/competitions`, {
        headers: {
            'X-Auth-Token': `${process.env.REACT_APP_API_KEY}`
        }
    }));
    if (response.status === 200) {
        return await response.json()
    }
}

export const getSingleLeagueInfo = async (id) => {
    const response = await fetch(new Request(`https://api.football-data.org/v2/competitions/${id}/standings`, {
        headers: {
            'X-Auth-Token': `${process.env.REACT_APP_API_KEY}`
        }
    }));
    if (response.status === 200) {
        return await response.json();
    }
}

// export const getLeagueMatches = async (id) => {
//     try {
//         const response = await fetch(new Request(`https://api.football-data.org/v2/competitions/${id}/teams`), {
//             headers: {
//                 'X-Auth-Token': `${process.env.REACT_APP_API_KEY}`
//             }
//         })
//         if (response.status === 200) {
//             return await response.json();
//         }
//     }
//     catch {
//         console.log('error');
//     }
// }

export const getMatchday = async (ids, date) => {
    try {
        const response = await fetch(new Request(`https://api.football-data.org/v2/matches?dateFrom=${date}&dateTo=${date}&competitions=${ids}`), {
            headers: {
                'X-Auth-Token': `${process.env.REACT_APP_API_KEY}`
            }
        })
        if (response.status === 200) {
            return await response.json();
        }
    }
    catch {
        console.log('error');
    }
}