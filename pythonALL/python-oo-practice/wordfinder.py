"""Word Finder: finds random words from a dictionary."""


from importlib.resources import path
import random

class WordFinder:
    def __init__(self,path):
        fileDic = open(path)
        self.words = self.parse(fileDic)
        print(f'{len(self.words)} words in file')
    def parse(self,fileDic):
        return [words.strip() for words in fileDic]
    def random(self):
        return random.choice(self.words)

class BlankFinder(WordFinder):
    def parse(self,fileDic):
        return [w.strip() for w in fileDic
                if w.strip() and not w.startswith("#")]
