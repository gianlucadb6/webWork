import sqlite3 
from flask import Flask, render_template, jsonify
from flask_cors import CORS
import logging

app = Flask(__name__, template_folder='.')
CORS(app, resources={r"/*": {"origins": "http://localhost:8000"}})

def get_all_entries():
    conn = sqlite3.connect('inventory.db')
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM inventory')
    entries = cursor.fetchall()
    items = [
        {"imgPTH": row[4], "name": row[1], "price": row[2]}
        for row in entries
    ]
    conn.close()
    return items


@app.route('/')
def index():
    #print(get_all_entries())
    return get_all_entries()


if __name__ == '__main__':
    app.run(debug=True)

