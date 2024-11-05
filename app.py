import sqlite3
from flask import Flask, render_template, jsonify, request
from flask_cors import CORS
import logging


app = Flask(__name__, template_folder='.')
CORS(app, resources={r"/*": {"origins": "http://localhost:8000"}})

def get_all_entries():
    conn = sqlite3.connect('databases/inventory.db')
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM inventory')
    entries = cursor.fetchall()
    items = [
        {"imgPTH": row[4], "name": row[1], "price": row[2], "description": row[3]}
        for row in entries
    ]
    conn.close()
    return items


@app.route('/')
def index():
    entries = get_all_entries()
    return render_template('templates/index.html', entries=entries)

@app.route('/loadItems')
def load_item():
    items = get_all_entries()
    return jsonify(items)

@app.route('/item/<item_name>')
def item_page(item_name):
    conn = sqlite3.connect('databases/inventory.db')
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM inventory WHERE name = ?', (item_name,))
    row = cursor.fetchone()
    conn.close()
    if row:
        item = {
            "imgPTH": row[4],
            "name": row[1],
            "price": row[2],
            "description": row[3]
        }
        return render_template('templates/itemPage.html', item=item)
    else:
        return "Item not found", 404



if __name__ == '__main__':
    app.run(debug=True)
