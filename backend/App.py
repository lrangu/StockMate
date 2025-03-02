# starting
import random

def get_random_tickers(num_tickers=5):
    exchanges = ['NYSE', 'NASDAQ', 'AMEX']
    characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    
    random_tickers = []
    
    for _ in range(num_tickers):
        ticker_length = random.randint(1, 5)
        ticker = ''.join(random.choice(characters) for _ in range(ticker_length))
        exchange = random.choice(exchanges)
        random_tickers.append(f"{ticker}:{exchange}")
    
    return random_tickers

random_tickers = get_random_tickers()


