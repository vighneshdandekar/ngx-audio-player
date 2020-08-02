import { __decorate, __extends, __metadata } from "tslib";
import { Component, Input, ViewChild } from '@angular/core';
import { BaseAudioPlayerFunctions } from '../base/base-audio-player.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { AudioPlayerService } from '../../service/audio-player-service/audio-player.service';
var MatAdvancedAudioPlayerComponent = /** @class */ (function (_super) {
    __extends(MatAdvancedAudioPlayerComponent, _super);
    function MatAdvancedAudioPlayerComponent() {
        var _this = _super.call(this) || this;
        _this.displayedColumns = ['title', 'status'];
        _this.dataSource = new MatTableDataSource();
        _this.tracks = [];
        _this.displayTitle = true;
        _this.displayPlaylist = true;
        _this.displayVolumeControls = true;
        _this.pageSizeOptions = [10, 20, 30];
        _this.expanded = true;
        _this.autoPlay = false;
        _this.currentIndex = 0;
        _this.repeatIt = false;
        _this.audioPlayerService = new AudioPlayerService();
        return _this;
    }
    Object.defineProperty(MatAdvancedAudioPlayerComponent.prototype, "playlist", {
        set: function (playlist) {
            this.audioPlayerService.setPlaylist(playlist);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatAdvancedAudioPlayerComponent.prototype, "matPaginator", {
        set: function (mp) {
            this.paginator = mp;
            this.setDataSourceAttributes();
        },
        enumerable: true,
        configurable: true
    });
    MatAdvancedAudioPlayerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bindPlayerEvent();
        // Subscribe to playlist observer from AudioPlayerService and
        // update the playlist within MatAdvancedAudioPlayerComponent
        this.audioPlayerService.getPlaylist().subscribe(function (tracks) {
            if (tracks !== null && tracks !== []) {
                _this.tracks = tracks;
                _this.initialize();
            }
        });
    };
    MatAdvancedAudioPlayerComponent.prototype.initialize = function () {
        var _this = this;
        // populate indexs for the track and configure
        // material table data source and paginator
        this.setDataSourceAttributes();
        // auto play next track
        this.player.nativeElement.addEventListener('ended', function () {
            console.log('end reached', _this.repeatIt);
            if (_this.repeatIt) {
                _this.repeatSong();
            }
            else {
                _this.nextSong();
            }
        });
        this.player.nativeElement.addEventListener('timeupdate', function () {
            _this.audioPlayerService.setCurrentTime(_this.player.nativeElement.currentTime);
        });
        this.player.nativeElement.currentTime = this.startOffset;
        this.updateCurrentSong();
        if (this.autoPlay) {
            _super.prototype.play.call(this);
        }
    };
    MatAdvancedAudioPlayerComponent.prototype.setDataSourceAttributes = function () {
        var index = 1;
        if (this.tracks) {
            this.tracks.forEach(function (track) {
                track.index = index++;
            });
            this.dataSource = new MatTableDataSource(this.tracks);
            this.dataSource.paginator = this.paginator;
        }
    };
    MatAdvancedAudioPlayerComponent.prototype.nextSong = function () {
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
    };
    MatAdvancedAudioPlayerComponent.prototype.previousSong = function () {
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
    };
    MatAdvancedAudioPlayerComponent.prototype.resetSong = function () {
        this.player.nativeElement.src = this.currentTrack.link;
    };
    MatAdvancedAudioPlayerComponent.prototype.selectTrack = function (index) {
        this.currentIndex = index - 1;
        this.updateCurrentSong();
        this.play(this.currentTrack);
    };
    MatAdvancedAudioPlayerComponent.prototype.checkIfSongHasStartedSinceAtleastTwoSeconds = function () {
        return this.player.nativeElement.currentTime > 2;
    };
    MatAdvancedAudioPlayerComponent.prototype.updateCurrentSong = function () {
        this.currentTrack = this.tracks[this.currentIndex];
        this.previousTrack = ((this.currentIndex - 1) >= 0) ? this.tracks[this.currentIndex - 1] : this.tracks[this.tracks.length - 1];
        this.nextTrack = ((this.currentIndex + 1) >= this.tracks.length) ? this.tracks[0] : this.tracks[this.currentIndex + 1];
        this.audioPlayerService.setCurrentTrack(this.currentTrack);
    };
    MatAdvancedAudioPlayerComponent.prototype.repeatSong = function () {
        console.log('u just call repeat the song function');
        this.repeatIt = true;
        this.currentTime = 0;
        this.duration = 0.01;
        this.resetSong();
        this.updateCurrentSong();
        this.play(this.currentTrack);
    };
    MatAdvancedAudioPlayerComponent.prototype.setRepatFlag = function () {
        this.repeatIt = !this.repeatIt;
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
    return MatAdvancedAudioPlayerComponent;
}(BaseAudioPlayerFunctions));
export { MatAdvancedAudioPlayerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LWFkdmFuY2VkLWF1ZGlvLXBsYXllci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYXVkaW8tcGxheWVyLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudC9tYXQtYWR2YW5jZWQtYXVkaW8tcGxheWVyL21hdC1hZHZhbmNlZC1hdWRpby1wbGF5ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFcEUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFFL0UsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDN0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzNELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBTzdGO0lBQXFELG1EQUF3QjtJQUl6RTtRQUFBLFlBQ0ksaUJBQU8sU0FFVjtRQVlELHNCQUFnQixHQUFhLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ2pELGdCQUFVLEdBQUcsSUFBSSxrQkFBa0IsRUFBUyxDQUFDO1FBSzdDLFlBQU0sR0FBWSxFQUFFLENBQUM7UUFFWixrQkFBWSxHQUFHLElBQUksQ0FBQztRQUNwQixxQkFBZSxHQUFHLElBQUksQ0FBQztRQUN2QiwyQkFBcUIsR0FBRyxJQUFJLENBQUM7UUFDN0IscUJBQWUsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDL0IsY0FBUSxHQUFHLElBQUksQ0FBQztRQUNoQixjQUFRLEdBQUcsS0FBSyxDQUFDO1FBRWxCLGtCQUFZLEdBQUcsQ0FBQyxDQUFDO1FBS2pCLGNBQVEsR0FBWSxLQUFLLENBQUM7UUFqQzlCLEtBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLGtCQUFrQixFQUFF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UUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQTtJQUNsQyxDQUFDO0lBMUtEO1FBREMsS0FBSyxFQUFFOzs7bUVBR1A7SUFFMkM7UUFBM0MsU0FBUyxDQUFDLFlBQVksRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQztrQ0FBc0IsWUFBWTt5Q0FBWixZQUFZO3VFQUc1RTtJQVVRO1FBQVIsS0FBSyxFQUFFOzt5RUFBcUI7SUFDcEI7UUFBUixLQUFLLEVBQUU7OzRFQUF3QjtJQUN2QjtRQUFSLEtBQUssRUFBRTs7a0ZBQThCO0lBQzdCO1FBQVIsS0FBSyxFQUFFOzs0RUFBZ0M7SUFDL0I7UUFBUixLQUFLLEVBQUU7O3FFQUFpQjtJQUNoQjtRQUFSLEtBQUssRUFBRTs7cUVBQWtCO0lBaENqQiwrQkFBK0I7UUFMM0MsU0FBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLDJCQUEyQjtZQUNyQyw4bVlBQXlEOztTQUU1RCxDQUFDOztPQUNXLCtCQUErQixDQXNMM0M7SUFBRCxzQ0FBQztDQUFBLEFBdExELENBQXFELHdCQUF3QixHQXNMNUU7U0F0TFksK0JBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRyYWNrIH0gZnJvbSAnLi4vLi4vbW9kZWwvdHJhY2subW9kZWwnO1xuaW1wb3J0IHsgQmFzZUF1ZGlvUGxheWVyRnVuY3Rpb25zIH0gZnJvbSAnLi4vYmFzZS9iYXNlLWF1ZGlvLXBsYXllci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWF0U2xpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2xpZGVyJztcbmltcG9ydCB7IE1hdFRhYmxlRGF0YVNvdXJjZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RhYmxlJztcbmltcG9ydCB7IE1hdFBhZ2luYXRvciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3BhZ2luYXRvcic7XG5pbXBvcnQgeyBBdWRpb1BsYXllclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlL2F1ZGlvLXBsYXllci1zZXJ2aWNlL2F1ZGlvLXBsYXllci5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdtYXQtYWR2YW5jZWQtYXVkaW8tcGxheWVyJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vbWF0LWFkdmFuY2VkLWF1ZGlvLXBsYXllci5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vbWF0LWFkdmFuY2VkLWF1ZGlvLXBsYXllci5jb21wb25lbnQuY3NzJywgJy4vLi4vYmFzZS9iYXNlLWF1ZGlvLXBsYXllci5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTWF0QWR2YW5jZWRBdWRpb1BsYXllckNvbXBvbmVudCBleHRlbmRzIEJhc2VBdWRpb1BsYXllckZ1bmN0aW9ucyBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblxuICAgIGF1ZGlvUGxheWVyU2VydmljZTogQXVkaW9QbGF5ZXJTZXJ2aWNlO1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmF1ZGlvUGxheWVyU2VydmljZSA9IG5ldyBBdWRpb1BsYXllclNlcnZpY2UoKTtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHNldCBwbGF5bGlzdChwbGF5bGlzdDogVHJhY2tbXSkge1xuICAgICAgICB0aGlzLmF1ZGlvUGxheWVyU2VydmljZS5zZXRQbGF5bGlzdChwbGF5bGlzdCk7XG4gICAgfVxuXG4gICAgQFZpZXdDaGlsZChNYXRQYWdpbmF0b3IsIHsgc3RhdGljOiBmYWxzZSB9KSBzZXQgbWF0UGFnaW5hdG9yKG1wOiBNYXRQYWdpbmF0b3IpIHtcbiAgICAgICAgdGhpcy5wYWdpbmF0b3IgPSBtcDtcbiAgICAgICAgdGhpcy5zZXREYXRhU291cmNlQXR0cmlidXRlcygpO1xuICAgIH1cblxuICAgIGRpc3BsYXllZENvbHVtbnM6IHN0cmluZ1tdID0gWyd0aXRsZScsICdzdGF0dXMnXTtcbiAgICBkYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZTxUcmFjaz4oKTtcbiAgICBwYWdpbmF0b3I6IE1hdFBhZ2luYXRvcjtcblxuICAgIHRpbWVMaW5lRHVyYXRpb246IE1hdFNsaWRlcjtcblxuICAgIHRyYWNrczogVHJhY2tbXSA9IFtdO1xuXG4gICAgQElucHV0KCkgZGlzcGxheVRpdGxlID0gdHJ1ZTtcbiAgICBASW5wdXQoKSBkaXNwbGF5UGxheWxpc3QgPSB0cnVlO1xuICAgIEBJbnB1dCgpIGRpc3BsYXlWb2x1bWVDb250cm9scyA9IHRydWU7XG4gICAgQElucHV0KCkgcGFnZVNpemVPcHRpb25zID0gWzEwLCAyMCwgMzBdO1xuICAgIEBJbnB1dCgpIGV4cGFuZGVkID0gdHJ1ZTtcbiAgICBASW5wdXQoKSBhdXRvUGxheSA9IGZhbHNlO1xuXG4gICAgcHJpdmF0ZSBjdXJyZW50SW5kZXggPSAwO1xuXG4gICAgY3VycmVudFRyYWNrOiBUcmFjaztcbiAgICBwcml2YXRlIHByZXZpb3VzVHJhY2s6IFRyYWNrO1xuICAgIHByaXZhdGUgbmV4dFRyYWNrOiBUcmFjaztcbiAgICBwcml2YXRlIHJlcGVhdEl0OiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBuZ09uSW5pdCgpIHtcblxuICAgICAgICB0aGlzLmJpbmRQbGF5ZXJFdmVudCgpO1xuXG4gICAgICAgIC8vIFN1YnNjcmliZSB0byBwbGF5bGlzdCBvYnNlcnZlciBmcm9tIEF1ZGlvUGxheWVyU2VydmljZSBhbmRcbiAgICAgICAgLy8gdXBkYXRlIHRoZSBwbGF5bGlzdCB3aXRoaW4gTWF0QWR2YW5jZWRBdWRpb1BsYXllckNvbXBvbmVudFxuICAgICAgICB0aGlzLmF1ZGlvUGxheWVyU2VydmljZS5nZXRQbGF5bGlzdCgpLnN1YnNjcmliZSh0cmFja3MgPT4ge1xuICAgICAgICAgICAgaWYgKHRyYWNrcyAhPT0gbnVsbCAmJiB0cmFja3MgIT09IFtdKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50cmFja3MgPSB0cmFja3M7XG4gICAgICAgICAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgaW5pdGlhbGl6ZSgpIHtcblxuICAgICAgICAvLyBwb3B1bGF0ZSBpbmRleHMgZm9yIHRoZSB0cmFjayBhbmQgY29uZmlndXJlXG4gICAgICAgIC8vIG1hdGVyaWFsIHRhYmxlIGRhdGEgc291cmNlIGFuZCBwYWdpbmF0b3JcbiAgICAgICAgdGhpcy5zZXREYXRhU291cmNlQXR0cmlidXRlcygpO1xuXG4gICAgICAgIC8vIGF1dG8gcGxheSBuZXh0IHRyYWNrXG4gICAgICAgIHRoaXMucGxheWVyLm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZW5kZWQnLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZW5kIHJlYWNoZWQnLCB0aGlzLnJlcGVhdEl0KVxuICAgICAgICAgICAgaWYgKHRoaXMucmVwZWF0SXQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlcGVhdFNvbmcoKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5leHRTb25nKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMucGxheWVyLm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndGltZXVwZGF0ZScsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYXVkaW9QbGF5ZXJTZXJ2aWNlLnNldEN1cnJlbnRUaW1lKHRoaXMucGxheWVyLm5hdGl2ZUVsZW1lbnQuY3VycmVudFRpbWUpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnBsYXllci5uYXRpdmVFbGVtZW50LmN1cnJlbnRUaW1lID0gdGhpcy5zdGFydE9mZnNldDtcbiAgICAgICAgdGhpcy51cGRhdGVDdXJyZW50U29uZygpO1xuICAgICAgICBpZiAodGhpcy5hdXRvUGxheSkge1xuICAgICAgICAgICAgc3VwZXIucGxheSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0RGF0YVNvdXJjZUF0dHJpYnV0ZXMoKSB7XG4gICAgICAgIGxldCBpbmRleCA9IDE7XG4gICAgICAgIGlmICh0aGlzLnRyYWNrcykge1xuICAgICAgICAgICAgdGhpcy50cmFja3MuZm9yRWFjaCgodHJhY2s6IFRyYWNrKSA9PiB7XG4gICAgICAgICAgICAgICAgdHJhY2suaW5kZXggPSBpbmRleCsrO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlPFRyYWNrPih0aGlzLnRyYWNrcyk7XG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yID0gdGhpcy5wYWdpbmF0b3I7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZXh0U29uZygpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuZGlzcGxheVBsYXlsaXN0ID09PSB0cnVlXG4gICAgICAgICAgICAmJiAoKCh0aGlzLmN1cnJlbnRJbmRleCArIDEpICUgdGhpcy5wYWdpbmF0b3IucGFnZVNpemUpID09PSAwXG4gICAgICAgICAgICAgICAgfHwgKHRoaXMuY3VycmVudEluZGV4ICsgMSkgPT09IHRoaXMucGFnaW5hdG9yLmxlbmd0aCkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnBhZ2luYXRvci5oYXNOZXh0UGFnZSgpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYWdpbmF0b3IubmV4dFBhZ2UoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIXRoaXMucGFnaW5hdG9yLmhhc05leHRQYWdlKCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2luYXRvci5maXJzdFBhZ2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmN1cnJlbnRUaW1lID0gMDtcbiAgICAgICAgdGhpcy5kdXJhdGlvbiA9IDAuMDE7XG4gICAgICAgIHRoaXMucmVwZWF0SXQgPSBmYWxzZTtcblxuICAgICAgICBpZiAoKHRoaXMuY3VycmVudEluZGV4ICsgMSkgPj0gdGhpcy50cmFja3MubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRJbmRleCA9IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRJbmRleCsrO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlQ3VycmVudFNvbmcoKTtcbiAgICAgICAgdGhpcy5wbGF5KHRoaXMubmV4dFRyYWNrKTtcbiAgICB9XG5cbiAgICBwcmV2aW91c1NvbmcoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY3VycmVudFRpbWUgPSAwO1xuICAgICAgICB0aGlzLmR1cmF0aW9uID0gMC4wMTtcbiAgICAgICAgdGhpcy5yZXBlYXRJdCA9IGZhbHNlO1xuXG4gICAgICAgIGlmICghdGhpcy5jaGVja0lmU29uZ0hhc1N0YXJ0ZWRTaW5jZUF0bGVhc3RUd29TZWNvbmRzKCkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmRpc3BsYXlQbGF5bGlzdCA9PT0gdHJ1ZVxuICAgICAgICAgICAgICAgICYmICgoKHRoaXMuY3VycmVudEluZGV4KSAlIHRoaXMucGFnaW5hdG9yLnBhZ2VTaXplKSA9PT0gMFxuICAgICAgICAgICAgICAgICAgICB8fCAodGhpcy5jdXJyZW50SW5kZXggPT09IDApKSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhZ2luYXRvci5oYXNQcmV2aW91c1BhZ2UoKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2luYXRvci5wcmV2aW91c1BhZ2UoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLnBhZ2luYXRvci5oYXNQcmV2aW91c1BhZ2UoKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2luYXRvci5sYXN0UGFnZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgodGhpcy5jdXJyZW50SW5kZXggLSAxKSA8IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRJbmRleCA9ICh0aGlzLnRyYWNrcy5sZW5ndGggLSAxKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50SW5kZXgtLTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucmVzZXRTb25nKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGVDdXJyZW50U29uZygpO1xuICAgICAgICB0aGlzLnBsYXkodGhpcy5wcmV2aW91c1RyYWNrKTtcbiAgICB9XG5cbiAgICByZXNldFNvbmcoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucGxheWVyLm5hdGl2ZUVsZW1lbnQuc3JjID0gdGhpcy5jdXJyZW50VHJhY2subGluaztcbiAgICB9XG5cbiAgICBzZWxlY3RUcmFjayhpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY3VycmVudEluZGV4ID0gaW5kZXggLSAxO1xuICAgICAgICB0aGlzLnVwZGF0ZUN1cnJlbnRTb25nKCk7XG4gICAgICAgIHRoaXMucGxheSh0aGlzLmN1cnJlbnRUcmFjayk7XG4gICAgfVxuXG4gICAgY2hlY2tJZlNvbmdIYXNTdGFydGVkU2luY2VBdGxlYXN0VHdvU2Vjb25kcygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGxheWVyLm5hdGl2ZUVsZW1lbnQuY3VycmVudFRpbWUgPiAyO1xuICAgIH1cblxuICAgIHVwZGF0ZUN1cnJlbnRTb25nKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmN1cnJlbnRUcmFjayA9IHRoaXMudHJhY2tzW3RoaXMuY3VycmVudEluZGV4XTtcbiAgICAgICAgdGhpcy5wcmV2aW91c1RyYWNrID0gKCh0aGlzLmN1cnJlbnRJbmRleCAtIDEpID49IDApID8gdGhpcy50cmFja3NbdGhpcy5jdXJyZW50SW5kZXggLSAxXSA6IHRoaXMudHJhY2tzW3RoaXMudHJhY2tzLmxlbmd0aCAtIDFdO1xuICAgICAgICB0aGlzLm5leHRUcmFjayA9ICgodGhpcy5jdXJyZW50SW5kZXggKyAxKSA+PSB0aGlzLnRyYWNrcy5sZW5ndGgpID8gdGhpcy50cmFja3NbMF0gOiB0aGlzLnRyYWNrc1t0aGlzLmN1cnJlbnRJbmRleCArIDFdO1xuXG4gICAgICAgIHRoaXMuYXVkaW9QbGF5ZXJTZXJ2aWNlLnNldEN1cnJlbnRUcmFjayh0aGlzLmN1cnJlbnRUcmFjayk7XG4gICAgfVxuXG4gICAgcmVwZWF0U29uZygpOiB2b2lkIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3UganVzdCBjYWxsIHJlcGVhdCB0aGUgc29uZyBmdW5jdGlvbicpXG4gICAgICAgIHRoaXMucmVwZWF0SXQgPSB0cnVlXG4gICAgICAgIHRoaXMuY3VycmVudFRpbWUgPSAwO1xuICAgICAgICB0aGlzLmR1cmF0aW9uID0gMC4wMTtcbiAgICAgICAgdGhpcy5yZXNldFNvbmcoKVxuXG4gICAgICAgIHRoaXMudXBkYXRlQ3VycmVudFNvbmcoKTtcblxuICAgICAgICB0aGlzLnBsYXkodGhpcy5jdXJyZW50VHJhY2spO1xuICAgIH1cblxuICAgIHNldFJlcGF0RmxhZygpIHtcbiAgICAgICAgdGhpcy5yZXBlYXRJdCA9ICF0aGlzLnJlcGVhdEl0XG4gICAgfVxuXG59XG4iXX0=