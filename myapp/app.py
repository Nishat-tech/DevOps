from flask import Flask
# Flask application banayein
app = Flask(__name__)

# Main page ('/') ke liye route banayein
@app.route('/')
def hello_devops():
    # Jab koi is page par aaye to yeh text dikhayein
    return "Hello DevOps!"

# Server ko start karein
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)