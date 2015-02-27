from flask import Flask, render_template
from flask_socketio import SocketIO, emit

app = Flask(__name__)
socketio = SocketIO(app)


@app.route('/')
def index():
    return render_template('index.html')


@socketio.on('event')
def handle_connect():
    print ('recieved connection from client!')


@socketio.on('draw circle')
def draw_circle(data):
    print ('Server received a circle')
    emit('client draw circle', data, broadcast=True)


if __name__ == '__main__':
    socketio.run(app)
