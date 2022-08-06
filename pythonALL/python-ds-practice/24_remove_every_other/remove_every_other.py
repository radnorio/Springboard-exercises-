def remove_every_other(lst):
    retL = []
    count = 2
    for item in lst:
        if count % 2 == 0:
            retL.append(item)
        count += 1
    print(retL)
    return retL
    """Return a new list of other item.

        >>> lst = [1, 2, 3, 4, 5]

        >>> remove_every_other(lst)
        [1, 3, 5]

    This should return a list, not mutate the original:

        >>> lst
        [1, 2, 3, 4, 5]
    """
lstRy = [1, 2, 3, 4, 5]
remove_every_other(lstRy)

