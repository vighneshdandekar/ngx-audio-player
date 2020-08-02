import { OnInit } from '@angular/core';
import { BaseAudioPlayerFunctions } from '../base/base-audio-player.component';
import { AudioPlayerService } from '../../service/audio-player-service/audio-player.service';
import * as ɵngcc0 from '@angular/core';
export declare class MatBasicAudioPlayerComponent extends BaseAudioPlayerFunctions implements OnInit {
    title: string;
    audioUrl: string;
    displayTitle: boolean;
    autoPlay: boolean;
    displayVolumeControls: boolean;
    audioPlayerService: AudioPlayerService;
    constructor();
    ngOnInit(): void;
    resetSong(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MatBasicAudioPlayerComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<MatBasicAudioPlayerComponent, "mat-basic-audio-player", never, { "title": "title"; "audioUrl": "audioUrl"; "displayTitle": "displayTitle"; "autoPlay": "autoPlay"; "displayVolumeControls": "displayVolumeControls"; }, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LWJhc2ljLWF1ZGlvLXBsYXllci5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsibWF0LWJhc2ljLWF1ZGlvLXBsYXllci5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCYXNlQXVkaW9QbGF5ZXJGdW5jdGlvbnMgfSBmcm9tICcuLi9iYXNlL2Jhc2UtYXVkaW8tcGxheWVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBdWRpb1BsYXllclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlL2F1ZGlvLXBsYXllci1zZXJ2aWNlL2F1ZGlvLXBsYXllci5zZXJ2aWNlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE1hdEJhc2ljQXVkaW9QbGF5ZXJDb21wb25lbnQgZXh0ZW5kcyBCYXNlQXVkaW9QbGF5ZXJGdW5jdGlvbnMgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgYXVkaW9Vcmw6IHN0cmluZztcbiAgICBkaXNwbGF5VGl0bGU6IGJvb2xlYW47XG4gICAgYXV0b1BsYXk6IGJvb2xlYW47XG4gICAgZGlzcGxheVZvbHVtZUNvbnRyb2xzOiBib29sZWFuO1xuICAgIGF1ZGlvUGxheWVyU2VydmljZTogQXVkaW9QbGF5ZXJTZXJ2aWNlO1xuICAgIGNvbnN0cnVjdG9yKCk7XG4gICAgbmdPbkluaXQoKTogdm9pZDtcbiAgICByZXNldFNvbmcoKTogdm9pZDtcbn1cbiJdfQ==