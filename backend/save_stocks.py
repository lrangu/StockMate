import firebase_admin
from firebase_admin import credentials, firestore

# Initialize Firebase
cred = credentials.Certificate("firebase-key.json")  # Add Firebase key file here
firebase_admin.initialize_app(cred)
db = firestore.client()

def save_stock(user_id, symbol):
    """Save a stock to Firebase Firestore under the user’s account."""
    doc_ref = db.collection("users").document(user_id).collection("savedStocks").document(symbol)
    doc_ref.set({"symbol": symbol})
    return {"message": f"Stock {symbol} saved!"}
