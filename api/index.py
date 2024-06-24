from flask import Flask
import helloworld as hw


app = Flask(__name__)


@app.route('/api/helloworld/')
def hello_world():
    return hw.hello_world()
