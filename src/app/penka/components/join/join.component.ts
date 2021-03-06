import {Component, OnDestroy, OnInit} from '@angular/core';
import {PenkasService} from '../../../core/services/penkas.service';
import {Penka} from '../../../core/interfaces/penka';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';
import {FirebaseApp} from '@angular/fire';
import {AuthService} from '../../../core/services/auth.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {ParticipantsService} from '../../../core/services/participants.service';
import {User} from '../../../core/interfaces/user';
import {Participant} from '../../../core/interfaces/participant';

@Component({
    selector: 'app-join',
    templateUrl: './join.component.html',
    styleUrls: ['./join.component.scss']
})
export class JoinComponent implements OnInit, OnDestroy {
    title = 'Participa de una PenKa';
    codePenka: string;
    penkaName: string;
    penkas = [];
    user = {} as User;

    private unsubscribe$ = new Subject<void>();

    constructor(
        public firebase: FirebaseApp,
        public auth: AuthService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private participantsService: ParticipantsService,
        private penkasService: PenkasService) {
    }

    ngOnInit(): void {
        this.user = this.firebase.auth().currentUser;
        this.activatedRoute.params.subscribe(
            (params: Params) => {
                this.codePenka = params.codePenka;
            }
        );
        this.penkasService.getPenkas()
            .pipe(
                takeUntil(this.unsubscribe$)
            ).subscribe(
            res => {
                this.penkas = res;
            });
    }

    ngOnDestroy(): void {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
}
