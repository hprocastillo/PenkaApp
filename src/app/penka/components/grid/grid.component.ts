import {Component, OnDestroy, OnInit} from '@angular/core';
import {User} from '../../../core/interfaces/user';
import {Subject} from 'rxjs';
import {FirebaseApp} from '@angular/fire';
import {AuthService} from '../../../core/services/auth.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {SingleMatchesService} from '../../../core/services/single-matches.service';
import {ListMatchesService} from '../../../core/services/list-matches.service';
import {ParticipantsService} from '../../../core/services/participants.service';
import {GambleService} from '../../../core/services/gamble.service';
import {takeUntil} from 'rxjs/operators';

@Component({
    selector: 'app-grid',
    templateUrl: './grid.component.html',
    styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit, OnDestroy {
    title = 'Matriz de Resultados';
    codePenka: string;
    listMatches = [];
    singleMatches$ = this.singleMatchesService.matches;
    participants = [];
    gambles = [];
    user = {} as User;

    private unsubscribe$ = new Subject<void>();
    today = new Date();

    constructor(
        public firebase: FirebaseApp,
        public auth: AuthService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private singleMatchesService: SingleMatchesService,
        private listMatchesService: ListMatchesService,
        private participantService: ParticipantsService,
        private gamblesService: GambleService) {
        this.user = this.firebase.auth().currentUser;
    }

    ngOnInit(): void {
        this.activatedRoute.params.subscribe(
            (params: Params) => {
                this.codePenka = params.codePenka;
            }
        );
        this.participantService.getParticipantByCodePenka(this.codePenka)
            .pipe(
                takeUntil(this.unsubscribe$)
            ).subscribe(
            res => {
                this.participants = res;
            });
        this.gamblesService.getGambleByCodePenka(this.codePenka)
            .pipe(
                takeUntil(this.unsubscribe$)
            ).subscribe(
            res => {
                this.gambles = res;
            });
    }

    ngOnDestroy(): void {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
}
