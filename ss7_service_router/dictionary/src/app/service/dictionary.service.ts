import {Injectable} from '@angular/core';
import {Dictionary} from '../model/dictionary';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  dictionary: Dictionary[] = [];

  constructor() {
    this.dictionary.push({
      word: '行く',
      mean: 'đi, di chuyển'
    });
    this.dictionary.push({
      word: '食べる',
      mean: 'ăn'
    });
    this.dictionary.push({
      word: '飲む',
      mean: 'uống'
    });
    this.dictionary.push({
      word: '寝る',
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
    }
  }
}
