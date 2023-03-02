
import DataMap from '../helper/data.js';

let dataMap = new DataMap("team")

const getUser = async (req, res, next) => {
    res.send(dataMap.getDataByLine(1))
}

export { getUser }