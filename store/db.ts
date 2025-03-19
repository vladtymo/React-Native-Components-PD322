import * as SQLite from 'expo-sqlite';
import { Item } from '../models/item';

const db = SQLite.openDatabaseSync('items.db');

async function init() {
    await db.execAsync(`
        PRAGMA journal_mode = WAL;
        CREATE TABLE IF NOT EXISTS items (id INTEGER PRIMARY KEY NOT NULL, value TEXT NOT NULL);
        INSERT INTO items (value) VALUES ('Item 1');
        INSERT INTO items (value) VALUES ('Item 2');
        INSERT INTO items (value) VALUES ('Item 3');`);
}

async function addItem(value: string) {
    await db.runAsync(`INSERT INTO items (value) VALUES (?);`, [value]);
}

async function deleteItem(id: number) {
    await db.runAsync(`DELETE FROM items where id = ?;`, [id]);
}

async function updateItem(id: number, value: string) {
    await db.runAsync(`UPDATE items set value = ? where id = ?;`, [id, value]);
}

async function getItems() {
    return await db.getAllAsync<Item>('SELECT * FROM items');
}

// export { init, addItem, deleteItem, getItems, updateItem }