import { __decorate, __metadata } from "tslib";
import { ViewChild, ElementRef, Output, Input } from '@angular/core';
import { Subject } from 'rxjs';
var BaseAudioPlayerFunctions = /** @class */ (function () {
    function BaseAudioPlayerFunctions() {
        this.trackEnded = new Subject();
        this.iOS = (/iPad|iPhone|iPod/.test(navigator.platform)
            || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1))
            && !window.MSStream;
        this.loaderDisplay = false;
        this.isPlaying = false;
        this.currentTime = 0;
        this.volume = 0.1;
        this.duration = 0.01;
        this.startOffsetValue = 0;
        this.endOffset = 0;
    }
    Object.defineProperty(BaseAudioPlayerFunctions.prototype, "startOffset", {
        get: function () {
            return this.startOffsetValue;
        },
        set: function (seconds) {
            this.startOffsetValue = seconds;
            this.player.nativeElement.currentTime = seconds;
        },
        enumerable: true,
        configurable: true
    });
    BaseAudioPlayerFunctions.prototype.currTimePosChanged = function (event) {
        this.player.nativeElement.currentTime = event.value;
    };
    BaseAudioPlayerFunctions.prototype.bindPlayerEvent = function () {
        var _this = this;
        this.player.nativeElement.addEventListener('playing', function () {
            _this.isPlaying = true;
            _this.duration = Math.floor(_this.player.nativeElement.duration);
        });
        this.player.nativeElement.addEventListener('pause', function () {
            _this.isPlaying = false;
        });
        this.player.nativeElement.addEventListener('timeupdate', function () {
            _this.currentTime = Math.floor(_this.player.nativeElement.currentTime);
            if (_this.currentTime >= _this.duration - _this.endOffset) {
                _this.player.nativeElement.pause();
            }
        });
        this.player.nativeElement.addEventListener('volume', function () {
            _this.volume = Math.floor(_this.player.nativeElement.volume);
        });
        if (!this.iOS) {
            this.player.nativeElement.addEventListener('loadstart', function () {
                _this.loaderDisplay = true;
            });
        }
        this.player.nativeElement.addEventListener('loadeddata', function () {
            _this.loaderDisplay = false;
            _this.duration = Math.floor(_this.player.nativeElement.duration);
        });
        this.player.nativeElement.addEventListener('ended', function () {
            _this.trackEnded.next('ended');
        });
    };
    BaseAudioPlayerFunctions.prototype.playBtnHandler = function () {
        if (this.loaderDisplay) {
            return;
        }
        if (this.player.nativeElement.paused) {
            if (this.currentTime >= this.duration - this.endOffset) {
                this.player.nativeElement.currentTime = this.startOffset;
            }
            else {
                this.player.nativeElement.currentTime = this.currentTime;
            }
            this.player.nativeElement.play();
        }
        else {
            this.currentTime = this.player.nativeElement.currentTime;
            this.player.nativeElement.pause();
        }
    };
    BaseAudioPlayerFunctions.prototype.play = function (track) {
        var _this = this;
        if (track) {
            this.startOffset = track.startOffset || 0;
            this.endOffset = track.endOffset || 0;
        }
        setTimeout(function () {
            _this.player.nativeElement.play();
        }, 50);
    };
    BaseAudioPlayerFunctions.prototype.toggleVolume = function () {
        if (this.volume === 0) {
            this.setVolume(1.0);
        }
        else {
            this.setVolume(0);
        }
    };
    BaseAudioPlayerFunctions.prototype.setVolume = function (vol) {
        this.volume = vol;
        this.player.nativeElement.volume = this.volume;
    };
    __decorate([
        Output(),
        __metadata("design:type", Subject)
    ], BaseAudioPlayerFunctions.prototype, "trackEnded", void 0);
    __decorate([
        ViewChild('audioPlayer', { static: true }),
        __metadata("design:type", ElementRef)
    ], BaseAudioPlayerFunctions.prototype, "player", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], BaseAudioPlayerFunctions.prototype, "startOffset", null);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], BaseAudioPlayerFunctions.prototype, "endOffset", void 0);
    return BaseAudioPlayerFunctions;
}());
export { BaseAudioPlayerFunctions };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1hdWRpby1wbGF5ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWF1ZGlvLXBsYXllci8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnQvYmFzZS9iYXNlLWF1ZGlvLXBsYXllci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHckUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUvQjtJQUFBO1FBR0ksZUFBVSxHQUFvQixJQUFJLE9BQU8sRUFBVSxDQUFDO1FBS3BELFFBQUcsR0FBRyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDO2VBQzNDLENBQUMsU0FBUyxDQUFDLFFBQVEsS0FBSyxVQUFVLElBQUksU0FBUyxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUMsQ0FBQztlQUNwRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7UUFFeEIsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFDdEIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixnQkFBVyxHQUFHLENBQUMsQ0FBQztRQUNoQixXQUFNLEdBQUcsR0FBRyxDQUFDO1FBQ2IsYUFBUSxHQUFHLElBQUksQ0FBQztRQUVSLHFCQUFnQixHQUFHLENBQUMsQ0FBQztRQVd0QixjQUFTLEdBQUcsQ0FBQyxDQUFDO0lBbUZ6QixDQUFDO0lBNUZHLHNCQUFJLGlEQUFXO2FBSWY7WUFDSSxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztRQUNqQyxDQUFDO2FBTkQsVUFBZ0IsT0FBZTtZQUMzQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsT0FBTyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUM7UUFDcEQsQ0FBQzs7O09BQUE7SUFR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YTtJQW1GekIsK0JBQUM7Q0FBQSxBQWhIRCxJQWdIQztTQWhIWSx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIE91dHB1dCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdFNsaWRlciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NsaWRlcic7XG5pbXBvcnQgeyBUcmFjayB9IGZyb20gJy4uLy4uL21vZGVsL3RyYWNrLm1vZGVsJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGNsYXNzIEJhc2VBdWRpb1BsYXllckZ1bmN0aW9ucyB7XG5cbiAgICBAT3V0cHV0KClcbiAgICB0cmFja0VuZGVkOiBTdWJqZWN0PHN0cmluZz4gPSBuZXcgU3ViamVjdDxzdHJpbmc+KCk7XG5cbiAgICBAVmlld0NoaWxkKCdhdWRpb1BsYXllcicsIHsgc3RhdGljOiB0cnVlIH0pIHBsYXllcjogRWxlbWVudFJlZjtcbiAgICB0aW1lTGluZUR1cmF0aW9uOiBNYXRTbGlkZXI7XG5cbiAgICBpT1MgPSAoL2lQYWR8aVBob25lfGlQb2QvLnRlc3QobmF2aWdhdG9yLnBsYXRmb3JtKVxuICAgICAgICB8fCAobmF2aWdhdG9yLnBsYXRmb3JtID09PSAnTWFjSW50ZWwnICYmIG5hdmlnYXRvci5tYXhUb3VjaFBvaW50cyA+IDEpKVxuICAgICAgICAmJiAhd2luZG93Lk1TU3RyZWFtO1xuXG4gICAgbG9hZGVyRGlzcGxheSA9IGZhbHNlO1xuICAgIGlzUGxheWluZyA9IGZhbHNlO1xuICAgIGN1cnJlbnRUaW1lID0gMDtcbiAgICB2b2x1bWUgPSAwLjE7XG4gICAgZHVyYXRpb24gPSAwLjAxO1xuXG4gICAgcHJpdmF0ZSBzdGFydE9mZnNldFZhbHVlID0gMDtcbiAgICBASW5wdXQoKVxuICAgIHNldCBzdGFydE9mZnNldChzZWNvbmRzOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5zdGFydE9mZnNldFZhbHVlID0gc2Vjb25kcztcbiAgICAgICAgdGhpcy5wbGF5ZXIubmF0aXZlRWxlbWVudC5jdXJyZW50VGltZSA9IHNlY29uZHM7XG4gICAgfVxuICAgIGdldCBzdGFydE9mZnNldCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydE9mZnNldFZhbHVlO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGVuZE9mZnNldCA9IDA7XG5cbiAgICBjdXJyVGltZVBvc0NoYW5nZWQoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXIubmF0aXZlRWxlbWVudC5jdXJyZW50VGltZSA9IGV2ZW50LnZhbHVlO1xuICAgIH1cblxuICAgIGJpbmRQbGF5ZXJFdmVudCgpOiB2b2lkIHtcblxuICAgICAgICB0aGlzLnBsYXllci5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3BsYXlpbmcnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlzUGxheWluZyA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmR1cmF0aW9uID0gTWF0aC5mbG9vcih0aGlzLnBsYXllci5uYXRpdmVFbGVtZW50LmR1cmF0aW9uKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucGxheWVyLm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncGF1c2UnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlzUGxheWluZyA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5wbGF5ZXIubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0aW1ldXBkYXRlJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50VGltZSA9IE1hdGguZmxvb3IodGhpcy5wbGF5ZXIubmF0aXZlRWxlbWVudC5jdXJyZW50VGltZSk7XG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50VGltZSA+PSB0aGlzLmR1cmF0aW9uIC0gdGhpcy5lbmRPZmZzZXQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5uYXRpdmVFbGVtZW50LnBhdXNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnBsYXllci5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3ZvbHVtZScsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudm9sdW1lID0gTWF0aC5mbG9vcih0aGlzLnBsYXllci5uYXRpdmVFbGVtZW50LnZvbHVtZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoIXRoaXMuaU9TKSB7XG4gICAgICAgICAgICB0aGlzLnBsYXllci5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWRzdGFydCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRlckRpc3BsYXkgPSB0cnVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wbGF5ZXIubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdsb2FkZWRkYXRhJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5sb2FkZXJEaXNwbGF5ID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmR1cmF0aW9uID0gTWF0aC5mbG9vcih0aGlzLnBsYXllci5uYXRpdmVFbGVtZW50LmR1cmF0aW9uKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucGxheWVyLm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZW5kZWQnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnRyYWNrRW5kZWQubmV4dCgnZW5kZWQnKTtcbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBwbGF5QnRuSGFuZGxlcigpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubG9hZGVyRGlzcGxheSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnBsYXllci5uYXRpdmVFbGVtZW50LnBhdXNlZCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFRpbWUgPj0gdGhpcy5kdXJhdGlvbiAtIHRoaXMuZW5kT2Zmc2V0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIubmF0aXZlRWxlbWVudC5jdXJyZW50VGltZSA9IHRoaXMuc3RhcnRPZmZzZXQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLm5hdGl2ZUVsZW1lbnQuY3VycmVudFRpbWUgPSB0aGlzLmN1cnJlbnRUaW1lO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnBsYXllci5uYXRpdmVFbGVtZW50LnBsYXkoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFRpbWUgPSB0aGlzLnBsYXllci5uYXRpdmVFbGVtZW50LmN1cnJlbnRUaW1lO1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXIubmF0aXZlRWxlbWVudC5wYXVzZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcGxheSh0cmFjaz86IFRyYWNrKTogdm9pZCB7XG5cbiAgICAgICAgaWYgKHRyYWNrKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0T2Zmc2V0ID0gdHJhY2suc3RhcnRPZmZzZXQgfHwgMDtcbiAgICAgICAgICAgIHRoaXMuZW5kT2Zmc2V0ID0gdHJhY2suZW5kT2Zmc2V0IHx8IDA7XG4gICAgICAgIH1cblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGxheWVyLm5hdGl2ZUVsZW1lbnQucGxheSgpO1xuICAgICAgICB9LCA1MCk7XG5cbiAgICB9XG5cbiAgICB0b2dnbGVWb2x1bWUoKSB7XG4gICAgICAgIGlmICh0aGlzLnZvbHVtZSA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5zZXRWb2x1bWUoMS4wKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0Vm9sdW1lKDApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRWb2x1bWUodm9sKSB7XG4gICAgICAgIHRoaXMudm9sdW1lID0gdm9sO1xuICAgICAgICB0aGlzLnBsYXllci5uYXRpdmVFbGVtZW50LnZvbHVtZSA9IHRoaXMudm9sdW1lO1xuICAgIH1cblxufVxuIl19