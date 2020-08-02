import { ElementRef } from '@angular/core';
import { MatSlider } from '@angular/material/slider';
import { Track } from '../../model/track.model';
import { Subject } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<BaseAudioPlayerFunctions, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<BaseAudioPlayerFunctions, never, never, { "endOffset": "endOffset"; "startOffset": "startOffset"; }, { "trackEnded": "trackEnded"; }, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1hdWRpby1wbGF5ZXIuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbImJhc2UtYXVkaW8tcGxheWVyLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0U2xpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2xpZGVyJztcbmltcG9ydCB7IFRyYWNrIH0gZnJvbSAnLi4vLi4vbW9kZWwvdHJhY2subW9kZWwnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQmFzZUF1ZGlvUGxheWVyRnVuY3Rpb25zIHtcbiAgICB0cmFja0VuZGVkOiBTdWJqZWN0PHN0cmluZz47XG4gICAgcGxheWVyOiBFbGVtZW50UmVmO1xuICAgIHRpbWVMaW5lRHVyYXRpb246IE1hdFNsaWRlcjtcbiAgICBpT1M6IGJvb2xlYW47XG4gICAgbG9hZGVyRGlzcGxheTogYm9vbGVhbjtcbiAgICBpc1BsYXlpbmc6IGJvb2xlYW47XG4gICAgY3VycmVudFRpbWU6IG51bWJlcjtcbiAgICB2b2x1bWU6IG51bWJlcjtcbiAgICBkdXJhdGlvbjogbnVtYmVyO1xuICAgIHByaXZhdGUgc3RhcnRPZmZzZXRWYWx1ZTtcbiAgICBzZXQgc3RhcnRPZmZzZXQoc2Vjb25kczogbnVtYmVyKTtcbiAgICBnZXQgc3RhcnRPZmZzZXQoKTogbnVtYmVyO1xuICAgIGVuZE9mZnNldDogbnVtYmVyO1xuICAgIGN1cnJUaW1lUG9zQ2hhbmdlZChldmVudDogYW55KTogdm9pZDtcbiAgICBiaW5kUGxheWVyRXZlbnQoKTogdm9pZDtcbiAgICBwbGF5QnRuSGFuZGxlcigpOiB2b2lkO1xuICAgIHBsYXkodHJhY2s/OiBUcmFjayk6IHZvaWQ7XG4gICAgdG9nZ2xlVm9sdW1lKCk6IHZvaWQ7XG4gICAgcHJpdmF0ZSBzZXRWb2x1bWU7XG59XG4iXX0=