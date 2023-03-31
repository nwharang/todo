import { stringify, parse } from 'csv';
import assert from 'assert';
import fs from 'fs';
import DataMap from '../helper/data.js';

let dataMap = new DataMap("todos")

const getUser = async (req, res, next) => {
    res.send(dataMap.getDataByLine(1))
}

// [Get] /api/todos
const getTodo = async (req, res, next) => {
    
}

// [Post] /api/todo
const addTodo = (req, res, next) => {

}

const updateTodo = ""

const deleteTodo = ""

export { getUser }
