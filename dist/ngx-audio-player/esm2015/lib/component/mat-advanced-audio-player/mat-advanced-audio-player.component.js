import { __decorate, __metadata } from "tslib";
import { Component, Input, ViewChild } from '@angular/core';
import { BaseAudioPlayerFunctions } from '../base/base-audio-player.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { AudioPlayerService } from '../../service/audio-player-service/audio-player.service';
let MatAdvancedAudioPlayerComponent = class MatAdvancedAudioPlayerComponent extends BaseAudioPlayerFunctions {
    constructor() {
        super();
        this.displayedColumns = ['title', 'status'];
        this.dataSource = new MatTableDataSource();
        this.tracks = [];
        this.displayTitle = true;
        this.displayPlaylist = true;
        this.displayVolumeControls = true;
        this.pageSizeOptions = [10, 20, 30];
        this.expanded = true;
        this.autoPlay = false;
        this.currentIndex = 0;
        this.repeatIt = false;
        this.audioPlayerService = new AudioPlayerService();
    }
    set playlist(playlist) {
        this.audioPlayerService.setPlaylist(playlist);
    }
    set matPaginator(mp) {
        this.paginator = mp;
        this.setDataSourceAttributes();
    }
    ngOnInit() {
        this.bindPlayerEvent();
        // Subscribe to playlist observer from AudioPlayerService and
        // update the playlist within MatAdvancedAudioPlayerComponent
        this.audioPlayerService.getPlaylist().subscribe(tracks => {
            if (tracks !== null && tracks !== []) {
                this.tracks = tracks;
                this.initialize();
            }
        });
    }
    initialize() {
        // populate indexs for the track and configure
        // material table data source and paginator
        this.setDataSourceAttributes();
        // auto play next track
        this.player.nativeElement.addEventListener('ended', () => {
            console.log('end reached', this.repeatIt);
            if (this.repeatIt) {
                this.repeatSong();
            }
            else {
                this.nextSong();
            }
        });
        this.player.nativeElement.addEventListener('timeupdate', () => {
            this.audioPlayerService.setCurrentTime(this.player.nativeElement.currentTime);
        });
        this.player.nativeElement.currentTime = this.startOffset;
        this.updateCurrentSong();
        if (this.autoPlay) {
            super.play();
        }
    }
    setDataSourceAttributes() {
        let index = 1;
        if (this.tracks) {
            this.tracks.forEach((track) => {
                track.index = index++;
            });
            this.dataSource = new MatTableDataSource(this.tracks);
            this.dataSource.paginator = this.paginator;
        }
    }
    nextSong() {
        if (this.displayPlaylist === true
            && (((this.currentIndex + 1) % this.paginator.pageSize) === 0
                || (this.currentIndex + 1) === this.paginator.length)) {
            if (this.paginator.hasNextPage()) {
                this.paginator.nextPage();
            }
            else if (!this.paginator.hasNextPage()) {
                this.paginator.firstPage();
            }
        }
        this.currentTime = 0;
        this.duration = 0.01;
        this.repeatIt = false;
        if ((this.currentIndex + 1) >= this.tracks.length) {
            this.currentIndex = 0;
        }
        else {
            this.currentIndex++;
        }
        this.updateCurrentSong();
        this.play(this.nextTrack);
    }
    previousSong() {
        this.currentTime = 0;
        this.duration = 0.01;
        this.repeatIt = false;
        if (!this.checkIfSongHasStartedSinceAtleastTwoSeconds()) {
            if (this.displayPlaylist === true
                && (((this.currentIndex) % this.paginator.pageSize) === 0
                    || (this.currentIndex === 0))) {
                if (this.paginator.hasPreviousPage()) {
                    this.paginator.previousPage();
                }
                else if (!this.paginator.hasPreviousPage()) {
                    this.paginator.lastPage();
                }
            }
            if ((this.currentIndex - 1) < 0) {
                this.currentIndex = (this.tracks.length - 1);
            }
            else {
                this.currentIndex--;
            }
        }
        else {
            this.resetSong();
        }
        this.updateCurrentSong();
        this.play(this.previousTrack);
    }
    resetSong() {
        this.player.nativeElement.src = this.currentTrack.link;
    }
    selectTrack(index) {
        this.currentIndex = index - 1;
        this.updateCurrentSong();
        this.play(this.currentTrack);
    }
    checkIfSongHasStartedSinceAtleastTwoSeconds() {
        return this.player.nativeElement.currentTime > 2;
    }
    updateCurrentSong() {
        this.currentTrack = this.tracks[this.currentIndex];
        this.previousTrack = ((this.currentIndex - 1) >= 0) ? this.tracks[this.currentIndex - 1] : this.tracks[this.tracks.length - 1];
        this.nextTrack = ((this.currentIndex + 1) >= this.tracks.length) ? this.tracks[0] : this.tracks[this.currentIndex + 1];
        this.audioPlayerService.setCurrentTrack(this.currentTrack);
    }
    repeatSong() {
        console.log('u just call repeat the song function');
        this.repeatIt = true;
        this.currentTime = 0;
        this.duration = 0.01;
        this.resetSong();
        this.updateCurrentSong();
        this.play(this.currentTrack);
    }
    setRepatFlag() {
        this.repeatIt = !this.repeatIt;
    }
};
__decorate([
    Input(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], MatAdvancedAudioPlayerComponent.prototype, "playlist", null);
__decorate([
    ViewChild(MatPaginator, { static: false }),
    __metadata("design:type", MatPaginator),
    __metadata("design:paramtypes", [MatPaginator])
], MatAdvancedAudioPlayerComponent.prototype, "matPaginator", null);
__decorate([
    Input(),
    __metadata("design:type", Object)
], MatAdvancedAudioPlayerComponent.prototype, "displayTitle", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], MatAdvancedAudioPlayerComponent.prototype, "displayPlaylist", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], MatAdvancedAudioPlayerComponent.prototype, "displayVolumeControls", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], MatAdvancedAudioPlayerComponent.prototype, "pageSizeOptions", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], MatAdvancedAudioPlayerComponent.prototype, "expanded", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], MatAdvancedAudioPlayerComponent.prototype, "autoPlay", void 0);
MatAdvancedAudioPlayerComponent = __decorate([
    Component({
        selector: 'mat-advanced-audio-player',
        template: "<mat-card class=\"d-flex justify-content-center ngx-advanced-audio-player z-depth-1 mat-elevation-z2\"\n    style=\"margin: 0px;\">\n\n    <audio #audioPlayer [src]=\"currentTrack?.link\"></audio>\n\n    <button (click)='setRepatFlag()' [disabled]=\"loaderDisplay\" class=\"p-1\" mat-button>\n        <mat-icon aria-hidden=\"true\">\n            <!-- repeat song -->\n            <!-- <svg height=\"32\" viewBox=\"0 0 24 24\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path d=\"M6 6h2v12H6zm3.5 6l8.5 6V6z\" />\n                <path d=\"M0 0h32v32H0z\" fill=\"none\" />\n            </svg> -->\n            autorenew\n        </mat-icon>\n    </button>\n\n    <button (click)='previousSong();' [disabled]=\"loaderDisplay\" class=\"p-1\" mat-button>\n        <mat-icon aria-hidden=\"true\">\n            <!-- Skip previous icon (skip_previous) -->\n            <svg height=\"32\" viewBox=\"0 0 24 24\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path d=\"M6 6h2v12H6zm3.5 6l8.5 6V6z\" />\n                <path d=\"M0 0h32v32H0z\" fill=\"none\" />\n            </svg>\n        </mat-icon>\n    </button>\n    <button (click)='playBtnHandler();' [disabled]=\"loaderDisplay\" class=\"p-1 play-pause\" mat-button>\n\n        <svg *ngIf=\"loaderDisplay\" height=\"34px\" preserveAspectRatio=\"xMidYMid\"\n            style=\"margin: auto; display: block; shape-rendering: auto;\" viewBox=\"0 0 100 100\" width=\"34px\"\n            xmlns=\"http://www.w3.org/2000/svg\">\n            <g transform=\"rotate(0 50 50)\">\n                <rect fill=\"#7a7a7a\" height=\"12\" rx=\"3\" ry=\"6\" width=\"6\" x=\"47\" y=\"20\">\n                    <animate attributeName=\"opacity\" begin=\"-0.9166666666666666s\" dur=\"1s\" keyTimes=\"0;1\"\n                        repeatCount=\"indefinite\" values=\"1;0\" />\n                </rect>\n            </g>\n            <g transform=\"rotate(30 50 50)\">\n                <rect fill=\"#7a7a7a\" height=\"12\" rx=\"3\" ry=\"6\" width=\"6\" x=\"47\" y=\"20\">\n                    <animate attributeName=\"opacity\" begin=\"-0.8333333333333334s\" dur=\"1s\" keyTimes=\"0;1\"\n                        repeatCount=\"indefinite\" values=\"1;0\" />\n                </rect>\n            </g>\n            <g transform=\"rotate(60 50 50)\">\n                <rect fill=\"#7a7a7a\" height=\"12\" rx=\"3\" ry=\"6\" width=\"6\" x=\"47\" y=\"20\">\n                    <animate attributeName=\"opacity\" begin=\"-0.75s\" dur=\"1s\" keyTimes=\"0;1\" repeatCount=\"indefinite\"\n                        values=\"1;0\" />\n                </rect>\n            </g>\n            <g transform=\"rotate(90 50 50)\">\n                <rect fill=\"#7a7a7a\" height=\"12\" rx=\"3\" ry=\"6\" width=\"6\" x=\"47\" y=\"20\">\n                    <animate attributeName=\"opacity\" begin=\"-0.6666666666666666s\" dur=\"1s\" keyTimes=\"0;1\"\n                        repeatCount=\"indefinite\" values=\"1;0\" />\n                </rect>\n            </g>\n            <g transform=\"rotate(120 50 50)\">\n                <rect fill=\"#7a7a7a\" height=\"12\" rx=\"3\" ry=\"6\" width=\"6\" x=\"47\" y=\"20\">\n                    <animate attributeName=\"opacity\" begin=\"-0.5833333333333334s\" dur=\"1s\" keyTimes=\"0;1\"\n                        repeatCount=\"indefinite\" values=\"1;0\" />\n                </rect>\n            </g>\n            <g transform=\"rotate(150 50 50)\">\n                <rect fill=\"#7a7a7a\" height=\"12\" rx=\"3\" ry=\"6\" width=\"6\" x=\"47\" y=\"20\">\n                    <animate attributeName=\"opacity\" begin=\"-0.5s\" dur=\"1s\" keyTimes=\"0;1\" repeatCount=\"indefinite\"\n                        values=\"1;0\" />\n                </rect>\n            </g>\n            <g transform=\"rotate(180 50 50)\">\n                <rect fill=\"#7a7a7a\" height=\"12\" rx=\"3\" ry=\"6\" width=\"6\" x=\"47\" y=\"20\">\n                    <animate attributeName=\"opacity\" begin=\"-0.4166666666666667s\" dur=\"1s\" keyTimes=\"0;1\"\n                        repeatCount=\"indefinite\" values=\"1;0\" />\n                </rect>\n            </g>\n            <g transform=\"rotate(210 50 50)\">\n                <rect fill=\"#7a7a7a\" height=\"12\" rx=\"3\" ry=\"6\" width=\"6\" x=\"47\" y=\"20\">\n                    <animate attributeName=\"opacity\" begin=\"-0.3333333333333333s\" dur=\"1s\" keyTimes=\"0;1\"\n                        repeatCount=\"indefinite\" values=\"1;0\" />\n                </rect>\n            </g>\n            <g transform=\"rotate(240 50 50)\">\n                <rect fill=\"#7a7a7a\" height=\"12\" rx=\"3\" ry=\"6\" width=\"6\" x=\"47\" y=\"20\">\n                    <animate attributeName=\"opacity\" begin=\"-0.25s\" dur=\"1s\" keyTimes=\"0;1\" repeatCount=\"indefinite\"\n                        values=\"1;0\" />\n                </rect>\n            </g>\n            <g transform=\"rotate(270 50 50)\">\n                <rect fill=\"#7a7a7a\" height=\"12\" rx=\"3\" ry=\"6\" width=\"6\" x=\"47\" y=\"20\">\n                    <animate attributeName=\"opacity\" begin=\"-0.16666666666666666s\" dur=\"1s\" keyTimes=\"0;1\"\n                        repeatCount=\"indefinite\" values=\"1;0\" />\n                </rect>\n            </g>\n            <g transform=\"rotate(300 50 50)\">\n                <rect fill=\"#7a7a7a\" height=\"12\" rx=\"3\" ry=\"6\" width=\"6\" x=\"47\" y=\"20\">\n                    <animate attributeName=\"opacity\" begin=\"-0.08333333333333333s\" dur=\"1s\" keyTimes=\"0;1\"\n                        repeatCount=\"indefinite\" values=\"1;0\" />\n                </rect>\n            </g>\n            <g transform=\"rotate(330 50 50)\">\n                <rect fill=\"#7a7a7a\" height=\"12\" rx=\"3\" ry=\"6\" width=\"6\" x=\"47\" y=\"20\">\n                    <animate attributeName=\"opacity\" begin=\"0s\" dur=\"1s\" keyTimes=\"0;1\" repeatCount=\"indefinite\"\n                        values=\"1;0\" />\n                </rect>\n            </g>\n        </svg>\n\n        <mat-icon *ngIf=\"!loaderDisplay && !isPlaying\" aria-hidden=\"true\" class=\"play-track\">\n            <!-- Play icon (play_arrow) -->\n            <svg height=\"32\" viewBox=\"0 0 24 24\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path d=\"M8 5v14l11-7z\" />\n                <path d=\"M0 0h24v24H0z\" fill=\"none\" />\n            </svg>\n        </mat-icon>\n        <mat-icon *ngIf=\"!loaderDisplay && isPlaying\" aria-hidden=\"true\" class=\"pause-track\">\n            <!-- Pause icon (pause) -->\n            <svg height=\"32\" viewBox=\"0 0 24 24\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path d=\"M6 19h4V5H6v14zm8-14v14h4V5h-4z\" />\n                <path d=\"M0 0h24v24H0z\" fill=\"none\" />\n            </svg>\n        </mat-icon>\n    </button>\n    <button (click)='nextSong();' [disabled]=\"loaderDisplay\" class=\"p-1 skip-next\" mat-button>\n        <mat-icon aria-hidden=\"true\" class=\"next-track\">\n            <!-- Skip next icon (skip_next) -->\n            <svg height=\"32\" viewBox=\"0 0 24 24\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path d=\"M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z\" />\n                <path d=\"M0 0h24v24H0z\" fill=\"none\" />\n            </svg>\n        </mat-icon>\n    </button>\n\n    <div class=\"col\">\n        <div class=\"d-flex flex-fill justify-content-center\">\n            <div class=\"d-none d-sm-block py-3 px-1\" style=\"font-size: 12px\">\n                <span *ngIf=\"duration !== 0.01\">\n                    {{currentTime-startOffset | secondsToMinutes}}\n                </span>\n            </div>\n            <mat-slider (change)=\"currTimePosChanged($event)\" [min]=\"startOffset\"\n                class=\"d-none d-sm-block flex-fill p-1\" max=\"{{duration-endOffset}}\" style=\"width: 100%\"\n                value=\"{{currentTime}}\"></mat-slider>\n\n            <div class=\"py-3 px-1\" style=\"font-size: 12px; text-align: right\">\n                <span *ngIf=\"duration !== 0.01\">\n                    -{{duration-endOffset-currentTime | secondsToMinutes }}\n                </span>\n            </div>\n        </div>\n    </div>\n    <button (click)='toggleVolume();' *ngIf=\"displayVolumeControls\" class=\"p-1 volume\" mat-button>\n        <mat-icon *ngIf=\"volume === 0\" aria-hidden=\"true\" class=\"volume-mute\">\n            <!-- Volume mute icon (volume_off) -->\n            <svg height=\"28\" viewBox=\"0 0 24 24\" width=\"28\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path\n                    d=\"M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z\" />\n                <path d=\"M0 0h24v24H0z\" fill=\"none\" />\n            </svg>\n        </mat-icon>\n        <mat-icon *ngIf=\"volume > 0\" aria-hidden=\"true\" class=\"volume-up\">\n            <!-- Volume up icon (volume_up) -->\n            <svg height=\"28\" viewBox=\"0 0 24 24\" width=\"28\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path\n                    d=\"M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z\" />\n                <path d=\"M0 0h24v24H0z\" fill=\"none\" />\n            </svg>\n        </mat-icon>\n    </button>\n</mat-card>\n\n<mat-card *ngIf=\"displayTitle\" class=\"mat-elevation-z1\">\n    <div style=\"text-align: center;\">\n        <div style=\"margin: 1px 2px; padding: 1em\">\n            <span *ngIf=\"!isPlaying\">{{ currentTrack?.title }}</span>\n            <marquee *ngIf=\"isPlaying\" behavior=\"scroll\" direction=\"left\">{{ currentTrack?.title\n                }}\n            </marquee>\n        </div>\n        <div class=\"clear\"></div>\n    </div>\n</mat-card>\n\n<mat-accordion *ngIf=\"displayPlaylist\">\n    <mat-expansion-panel [expanded]=\"expanded\">\n        <mat-expansion-panel-header>\n            Play List\n        </mat-expansion-panel-header>\n        <table [dataSource]=\"dataSource\" class=\"mat-elevation-z6\" mat-table>\n            <ng-container matColumnDef=\"title\">\n                <th *matHeaderCellDef mat-header-cell> Title</th>\n                <td (click)=\"selectTrack(element.index)\" *matCellDef=\"let element\" mat-cell>\n                    {{element.title}}\n                </td>\n            </ng-container>\n            <ng-container matColumnDef=\"status\">\n                <th *matHeaderCellDef mat-header-cell></th>\n                <td *matCellDef=\"let element\" mat-cell>\n                    <div *ngIf=\"currentTrack?.title === element.title\">\n                        <!-- <mat-icon *ngIf=\"isPlaying\" aria-hidden=\"true\">\n                          <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M6 19h4V5H6v14zm8-14v14h4V5h-4z\"/><path d=\"M0 0h24v24H0z\" fill=\"none\"/></svg>\n                        </mat-icon> -->\n                        <mat-icon *ngIf=\"isPlaying\" aria-hidden=\"true\" class=\"currently-playing\">\n                            <!-- Play icon (play_arrow) -->\n                            <svg height=\"24\" viewBox=\"0 0 24 24\" width=\"24\" xmlns=\"http://www.w3.org/2000/svg\">\n                                <path d=\"M0 0h24v24H0z\" fill=\"none\" />\n                                <path\n                                    d=\"M12 3v9.28c-.47-.17-.97-.28-1.5-.28C8.01 12 6 14.01 6 16.5S8.01 21 10.5 21c2.31 0 4.2-1.75 4.45-4H15V6h4V3h-7z\" />\n                            </svg>\n                        </mat-icon>\n                    </div>\n                </td>\n            </ng-container>\n            <tr *matHeaderRowDef=\"displayedColumns\" mat-header-row></tr>\n            <tr *matRowDef=\"let row; columns: displayedColumns;\" class=\"mat-select-content\" mat-row></tr>\n        </table>\n        <mat-paginator [pageSizeOptions]=\"pageSizeOptions\" showFirstLastButtons></mat-paginator>\n    </mat-expansion-panel>\n</mat-accordion>",
        styles: ["table{width:100%}.ngx-advanced-audio-player{min-width:325px}mat-slider{max-height:30px}.material-icons{font-size:16px!important}mat-icon>.currently-playing{height:16px!important;width:16px!important}.play-pause{border-left:2px solid rgba(0,0,0,.1);border-right:2px solid rgba(0,0,0,.1)}.volume{border-left:2px solid rgba(0,0,0,.1)}.skip-next{border-right:2px solid rgba(0,0,0,.1)}", "@import url(https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.4.1/css/bootstrap-grid.min.css);mat-card,mat-slider{padding:0!important}button:focus,button:hover{outline:0!important}svg{vertical-align:top}.mat-icon{height:32px!important;width:32px!important}mat-card{background:rgba(0,0,0,.02)}mat-icon>.currently-playing{height:16px!important;width:16px!important}"]
    }),
    __metadata("design:paramtypes", [])
], MatAdvancedAudioPlayerComponent);
export { MatAdvancedAudioPlayerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LWFkdmFuY2VkLWF1ZGlvLXBsYXllci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYXVkaW8tcGxheWVyLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudC9tYXQtYWR2YW5jZWQtYXVkaW8tcGxheWVyL21hdC1hZHZhbmNlZC1hdWRpby1wbGF5ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFcEUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFFL0UsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDN0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzNELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBTzdGLElBQWEsK0JBQStCLEdBQTVDLE1BQWEsK0JBQWdDLFNBQVEsd0JBQXdCO0lBSXpFO1FBQ0ksS0FBSyxFQUFFLENBQUM7UUFjWixxQkFBZ0IsR0FBYSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztRQUNqRCxlQUFVLEdBQUcsSUFBSSxrQkFBa0IsRUFBUyxDQUFDO1FBSzdDLFdBQU0sR0FBWSxFQUFFLENBQUM7UUFFWixpQkFBWSxHQUFHLElBQUksQ0FBQztRQUNwQixvQkFBZSxHQUFHLElBQUksQ0FBQztRQUN2QiwwQkFBcUIsR0FBRyxJQUFJLENBQUM7UUFDN0Isb0JBQWUsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDL0IsYUFBUSxHQUFHLElBQUksQ0FBQztRQUNoQixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBRWxCLGlCQUFZLEdBQUcsQ0FBQyxDQUFDO1FBS2pCLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFqQzlCLElBQUksQ0FBQyxr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QUE7QUE1S0c7SUFEQyxLQUFLLEVBQUU7OzsrREFHUDtBQUUyQztJQUEzQyxTQUFTLENBQUMsWUFBWSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDOzhCQUFzQixZQUFZO3FDQUFaLFlBQVk7bUVBRzVFO0FBVVE7SUFBUixLQUFLLEVBQUU7O3FFQUFxQjtBQUNwQjtJQUFSLEtBQUssRUFBRTs7d0VBQXdCO0FBQ3ZCO0lBQVIsS0FBSyxFQUFFOzs4RUFBOEI7QUFDN0I7SUFBUixLQUFLLEVBQUU7O3dFQUFnQztBQUMvQjtJQUFSLEtBQUssRUFBRTs7aUVBQWlCO0FBQ2hCO0lBQVIsS0FBSyxFQUFFOztpRUFBa0I7QUFoQ2pCLCtCQUErQjtJQUwzQyxTQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsMkJBQTJCO1FBQ3JDLDhtWUFBeUQ7O0tBRTVELENBQUM7O0dBQ1csK0JBQStCLENBc0wzQztTQXRMWSwrQkFBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVHJhY2sgfSBmcm9tICcuLi8uLi9tb2RlbC90cmFjay5tb2RlbCc7XG5pbXBvcnQgeyBCYXNlQXVkaW9QbGF5ZXJGdW5jdGlvbnMgfSBmcm9tICcuLi9iYXNlL2Jhc2UtYXVkaW8tcGxheWVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNYXRTbGlkZXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zbGlkZXInO1xuaW1wb3J0IHsgTWF0VGFibGVEYXRhU291cmNlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdGFibGUnO1xuaW1wb3J0IHsgTWF0UGFnaW5hdG9yIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcGFnaW5hdG9yJztcbmltcG9ydCB7IEF1ZGlvUGxheWVyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2UvYXVkaW8tcGxheWVyLXNlcnZpY2UvYXVkaW8tcGxheWVyLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ21hdC1hZHZhbmNlZC1hdWRpby1wbGF5ZXInLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9tYXQtYWR2YW5jZWQtYXVkaW8tcGxheWVyLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9tYXQtYWR2YW5jZWQtYXVkaW8tcGxheWVyLmNvbXBvbmVudC5jc3MnLCAnLi8uLi9iYXNlL2Jhc2UtYXVkaW8tcGxheWVyLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBNYXRBZHZhbmNlZEF1ZGlvUGxheWVyQ29tcG9uZW50IGV4dGVuZHMgQmFzZUF1ZGlvUGxheWVyRnVuY3Rpb25zIGltcGxlbWVudHMgT25Jbml0IHtcblxuXG4gICAgYXVkaW9QbGF5ZXJTZXJ2aWNlOiBBdWRpb1BsYXllclNlcnZpY2U7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuYXVkaW9QbGF5ZXJTZXJ2aWNlID0gbmV3IEF1ZGlvUGxheWVyU2VydmljZSgpO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgc2V0IHBsYXlsaXN0KHBsYXlsaXN0OiBUcmFja1tdKSB7XG4gICAgICAgIHRoaXMuYXVkaW9QbGF5ZXJTZXJ2aWNlLnNldFBsYXlsaXN0KHBsYXlsaXN0KTtcbiAgICB9XG5cbiAgICBAVmlld0NoaWxkKE1hdFBhZ2luYXRvciwgeyBzdGF0aWM6IGZhbHNlIH0pIHNldCBtYXRQYWdpbmF0b3IobXA6IE1hdFBhZ2luYXRvcikge1xuICAgICAgICB0aGlzLnBhZ2luYXRvciA9IG1wO1xuICAgICAgICB0aGlzLnNldERhdGFTb3VyY2VBdHRyaWJ1dGVzKCk7XG4gICAgfVxuXG4gICAgZGlzcGxheWVkQ29sdW1uczogc3RyaW5nW10gPSBbJ3RpdGxlJywgJ3N0YXR1cyddO1xuICAgIGRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlPFRyYWNrPigpO1xuICAgIHBhZ2luYXRvcjogTWF0UGFnaW5hdG9yO1xuXG4gICAgdGltZUxpbmVEdXJhdGlvbjogTWF0U2xpZGVyO1xuXG4gICAgdHJhY2tzOiBUcmFja1tdID0gW107XG5cbiAgICBASW5wdXQoKSBkaXNwbGF5VGl0bGUgPSB0cnVlO1xuICAgIEBJbnB1dCgpIGRpc3BsYXlQbGF5bGlzdCA9IHRydWU7XG4gICAgQElucHV0KCkgZGlzcGxheVZvbHVtZUNvbnRyb2xzID0gdHJ1ZTtcbiAgICBASW5wdXQoKSBwYWdlU2l6ZU9wdGlvbnMgPSBbMTAsIDIwLCAzMF07XG4gICAgQElucHV0KCkgZXhwYW5kZWQgPSB0cnVlO1xuICAgIEBJbnB1dCgpIGF1dG9QbGF5ID0gZmFsc2U7XG5cbiAgICBwcml2YXRlIGN1cnJlbnRJbmRleCA9IDA7XG5cbiAgICBjdXJyZW50VHJhY2s6IFRyYWNrO1xuICAgIHByaXZhdGUgcHJldmlvdXNUcmFjazogVHJhY2s7XG4gICAgcHJpdmF0ZSBuZXh0VHJhY2s6IFRyYWNrO1xuICAgIHByaXZhdGUgcmVwZWF0SXQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIG5nT25Jbml0KCkge1xuXG4gICAgICAgIHRoaXMuYmluZFBsYXllckV2ZW50KCk7XG5cbiAgICAgICAgLy8gU3Vic2NyaWJlIHRvIHBsYXlsaXN0IG9ic2VydmVyIGZyb20gQXVkaW9QbGF5ZXJTZXJ2aWNlIGFuZFxuICAgICAgICAvLyB1cGRhdGUgdGhlIHBsYXlsaXN0IHdpdGhpbiBNYXRBZHZhbmNlZEF1ZGlvUGxheWVyQ29tcG9uZW50XG4gICAgICAgIHRoaXMuYXVkaW9QbGF5ZXJTZXJ2aWNlLmdldFBsYXlsaXN0KCkuc3Vic2NyaWJlKHRyYWNrcyA9PiB7XG4gICAgICAgICAgICBpZiAodHJhY2tzICE9PSBudWxsICYmIHRyYWNrcyAhPT0gW10pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRyYWNrcyA9IHRyYWNrcztcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBpbml0aWFsaXplKCkge1xuXG4gICAgICAgIC8vIHBvcHVsYXRlIGluZGV4cyBmb3IgdGhlIHRyYWNrIGFuZCBjb25maWd1cmVcbiAgICAgICAgLy8gbWF0ZXJpYWwgdGFibGUgZGF0YSBzb3VyY2UgYW5kIHBhZ2luYXRvclxuICAgICAgICB0aGlzLnNldERhdGFTb3VyY2VBdHRyaWJ1dGVzKCk7XG5cbiAgICAgICAgLy8gYXV0byBwbGF5IG5leHQgdHJhY2tcbiAgICAgICAgdGhpcy5wbGF5ZXIubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdlbmRlZCcsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlbmQgcmVhY2hlZCcsIHRoaXMucmVwZWF0SXQpXG4gICAgICAgICAgICBpZiAodGhpcy5yZXBlYXRJdCkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVwZWF0U29uZygpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dFNvbmcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5wbGF5ZXIubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0aW1ldXBkYXRlJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hdWRpb1BsYXllclNlcnZpY2Uuc2V0Q3VycmVudFRpbWUodGhpcy5wbGF5ZXIubmF0aXZlRWxlbWVudC5jdXJyZW50VGltZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMucGxheWVyLm5hdGl2ZUVsZW1lbnQuY3VycmVudFRpbWUgPSB0aGlzLnN0YXJ0T2Zmc2V0O1xuICAgICAgICB0aGlzLnVwZGF0ZUN1cnJlbnRTb25nKCk7XG4gICAgICAgIGlmICh0aGlzLmF1dG9QbGF5KSB7XG4gICAgICAgICAgICBzdXBlci5wbGF5KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXREYXRhU291cmNlQXR0cmlidXRlcygpIHtcbiAgICAgICAgbGV0IGluZGV4ID0gMTtcbiAgICAgICAgaWYgKHRoaXMudHJhY2tzKSB7XG4gICAgICAgICAgICB0aGlzLnRyYWNrcy5mb3JFYWNoKCh0cmFjazogVHJhY2spID0+IHtcbiAgICAgICAgICAgICAgICB0cmFjay5pbmRleCA9IGluZGV4Kys7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2U8VHJhY2s+KHRoaXMudHJhY2tzKTtcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5wYWdpbmF0b3IgPSB0aGlzLnBhZ2luYXRvcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5leHRTb25nKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5kaXNwbGF5UGxheWxpc3QgPT09IHRydWVcbiAgICAgICAgICAgICYmICgoKHRoaXMuY3VycmVudEluZGV4ICsgMSkgJSB0aGlzLnBhZ2luYXRvci5wYWdlU2l6ZSkgPT09IDBcbiAgICAgICAgICAgICAgICB8fCAodGhpcy5jdXJyZW50SW5kZXggKyAxKSA9PT0gdGhpcy5wYWdpbmF0b3IubGVuZ3RoKSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucGFnaW5hdG9yLmhhc05leHRQYWdlKCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2luYXRvci5uZXh0UGFnZSgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICghdGhpcy5wYWdpbmF0b3IuaGFzTmV4dFBhZ2UoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMucGFnaW5hdG9yLmZpcnN0UGFnZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3VycmVudFRpbWUgPSAwO1xuICAgICAgICB0aGlzLmR1cmF0aW9uID0gMC4wMTtcbiAgICAgICAgdGhpcy5yZXBlYXRJdCA9IGZhbHNlO1xuXG4gICAgICAgIGlmICgodGhpcy5jdXJyZW50SW5kZXggKyAxKSA+PSB0aGlzLnRyYWNrcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEluZGV4ID0gMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEluZGV4Kys7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGVDdXJyZW50U29uZygpO1xuICAgICAgICB0aGlzLnBsYXkodGhpcy5uZXh0VHJhY2spO1xuICAgIH1cblxuICAgIHByZXZpb3VzU29uZygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jdXJyZW50VGltZSA9IDA7XG4gICAgICAgIHRoaXMuZHVyYXRpb24gPSAwLjAxO1xuICAgICAgICB0aGlzLnJlcGVhdEl0ID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKCF0aGlzLmNoZWNrSWZTb25nSGFzU3RhcnRlZFNpbmNlQXRsZWFzdFR3b1NlY29uZHMoKSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZGlzcGxheVBsYXlsaXN0ID09PSB0cnVlXG4gICAgICAgICAgICAgICAgJiYgKCgodGhpcy5jdXJyZW50SW5kZXgpICUgdGhpcy5wYWdpbmF0b3IucGFnZVNpemUpID09PSAwXG4gICAgICAgICAgICAgICAgICAgIHx8ICh0aGlzLmN1cnJlbnRJbmRleCA9PT0gMCkpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGFnaW5hdG9yLmhhc1ByZXZpb3VzUGFnZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFnaW5hdG9yLnByZXZpb3VzUGFnZSgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIXRoaXMucGFnaW5hdG9yLmhhc1ByZXZpb3VzUGFnZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFnaW5hdG9yLmxhc3RQYWdlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCh0aGlzLmN1cnJlbnRJbmRleCAtIDEpIDwgMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEluZGV4ID0gKHRoaXMudHJhY2tzLmxlbmd0aCAtIDEpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRJbmRleC0tO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yZXNldFNvbmcoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZUN1cnJlbnRTb25nKCk7XG4gICAgICAgIHRoaXMucGxheSh0aGlzLnByZXZpb3VzVHJhY2spO1xuICAgIH1cblxuICAgIHJlc2V0U29uZygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5wbGF5ZXIubmF0aXZlRWxlbWVudC5zcmMgPSB0aGlzLmN1cnJlbnRUcmFjay5saW5rO1xuICAgIH1cblxuICAgIHNlbGVjdFRyYWNrKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jdXJyZW50SW5kZXggPSBpbmRleCAtIDE7XG4gICAgICAgIHRoaXMudXBkYXRlQ3VycmVudFNvbmcoKTtcbiAgICAgICAgdGhpcy5wbGF5KHRoaXMuY3VycmVudFRyYWNrKTtcbiAgICB9XG5cbiAgICBjaGVja0lmU29uZ0hhc1N0YXJ0ZWRTaW5jZUF0bGVhc3RUd29TZWNvbmRzKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5wbGF5ZXIubmF0aXZlRWxlbWVudC5jdXJyZW50VGltZSA+IDI7XG4gICAgfVxuXG4gICAgdXBkYXRlQ3VycmVudFNvbmcoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY3VycmVudFRyYWNrID0gdGhpcy50cmFja3NbdGhpcy5jdXJyZW50SW5kZXhdO1xuICAgICAgICB0aGlzLnByZXZpb3VzVHJhY2sgPSAoKHRoaXMuY3VycmVudEluZGV4IC0gMSkgPj0gMCkgPyB0aGlzLnRyYWNrc1t0aGlzLmN1cnJlbnRJbmRleCAtIDFdIDogdGhpcy50cmFja3NbdGhpcy50cmFja3MubGVuZ3RoIC0gMV07XG4gICAgICAgIHRoaXMubmV4dFRyYWNrID0gKCh0aGlzLmN1cnJlbnRJbmRleCArIDEpID49IHRoaXMudHJhY2tzLmxlbmd0aCkgPyB0aGlzLnRyYWNrc1swXSA6IHRoaXMudHJhY2tzW3RoaXMuY3VycmVudEluZGV4ICsgMV07XG5cbiAgICAgICAgdGhpcy5hdWRpb1BsYXllclNlcnZpY2Uuc2V0Q3VycmVudFRyYWNrKHRoaXMuY3VycmVudFRyYWNrKTtcbiAgICB9XG5cbiAgICByZXBlYXRTb25nKCk6IHZvaWQge1xuICAgICAgICBjb25zb2xlLmxvZygndSBqdXN0IGNhbGwgcmVwZWF0IHRoZSBzb25nIGZ1bmN0aW9uJylcbiAgICAgICAgdGhpcy5yZXBlYXRJdCA9IHRydWVcbiAgICAgICAgdGhpcy5jdXJyZW50VGltZSA9IDA7XG4gICAgICAgIHRoaXMuZHVyYXRpb24gPSAwLjAxO1xuICAgICAgICB0aGlzLnJlc2V0U29uZygpXG5cbiAgICAgICAgdGhpcy51cGRhdGVDdXJyZW50U29uZygpO1xuXG4gICAgICAgIHRoaXMucGxheSh0aGlzLmN1cnJlbnRUcmFjayk7XG4gICAgfVxuXG4gICAgc2V0UmVwYXRGbGFnKCkge1xuICAgICAgICB0aGlzLnJlcGVhdEl0ID0gIXRoaXMucmVwZWF0SXRcbiAgICB9XG5cbn1cbiJdfQ==