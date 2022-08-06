from re import I


def compact(lst):
    i = 0
    for element in lst:
        if element != True:
            lst.pop(i)
        i += 1
    return lst

    """Return a copy of lst with non-true elements removed.

        >>> compact([0, 1, 2, '', [], False, (), None, 'All done'])
        [1, 2, 'All done']
    """