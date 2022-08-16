from unittest import TestCase
from urllib import response
from app import app
from curr import Currency
from flask import session
from curr import Currency,curArray
from app import c

class CurrencyTests(TestCase):
    def startTest(self):
        self.client = app.test_client()
        app.config['TESTING'] = True
    def test_Class_Arr(self):
        assert curArray == ['EUR','IDR','BGN','ILS','GBP','DKK','CAD','JPY','HUF','RON','MYR','SEK','SGD','HKD','AUD','CHF','KRW','CNY','TRY','HRK','NZD','THB','USD','NOK','RUB','INR','MXN','CZK','BRL','PLN','PHP','ZAR']
    def test_Start(self):
        response = self.client.get('/start')
        self.assertIn(b"Enter the starting currency value here:", response.data)
        self.assertIn(b"Enter the currency you'd like to convert to here:", response.data)
        self.assertIn(b"Enter the ammount of the currency you're converting here:", response.data)
        self.assertIn(b"Convert", response.data)
    def test_Post(self):
        assert 1 == int(c.get_rate('EUR','EUR'))
