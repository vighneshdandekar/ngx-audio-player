import { ElementRef } from '@angular/core';
import { MatSlider } from '@angular/material/slider';
import { Track } from '../../model/track.model';
import { Subject } from 'rxjs';
export declare class BaseAudioPlayerFunctions {
    trackEnded: Subject<string>;
    player: ElementRef;
    timeLineDuration: MatSlider;
    iOS: boolean;
    loaderDisplay: boolean;
    isPlaying: boolean;
    currentTime: number;
    volume: number;
    duration: number;
    private startOffsetValue;
    set startOffset(seconds: number);
    get startOffset(): number;
    endOffset: number;
    currTimePosChanged(event: any): void;
    bindPlayerEvent(): void;
    playBtnHandler(): void;
    play(track?: Track): void;
    toggleVolume(): void;
    private setVolume;
}
