from flask import Flask, request,make_response
from flask_cors import CORS
import pprint
import google.generativeai as palm
import config

palm.configure(api_key=config.googleKey)

app = Flask(__name__)
CORS(app, origins='http://localhost:3000')

@app.route("/")
def index():
    return "Hello, world!"

@app.route("/getGoogle", methods=["GET"])
def get():

    models = [m for m in palm.list_models() if 'generateText' in m.supported_generation_methods]
    model = models[0].name
    prompt = request.args.get("input")

    completion = palm.generate_text(
    model=model,
    prompt=prompt,
    temperature=0,
    # The maximum length of the response
    max_output_tokens=800,
    )
    response = make_response(completion.result)
    response.headers["Access-Control-Allow-Origin"] = "http://localhost:3000"

    return completion.result

if __name__ == "__main__":
    app.run()