import fs from "fs";
import { parse, stringify } from "csv";
import { open } from "node:fs/promises";
import { __dirname } from "../utils/dirname.js";

// https://www.freecodecamp.org/news/node-js-streams-everything-you-need-to-know-c9141306be93/

export default class DataMap {
  store = new Map();
  /**
   *
   * @param {String} filename
   */
  constructor(filename) {
    this.filename = filename;
    this.parseData();
  }
  async parseData() {
    this.openFile = await open(__dirname + `../model/${this.filename}.csv`);
    let parser = parse({
      delimiter: ",",
      from_line: 2,
      on_record: (record, { lines }) => [lines, ...record],
    }).on("data", (data) => {
      const [lines, ...record] = data;
      this.store.set(lines, record);
    });
    this.openFile
      .createReadStream()
      .pipe(parser)
      .on("error", function (error) {
        console.log(error);
      })
      .on("end", () => {
        console.log(this.filename + " parse Compele");
      });
  }

  getDataByLine(key) {
    if (this.store.has(key)) return this.store.get(key);
    return null;
  }

  length() {
    return this.store.size;
  }

  setData = (oj) => {
    this.store.set(this.store.size + 1, oj);
    this.writeData();
  };

  writeData = () => {
    let data = [];

    this.store.forEach((value, key) => {
      data.push([key, ...value]);
    });
    let stringifier = stringify({
      delimiter: ",",
      header: true,
      columns: ["id", "name", "email", "password"],
    });
    stringifier.on("readable", () => {
      let row;
      while ((row = stringifier.read())) {
        this.openFile.write(row);
      }
    });
    stringifier.on("error", (err) => {
      console.error(err.message);
    });
    stringifier.on("finish", () => {
      console.log("Write complete");
    });
    stringifier.write(data);
    stringifier.end();
  };

  updateData = () => {};

  deleteData = () => {};
}
