def list_manipulation(lst, command, location, value=None):
    if value == None:
        if location.lower() == 'start':
            return lst[0]
        elif location.lower() == 'end':
            return lst[-1]
    elif command.lower() == 'remove':
        if location.lower() == 'start':
            lst.pop(0)
        elif location.lower() == 'end':
            lst.pop()
         
    elif command.lower() == 'add':
        if location.lower() == 'start':
            lst.insert(0,value)
        elif location.lower() == 'end':
            lst.append(value)
    else:
        return None

 
    """Mutate lst to add/remove from beginning or end.

    - lst: list of values
    - command: command, either "remove" or "add"
    - location: location to remove/add, either "beginning" or "end"
    - value: when adding, value to add

    remove: remove item at beginning or end, and return item removed

        >>> lst = [1, 2, 3]

        >>> list_manipulation(lst, 'remove', 'end')
        3

        >>> list_manipulation(lst, 'remove', 'beginning')
        1

        >>> lst
        [2]

    add: add item at beginning/end, and return list

        >>> lst = [1, 2, 3]

        >>> list_manipulation(lst, 'add', 'beginning', 20)
        [20, 1, 2, 3]

        >>> list_manipulation(lst, 'add', 'end', 30)
        [20, 1, 2, 3, 30]

        >>> lst
        [20, 1, 2, 3, 30]

    Invalid commands or locations should return None:

        >>> list_manipulation(lst, 'foo', 'end') is None
        True

        >>> list_manipulation(lst, 'add', 'dunno') is None
        True
    """
