from itertools import count


def sum_up_diagonals(matrix):
    diag = []
    countIdx = 0
    countRev = -1
    if len(matrix)<=2:
        tot = 0
        for lst in matrix:
            tot += sum(lst)
        return tot
    else:
        for lst in matrix:
            diag.append(lst[countRev])
            diag.append(lst[countIdx])
            countIdx += 1
            countRev -= 1
        return sum(diag)
    """Given a matrix [square list of lists], return sum of diagonals.

    Sum of TL-to-BR diagonal along with BL-to-TR diagonal:

        >>> m1 = [
        ...     [1,   2],
        ...     [30, 40],
        ... ]
        >>> sum_up_diagonals(m1)
        73

        >>> m2 = [
        ...    [1, 2, 3],
        ...    [4, 5, 6],
        ...    [7, 8, 9],
        ... ]
        >>> sum_up_diagonals(m2)
        30
    """
m1 = [[1,2],[30,40]]
m2 = [[1,2,3],[4,5,6],[7,8,9]]
print(sum_up_diagonals(m1))
print(sum_up_diagonals(m2))
m3 = [[7],[12]]
m4 = [[7,2,4,8,9],
      [9,9,2,8,9],
      [7,2,4,4,9],
      [8,3,4,8,6],
      [7,2,3,8,7]]
print(sum_up_diagonals(m3))
print(sum_up_diagonals(m4))
