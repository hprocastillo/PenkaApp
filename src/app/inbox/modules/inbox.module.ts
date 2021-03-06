// MODULES
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InboxRoutingModule} from './inbox-routing.module';
import {MaterialModule} from '../../material/material.module';
import {FormsModule} from '@angular/forms';
import {CoreModule} from '../../core/modules/core.module';

// COMPONENTS
import {InboxComponent} from '../components/inbox/inbox.component';
import {FriendsComponent} from '../components/friends/friends.component';
import {MessagesComponent} from '../components/messages/messages.component';
import {RequestComponent} from '../components/request/request.component';
import {RequestNotificationComponent} from '../components/request-notification/request-notification.component';
import {SharedModule} from '../../shared/modules/shared.module';


@NgModule({
    declarations: [
        InboxComponent,
        FriendsComponent,
        MessagesComponent,
        RequestComponent,
        RequestNotificationComponent,
    ],
    imports: [
        CommonModule,
        InboxRoutingModule,
        MaterialModule,
        FormsModule,
        CoreModule,
        SharedModule,
    ],
    exports: [
        InboxComponent,
        FriendsComponent,
        MessagesComponent,
        RequestComponent,
        RequestNotificationComponent,

    ]
})
export class InboxModule {
}
