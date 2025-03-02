import yfinance as yf

def get_stock_data(ticker):
    """
    Fetch stock data from Yahoo Finance API.
    """
    try:
        stock = yf.Ticker(ticker)
        data = stock.history(period="1d")  # Get the latest 1-day stock data
        
        # Extract useful information
        stock_info = {
            "symbol": ticker,
            "current_price": data["Close"].iloc[-1],  # Last closing price
            "high": data["High"].iloc[-1],  # Highest price of the day
            "low": data["Low"].iloc[-1],  # Lowest price of the day
            "volume": data["Volume"].iloc[-1],  # Trading volume
        }
        return stock_info
    except Exception as e:
        return {"error": str(e)}
