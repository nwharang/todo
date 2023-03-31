import DataMap from '../helper/data.js';

let dataMap = new DataMap("team")

const getUser = async (req, res, next) => {
    res.send(dataMap.getDataByLine(1))
}

const writeUser = async (req, res, next) => {
    

}

const addTeam = (req, res, next) => {
    let team = req.body
    console.log(team);
    res.send(team)
    res.redirect('/team')
}


export { getUser,addTeam }