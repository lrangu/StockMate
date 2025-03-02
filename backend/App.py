from flask import Flask, jsonify, request
from flask_cors import CORS
from stock_data import get_stock_data
from save_stocks import save_stock

app = Flask(__name__)
CORS(app)  # Allows frontend to call backend

@app.route("/stock/<symbol>", methods=["GET"])
def stock(symbol):
    return jsonify(get_stock_data(symbol))

@app.route("/save_stock", methods=["POST"])
def save():
    data = request.json
    user = data.get("user_id")
    symbol = data["symbol"]
    return jsonify(save_stock(user, symbol))

if __name__ == "__main__":
    app.run(debug=True)