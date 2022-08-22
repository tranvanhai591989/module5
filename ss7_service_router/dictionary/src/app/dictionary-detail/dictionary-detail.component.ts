import {Component, OnInit} from '@angular/core';
import {Dictionary} from '../model/dictionary';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {DictionaryService} from '../service/dictionary.service';

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {

  wordFind: Dictionary;

  constructor(private activatedRoute: ActivatedRoute, private dictionaryService: DictionaryService) {
    activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const word = paramMap.get('word');
      if (word != null) {
        this.wordFind = this.dictionaryService.findByWord(word);
      }
    });
  }

  ngOnInit(): void {
  }

}
