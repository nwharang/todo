import fs from 'fs';
import { parse, stringify } from 'csv';
import { open } from 'node:fs/promises';
import { __dirname } from '../utils/dirname.js';

// https://www.freecodecamp.org/news/node-js-streams-everything-you-need-to-know-c9141306be93/

export default class DataMap {
    store = new Map();
    /**
     * 
     * @param {String} filename 
     */
    constructor(filename) {
        this.filename = filename;
        this.parseData()
    }
    async parseData() {
        this.openFile = await open(__dirname + `../model/${this.filename}.csv`);
        let parser = parse({
            delimiter: ",",
            from_line: 2,
            on_record: (record, { lines }) =>
                [lines, ...record]
        })
            .on('data', (data) => {
                const [lines, ...record] = data
                this.store.set(lines, record)
            })
        this.openFile.createReadStream().pipe(parser)
            .on("error", function (error) {
                console.log(error);
            })
            .on('end', () => {
                console.log(this.filename + " parse Compele");
            })
    }

    getDataByLine(key) {
        if (this.store.has(key))
            return this.store.get(key);
        return null
    }

    length() {
        return this.store.size;
    }

    setData = () => {
        
    }

    updateData = () => {

    }

    deleteData = () => {

    }
}