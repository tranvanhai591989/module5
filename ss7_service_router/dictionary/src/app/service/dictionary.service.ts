import {Injectable} from '@angular/core';
import {Dictionary} from '../model/dictionary';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  dictionary: Dictionary[] = [];

  constructor() {
    this.dictionary.push({
      word: 'go',
      mean: 'đi, di chuyển'
    });
    this.dictionary.push({
      word: 'eat',
      mean: 'ăn'
    });
    this.dictionary.push({
      word: 'drink',
      mean: 'uống'
    });
    this.dictionary.push({
      word: 'sleep',
      mean: 'ngủ'
    });
  }

  public getAll() {
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
