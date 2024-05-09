import sqlite3 
import Flask

app = Flask(__name__)

@app.route('/')
def index():
    conn = sqlite3.connect('inventory.db')
