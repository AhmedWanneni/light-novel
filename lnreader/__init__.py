from flask import Flask


app = Flask(__name__)

from lnreader.main.routes import main

app.register_blueprint(main)
