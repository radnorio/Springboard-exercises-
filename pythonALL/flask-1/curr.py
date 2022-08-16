from forex_python.converter import CurrencyCodes
from flask import render_template
c2 = CurrencyCodes()

curArray = ['EUR','IDR','BGN','ILS','GBP','DKK','CAD','JPY','HUF','RON','MYR','SEK','SGD','HKD',
'AUD','CHF','KRW','CNY','TRY','HRK','NZD','THB','USD','NOK','RUB','INR','MXN','CZK','BRL','PLN',
'PHP','ZAR']
class Currency:
    """Currency type"""
    def __init__(self,type1,type2,value):
        self.type1 = type1
        self.type2 = type2
        self.value = value
    def Check_Container(self):
        """returns boolean for conditional check if both currencies are valid"""

        if((self.type1 in curArray) and (self.type2 in curArray)):
            return True
        else:
            return False
    def Template_sort(self,rate):
        """returns a rendered template to show the converstion value"""

        value = self.value
        conversion = float(value*rate)
        symbol1 = c2.get_symbol(self.type1)
        symbol2 = c2.get_symbol(self.type2)
        return render_template('answer.html', value = f'{value:.2f}', curr1=self.type1, curr2=self.type2, rate = f'{rate:.3f}', curr1Symbol=symbol1, curr2Symbol=symbol2, conversion = f'{conversion:.2f}')
# returns proper template based on statements
    def Return_Invalid_Currency(self):
        """returns CurrError template based on each """
        if self.type1 == '' or self.type2 == '' or self.value == '':
            return render_template()
        if self.Check_Int_Valid():
            if (self.type1 not in curArray) and (self.type2 not in curArray):
                return render_template("CurError.html", CurrString= f'{self.type1} and {self.type2} are not supported currencies at this time.' ,ValString = False)
            elif self.type1 not in curArray:
                return render_template('CurError.html', CurrString= f'{self.type1} is not a supported currency at this time.' ,ValString = False)
            elif self.type2 not in curArray:
                return render_template('CurError.html', CurrString= f'{self.type2} is not a supported currency at this time.', ValString = False)
        else:
            if (self.type1 not in curArray) and (self.type2 not in curArray):
                return render_template("CurError.html", CurrString= f'{self.type1} and {self.type2} are not supported currencies at this time.', ValString = f'{self.value} is not a valid ammount; Please enter a positive integer.')
            elif self.type1 not in curArray:
                return render_template('CurError.html', CurrString= f'{self.type1} is not a supported currency at this time',ValString = f'{self.value} is not a valid ammount; Please enter a positive integer.')
            elif self.type2 not in curArray:
                return render_template('CurError.html', CurrString= f'{self.type2} is not a supported currency at this time.',ValString = f'{self.value} is not a valid ammount; Please enter a positive integer.')
            return render_template('ValError.html', value = self.value)            
    def Check_Int_Valid(self):
        """checks if integer is valid"""
        if self.value > 0:
            return True
        else:
            return False
        
        