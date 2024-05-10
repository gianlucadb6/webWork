import sqlite3 
from flask import Flask, render_template, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    conn = sqlite3.connect('inventory.db')
    cursor = conn.cursor()
    cursor = conn.execute('SELECT * FROM inventory')
    entries = cursor.fetchall()
    conn.close()
    return render_template('index.html', entries=entries)


if __name__ == '__main__':
    app.run(debug=True)

