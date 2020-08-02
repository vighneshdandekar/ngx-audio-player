import { OnInit } from '@angular/core';
import { Track } from '../../model/track.model';
import { BaseAudioPlayerFunctions } from '../base/base-audio-player.component';
import { MatSlider } from '@angular/material/slider';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { AudioPlayerService } from '../../service/audio-player-service/audio-player.service';
import * as ɵngcc0 from '@angular/core';
export declare class MatAdvancedAudioPlayerComponent extends BaseAudioPlayerFunctions implements OnInit {
    audioPlayerService: AudioPlayerService;
    constructor();
    set playlist(playlist: Track[]);
    set matPaginator(mp: MatPaginator);
    displayedColumns: string[];
    dataSource: MatTableDataSource<Track>;
    paginator: MatPaginator;
    timeLineDuration: MatSlider;
    tracks: Track[];
    displayTitle: boolean;
    displayPlaylist: boolean;
    displayVolumeControls: boolean;
    pageSizeOptions: number[];
    expanded: boolean;
    autoPlay: boolean;
    private currentIndex;
    currentTrack: Track;
    private previousTrack;
    private nextTrack;
    private repeatIt;
    ngOnInit(): void;
    initialize(): void;
    setDataSourceAttributes(): void;
    nextSong(): void;
    previousSong(): void;
    resetSong(): void;
    selectTrack(index: number): void;
    checkIfSongHasStartedSinceAtleastTwoSeconds(): boolean;
    updateCurrentSong(): void;
    repeatSong(): void;
    setRepatFlag(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MatAdvancedAudioPlayerComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<MatAdvancedAudioPlayerComponent, "mat-advanced-audio-player", never, { "playlist": "playlist"; "displayTitle": "displayTitle"; "displayPlaylist": "displayPlaylist"; "displayVolumeControls": "displayVolumeControls"; "pageSizeOptions": "pageSizeOptions"; "expanded": "expanded"; "autoPlay": "autoPlay"; }, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LWFkdmFuY2VkLWF1ZGlvLXBsYXllci5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsibWF0LWFkdmFuY2VkLWF1ZGlvLXBsYXllci5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVHJhY2sgfSBmcm9tICcuLi8uLi9tb2RlbC90cmFjay5tb2RlbCc7XG5pbXBvcnQgeyBCYXNlQXVkaW9QbGF5ZXJGdW5jdGlvbnMgfSBmcm9tICcuLi9iYXNlL2Jhc2UtYXVkaW8tcGxheWVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNYXRTbGlkZXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zbGlkZXInO1xuaW1wb3J0IHsgTWF0VGFibGVEYXRhU291cmNlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdGFibGUnO1xuaW1wb3J0IHsgTWF0UGFnaW5hdG9yIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcGFnaW5hdG9yJztcbmltcG9ydCB7IEF1ZGlvUGxheWVyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2UvYXVkaW8tcGxheWVyLXNlcnZpY2UvYXVkaW8tcGxheWVyLnNlcnZpY2UnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTWF0QWR2YW5jZWRBdWRpb1BsYXllckNvbXBvbmVudCBleHRlbmRzIEJhc2VBdWRpb1BsYXllckZ1bmN0aW9ucyBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgYXVkaW9QbGF5ZXJTZXJ2aWNlOiBBdWRpb1BsYXllclNlcnZpY2U7XG4gICAgY29uc3RydWN0b3IoKTtcbiAgICBzZXQgcGxheWxpc3QocGxheWxpc3Q6IFRyYWNrW10pO1xuICAgIHNldCBtYXRQYWdpbmF0b3IobXA6IE1hdFBhZ2luYXRvcik7XG4gICAgZGlzcGxheWVkQ29sdW1uczogc3RyaW5nW107XG4gICAgZGF0YVNvdXJjZTogTWF0VGFibGVEYXRhU291cmNlPFRyYWNrPjtcbiAgICBwYWdpbmF0b3I6IE1hdFBhZ2luYXRvcjtcbiAgICB0aW1lTGluZUR1cmF0aW9uOiBNYXRTbGlkZXI7XG4gICAgdHJhY2tzOiBUcmFja1tdO1xuICAgIGRpc3BsYXlUaXRsZTogYm9vbGVhbjtcbiAgICBkaXNwbGF5UGxheWxpc3Q6IGJvb2xlYW47XG4gICAgZGlzcGxheVZvbHVtZUNvbnRyb2xzOiBib29sZWFuO1xuICAgIHBhZ2VTaXplT3B0aW9uczogbnVtYmVyW107XG4gICAgZXhwYW5kZWQ6IGJvb2xlYW47XG4gICAgYXV0b1BsYXk6IGJvb2xlYW47XG4gICAgcHJpdmF0ZSBjdXJyZW50SW5kZXg7XG4gICAgY3VycmVudFRyYWNrOiBUcmFjaztcbiAgICBwcml2YXRlIHByZXZpb3VzVHJhY2s7XG4gICAgcHJpdmF0ZSBuZXh0VHJhY2s7XG4gICAgcHJpdmF0ZSByZXBlYXRJdDtcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xuICAgIGluaXRpYWxpemUoKTogdm9pZDtcbiAgICBzZXREYXRhU291cmNlQXR0cmlidXRlcygpOiB2b2lkO1xuICAgIG5leHRTb25nKCk6IHZvaWQ7XG4gICAgcHJldmlvdXNTb25nKCk6IHZvaWQ7XG4gICAgcmVzZXRTb25nKCk6IHZvaWQ7XG4gICAgc2VsZWN0VHJhY2soaW5kZXg6IG51bWJlcik6IHZvaWQ7XG4gICAgY2hlY2tJZlNvbmdIYXNTdGFydGVkU2luY2VBdGxlYXN0VHdvU2Vjb25kcygpOiBib29sZWFuO1xuICAgIHVwZGF0ZUN1cnJlbnRTb25nKCk6IHZvaWQ7XG4gICAgcmVwZWF0U29uZygpOiB2b2lkO1xuICAgIHNldFJlcGF0RmxhZygpOiB2b2lkO1xufVxuIl19