import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [`
  img {
    width: 100%;
    border-radius:5px;
  }
  `]
})
export class HeroeComponent implements OnInit {
  heroe!: Heroe;
  id: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private heroesService: HeroesService
  ) { }

  ngOnInit(): void {

    // this.activatedRoute.params.subscribe(({ id }) => {
    //   this.id = id.toString()
    // })
    // this.heroesService.getHeroePorId(this.id).subscribe(resp => {
    //   this.heroe = resp;
    // })

    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.heroesService.getHeroePorId(id))
      )
      .subscribe(heroe => this.heroe = heroe);

  }



}
