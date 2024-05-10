import sqlite3 
from flask import Flask, render_template, jsonify

app = Flask(__name__)

def get_all_entries():
    conn = sqlite3.connect('inventory.db')
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM inventory')
    entries = cursor.fetchall()
    conn.close()
    return entries

@app.route('/')
def index():
    entries = get_all_entries()
    return render_template('index.html', entries=entries)


if __name__ == '__main__':
    app.run(debug=True)

