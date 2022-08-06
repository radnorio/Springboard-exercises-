def frequency(lst, search_term):
    count = 0
    for i in lst:
        if search_term == lst[i]:
            count += 1
    return count
    """Return frequency of term in lst.
    
        >>> frequency([1, 4, 3, 4, 4], 4)
        3
        
        >>> frequency([1, 4, 3], 7)
        0
    """