


def wordPrint(wordList,index):
    for word in wordList:
        if word[index] == 'c':
            print(f'{word} \n')
            index += 1
        index = 0
index = 0
wordList = ['food','chicken', 'potatoes', 'celery', 'corn']
wordPrint(wordList,index)
