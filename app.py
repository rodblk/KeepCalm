from flask import Flask, request,

app = Flask(__name__)

@app.route('/', methods=['POST'])
def guardaInput():
   valor = request.form['pressao']
   

app.run()