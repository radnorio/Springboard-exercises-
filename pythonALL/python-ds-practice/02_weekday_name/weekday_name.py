def weekday_name(day_of_week):
    if day_of_week == 1:
        return 'monday'
    elif day_of_week == 2:
        return "teusday"
    elif day_of_week == 3:
        return 'wednesday'
    elif day_of_week == 4:
        return 'thursday'
    elif day_of_week == 5:
        return 'friday'
    elif day_of_week == 6:
        return 'saturday'
    elif day_of_week == 7:
        return 'sunday'
    else:
        return 'enter a number 1-7 please'


    # """Return name of weekday.
    
    #     >>> weekday_name(1)
    #     'Sunday'
        
    #     >>> weekday_name(7)
    #     'Saturday'
        
    # For days not between 1 and 7, return None
    
    #     >>> weekday_name(9)
    #     >>> weekday_name(0)
    # """
