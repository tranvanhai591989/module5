import {Injectable} from '@angular/core';
import {Dictionary} from '../model/dictionary';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  dictionary: Dictionary[];

  constructor(private dictionaryService: DictionaryService) {
    this.dictionary = [{
      word: 'go',
      mean: 'đi, di chuyển'
    },
      {
        word: 'eat',
        mean: 'ăn'
      },
      {
        word: 'drink',
        mean: 'uống'
      },
      {
        word: 'sleep',
        mean: 'ngủ'
      }];
  }

  public getAll(): Dictionary[] {
    return this.dictionary;
  }

  findByWord(word: string) {
    for (const findWord of this.dictionary) {
      if (findWord.word === word) {
        return findWord;
      }
      return {
        word: 'Not found',
        mean: 'Khong ton tai'
      };
    }
  }
}
