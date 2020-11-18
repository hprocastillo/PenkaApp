export interface SingleMatch {
    id?: string;
    competition?: string;
    typeTeam?: string;
    homeTeamId?: string;
    homeTeamName?: string;
    homeTeamAlias?: string;
    homeTeamFlag?: string;
    homeTeamScore?: number;
    visitLeague?: string;
    visitFederation?: string;
    visitTeamId?: string;
    visitTeamName?: string;
    visitTeamAlias?: string;
    visitTeamFlag?: string;
    visitTeamScore?: number;
    winnerId?: string;
    winnerName?: string;
    winnerFlag?: string;
    loserId?: string;
    loserName?: string;
    loserFlag?: string;
    draw?: boolean;
    startDate?: string;
    startTime?: string;
    status?: string;
    selected?: string;
    publish?: boolean;
}
