(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('@angular/material/table'), require('@angular/material/paginator'), require('@angular/material/slider'), require('@angular/material/form-field'), require('@angular/material/expansion'), require('@angular/material/card'), require('@angular/material/button'), require('@angular/common'), require('@angular/forms'), require('@angular/material/icon')) :
    typeof define === 'function' && define.amd ? define('ngx-audio-player', ['exports', '@angular/core', 'rxjs', '@angular/material/table', '@angular/material/paginator', '@angular/material/slider', '@angular/material/form-field', '@angular/material/expansion', '@angular/material/card', '@angular/material/button', '@angular/common', '@angular/forms', '@angular/material/icon'], factory) :
    (global = global || self, factory(global['ngx-audio-player'] = {}, global.ng.core, global.rxjs, global.ng.material.table, global.ng.material.paginator, global.ng.material.slider, global.ng.material.formField, global.ng.material.expansion, global.ng.material.card, global.ng.material.button, global.ng.common, global.ng.forms, global.ng.material.icon));
}(this, (function (exports, core, rxjs, table, paginator, slider, formField, expansion, card, button, common, forms, icon) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    const __createBinding = Object.create ? (function(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
    }) : (function(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
    });

    function __exportStar(m, exports) {
        for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    const __setModuleDefault = Object.create ? (function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
        o["default"] = v;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    var BaseAudioPlayerFunctions = /** @class */ (function () {
        function BaseAudioPlayerFunctions() {
            this.trackEnded = new rxjs.Subject();
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
            core.Output(),
            __metadata("design:type", rxjs.Subject)
        ], BaseAudioPlayerFunctions.prototype, "trackEnded", void 0);
        __decorate([
            core.ViewChild('audioPlayer', { static: true }),
            __metadata("design:type", core.ElementRef)
        ], BaseAudioPlayerFunctions.prototype, "player", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Number),
            __metadata("design:paramtypes", [Number])
        ], BaseAudioPlayerFunctions.prototype, "startOffset", null);
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], BaseAudioPlayerFunctions.prototype, "endOffset", void 0);
        return BaseAudioPlayerFunctions;
    }());

    var AudioPlayerService = /** @class */ (function () {
        function AudioPlayerService() {
            // Dynamic update of playlist
            this.tracks = [];
            this.playlistSubject$ = new rxjs.BehaviorSubject(this.tracks);
            this.currentTrackSubject$ = new rxjs.BehaviorSubject(this.currentTrack);
            this.currentTimeSubject$ = new rxjs.BehaviorSubject(this.currentTime);
        }
        AudioPlayerService.prototype.setPlaylist = function (tracks) {
            this.tracks = tracks;
            this.playlistSubject$.next(this.tracks);
        };
        AudioPlayerService.prototype.getPlaylist = function () {
            return this.playlistSubject$.asObservable();
        };
        AudioPlayerService.prototype.setCurrentTrack = function (currentTrack) {
            this.currentTrack = currentTrack;
            this.currentTrackSubject$.next(this.currentTrack);
        };
        AudioPlayerService.prototype.getCurrentTrack = function () {
            return this.currentTrackSubject$.asObservable();
        };
        AudioPlayerService.prototype.setCurrentTime = function (currentTime) {
            this.currentTime = currentTime;
            this.currentTimeSubject$.next(this.currentTime);
        };
        AudioPlayerService.prototype.getCurrentTime = function () {
            return this.currentTimeSubject$.asObservable();
        };
        AudioPlayerService.ɵprov = core.ɵɵdefineInjectable({ factory: function AudioPlayerService_Factory() { return new AudioPlayerService(); }, token: AudioPlayerService, providedIn: "root" });
        AudioPlayerService = __decorate([
            core.Injectable({
                providedIn: 'root',
            })
        ], AudioPlayerService);
        return AudioPlayerService;
    }());

    var MatAdvancedAudioPlayerComponent = /** @class */ (function (_super) {
        __extends(MatAdvancedAudioPlayerComponent, _super);
        function MatAdvancedAudioPlayerComponent() {
            var _this = _super.call(this) || this;
            _this.displayedColumns = ['title', 'status'];
            _this.dataSource = new table.MatTableDataSource();
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
                this.dataSource = new table.MatTableDataSource(this.tracks);
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
            core.Input(),
            __metadata("design:type", Array),
            __metadata("design:paramtypes", [Array])
        ], MatAdvancedAudioPlayerComponent.prototype, "playlist", null);
        __decorate([
            core.ViewChild(paginator.MatPaginator, { static: false }),
            __metadata("design:type", paginator.MatPaginator),
            __metadata("design:paramtypes", [paginator.MatPaginator])
        ], MatAdvancedAudioPlayerComponent.prototype, "matPaginator", null);
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], MatAdvancedAudioPlayerComponent.prototype, "displayTitle", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], MatAdvancedAudioPlayerComponent.prototype, "displayPlaylist", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], MatAdvancedAudioPlayerComponent.prototype, "displayVolumeControls", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], MatAdvancedAudioPlayerComponent.prototype, "pageSizeOptions", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], MatAdvancedAudioPlayerComponent.prototype, "expanded", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], MatAdvancedAudioPlayerComponent.prototype, "autoPlay", void 0);
        MatAdvancedAudioPlayerComponent = __decorate([
            core.Component({
                selector: 'mat-advanced-audio-player',
                template: "<mat-card class=\"d-flex justify-content-center ngx-advanced-audio-player z-depth-1 mat-elevation-z2\"\n    style=\"margin: 0px;\">\n\n    <audio #audioPlayer [src]=\"currentTrack?.link\"></audio>\n\n    <button (click)='setRepatFlag()' [disabled]=\"loaderDisplay\" class=\"p-1\" mat-button>\n        <mat-icon aria-hidden=\"true\">\n            <!-- repeat song -->\n            <!-- <svg height=\"32\" viewBox=\"0 0 24 24\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path d=\"M6 6h2v12H6zm3.5 6l8.5 6V6z\" />\n                <path d=\"M0 0h32v32H0z\" fill=\"none\" />\n            </svg> -->\n            autorenew\n        </mat-icon>\n    </button>\n\n    <button (click)='previousSong();' [disabled]=\"loaderDisplay\" class=\"p-1\" mat-button>\n        <mat-icon aria-hidden=\"true\">\n            <!-- Skip previous icon (skip_previous) -->\n            <svg height=\"32\" viewBox=\"0 0 24 24\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path d=\"M6 6h2v12H6zm3.5 6l8.5 6V6z\" />\n                <path d=\"M0 0h32v32H0z\" fill=\"none\" />\n            </svg>\n        </mat-icon>\n    </button>\n    <button (click)='playBtnHandler();' [disabled]=\"loaderDisplay\" class=\"p-1 play-pause\" mat-button>\n\n        <svg *ngIf=\"loaderDisplay\" height=\"34px\" preserveAspectRatio=\"xMidYMid\"\n            style=\"margin: auto; display: block; shape-rendering: auto;\" viewBox=\"0 0 100 100\" width=\"34px\"\n            xmlns=\"http://www.w3.org/2000/svg\">\n            <g transform=\"rotate(0 50 50)\">\n                <rect fill=\"#7a7a7a\" height=\"12\" rx=\"3\" ry=\"6\" width=\"6\" x=\"47\" y=\"20\">\n                    <animate attributeName=\"opacity\" begin=\"-0.9166666666666666s\" dur=\"1s\" keyTimes=\"0;1\"\n                        repeatCount=\"indefinite\" values=\"1;0\" />\n                </rect>\n            </g>\n            <g transform=\"rotate(30 50 50)\">\n                <rect fill=\"#7a7a7a\" height=\"12\" rx=\"3\" ry=\"6\" width=\"6\" x=\"47\" y=\"20\">\n                    <animate attributeName=\"opacity\" begin=\"-0.8333333333333334s\" dur=\"1s\" keyTimes=\"0;1\"\n                        repeatCount=\"indefinite\" values=\"1;0\" />\n                </rect>\n            </g>\n            <g transform=\"rotate(60 50 50)\">\n                <rect fill=\"#7a7a7a\" height=\"12\" rx=\"3\" ry=\"6\" width=\"6\" x=\"47\" y=\"20\">\n                    <animate attributeName=\"opacity\" begin=\"-0.75s\" dur=\"1s\" keyTimes=\"0;1\" repeatCount=\"indefinite\"\n                        values=\"1;0\" />\n                </rect>\n            </g>\n            <g transform=\"rotate(90 50 50)\">\n                <rect fill=\"#7a7a7a\" height=\"12\" rx=\"3\" ry=\"6\" width=\"6\" x=\"47\" y=\"20\">\n                    <animate attributeName=\"opacity\" begin=\"-0.6666666666666666s\" dur=\"1s\" keyTimes=\"0;1\"\n                        repeatCount=\"indefinite\" values=\"1;0\" />\n                </rect>\n            </g>\n            <g transform=\"rotate(120 50 50)\">\n                <rect fill=\"#7a7a7a\" height=\"12\" rx=\"3\" ry=\"6\" width=\"6\" x=\"47\" y=\"20\">\n                    <animate attributeName=\"opacity\" begin=\"-0.5833333333333334s\" dur=\"1s\" keyTimes=\"0;1\"\n                        repeatCount=\"indefinite\" values=\"1;0\" />\n                </rect>\n            </g>\n            <g transform=\"rotate(150 50 50)\">\n                <rect fill=\"#7a7a7a\" height=\"12\" rx=\"3\" ry=\"6\" width=\"6\" x=\"47\" y=\"20\">\n                    <animate attributeName=\"opacity\" begin=\"-0.5s\" dur=\"1s\" keyTimes=\"0;1\" repeatCount=\"indefinite\"\n                        values=\"1;0\" />\n                </rect>\n            </g>\n            <g transform=\"rotate(180 50 50)\">\n                <rect fill=\"#7a7a7a\" height=\"12\" rx=\"3\" ry=\"6\" width=\"6\" x=\"47\" y=\"20\">\n                    <animate attributeName=\"opacity\" begin=\"-0.4166666666666667s\" dur=\"1s\" keyTimes=\"0;1\"\n                        repeatCount=\"indefinite\" values=\"1;0\" />\n                </rect>\n            </g>\n            <g transform=\"rotate(210 50 50)\">\n                <rect fill=\"#7a7a7a\" height=\"12\" rx=\"3\" ry=\"6\" width=\"6\" x=\"47\" y=\"20\">\n                    <animate attributeName=\"opacity\" begin=\"-0.3333333333333333s\" dur=\"1s\" keyTimes=\"0;1\"\n                        repeatCount=\"indefinite\" values=\"1;0\" />\n                </rect>\n            </g>\n            <g transform=\"rotate(240 50 50)\">\n                <rect fill=\"#7a7a7a\" height=\"12\" rx=\"3\" ry=\"6\" width=\"6\" x=\"47\" y=\"20\">\n                    <animate attributeName=\"opacity\" begin=\"-0.25s\" dur=\"1s\" keyTimes=\"0;1\" repeatCount=\"indefinite\"\n                        values=\"1;0\" />\n                </rect>\n            </g>\n            <g transform=\"rotate(270 50 50)\">\n                <rect fill=\"#7a7a7a\" height=\"12\" rx=\"3\" ry=\"6\" width=\"6\" x=\"47\" y=\"20\">\n                    <animate attributeName=\"opacity\" begin=\"-0.16666666666666666s\" dur=\"1s\" keyTimes=\"0;1\"\n                        repeatCount=\"indefinite\" values=\"1;0\" />\n                </rect>\n            </g>\n            <g transform=\"rotate(300 50 50)\">\n                <rect fill=\"#7a7a7a\" height=\"12\" rx=\"3\" ry=\"6\" width=\"6\" x=\"47\" y=\"20\">\n                    <animate attributeName=\"opacity\" begin=\"-0.08333333333333333s\" dur=\"1s\" keyTimes=\"0;1\"\n                        repeatCount=\"indefinite\" values=\"1;0\" />\n                </rect>\n            </g>\n            <g transform=\"rotate(330 50 50)\">\n                <rect fill=\"#7a7a7a\" height=\"12\" rx=\"3\" ry=\"6\" width=\"6\" x=\"47\" y=\"20\">\n                    <animate attributeName=\"opacity\" begin=\"0s\" dur=\"1s\" keyTimes=\"0;1\" repeatCount=\"indefinite\"\n                        values=\"1;0\" />\n                </rect>\n            </g>\n        </svg>\n\n        <mat-icon *ngIf=\"!loaderDisplay && !isPlaying\" aria-hidden=\"true\" class=\"play-track\">\n            <!-- Play icon (play_arrow) -->\n            <svg height=\"32\" viewBox=\"0 0 24 24\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path d=\"M8 5v14l11-7z\" />\n                <path d=\"M0 0h24v24H0z\" fill=\"none\" />\n            </svg>\n        </mat-icon>\n        <mat-icon *ngIf=\"!loaderDisplay && isPlaying\" aria-hidden=\"true\" class=\"pause-track\">\n            <!-- Pause icon (pause) -->\n            <svg height=\"32\" viewBox=\"0 0 24 24\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path d=\"M6 19h4V5H6v14zm8-14v14h4V5h-4z\" />\n                <path d=\"M0 0h24v24H0z\" fill=\"none\" />\n            </svg>\n        </mat-icon>\n    </button>\n    <button (click)='nextSong();' [disabled]=\"loaderDisplay\" class=\"p-1 skip-next\" mat-button>\n        <mat-icon aria-hidden=\"true\" class=\"next-track\">\n            <!-- Skip next icon (skip_next) -->\n            <svg height=\"32\" viewBox=\"0 0 24 24\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path d=\"M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z\" />\n                <path d=\"M0 0h24v24H0z\" fill=\"none\" />\n            </svg>\n        </mat-icon>\n    </button>\n\n    <div class=\"col\">\n        <div class=\"d-flex flex-fill justify-content-center\">\n            <div class=\"d-none d-sm-block py-3 px-1\" style=\"font-size: 12px\">\n                <span *ngIf=\"duration !== 0.01\">\n                    {{currentTime-startOffset | secondsToMinutes}}\n                </span>\n            </div>\n            <mat-slider (change)=\"currTimePosChanged($event)\" [min]=\"startOffset\"\n                class=\"d-none d-sm-block flex-fill p-1\" max=\"{{duration-endOffset}}\" style=\"width: 100%\"\n                value=\"{{currentTime}}\"></mat-slider>\n\n            <div class=\"py-3 px-1\" style=\"font-size: 12px; text-align: right\">\n                <span *ngIf=\"duration !== 0.01\">\n                    -{{duration-endOffset-currentTime | secondsToMinutes }}\n                </span>\n            </div>\n        </div>\n    </div>\n    <button (click)='toggleVolume();' *ngIf=\"displayVolumeControls\" class=\"p-1 volume\" mat-button>\n        <mat-icon *ngIf=\"volume === 0\" aria-hidden=\"true\" class=\"volume-mute\">\n            <!-- Volume mute icon (volume_off) -->\n            <svg height=\"28\" viewBox=\"0 0 24 24\" width=\"28\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path\n                    d=\"M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z\" />\n                <path d=\"M0 0h24v24H0z\" fill=\"none\" />\n            </svg>\n        </mat-icon>\n        <mat-icon *ngIf=\"volume > 0\" aria-hidden=\"true\" class=\"volume-up\">\n            <!-- Volume up icon (volume_up) -->\n            <svg height=\"28\" viewBox=\"0 0 24 24\" width=\"28\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path\n                    d=\"M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z\" />\n                <path d=\"M0 0h24v24H0z\" fill=\"none\" />\n            </svg>\n        </mat-icon>\n    </button>\n</mat-card>\n\n<mat-card *ngIf=\"displayTitle\" class=\"mat-elevation-z1\">\n    <div style=\"text-align: center;\">\n        <div style=\"margin: 1px 2px; padding: 1em\">\n            <span *ngIf=\"!isPlaying\">{{ currentTrack?.title }}</span>\n            <marquee *ngIf=\"isPlaying\" behavior=\"scroll\" direction=\"left\">{{ currentTrack?.title\n                }}\n            </marquee>\n        </div>\n        <div class=\"clear\"></div>\n    </div>\n</mat-card>\n\n<mat-accordion *ngIf=\"displayPlaylist\">\n    <mat-expansion-panel [expanded]=\"expanded\">\n        <mat-expansion-panel-header>\n            Play List\n        </mat-expansion-panel-header>\n        <table [dataSource]=\"dataSource\" class=\"mat-elevation-z6\" mat-table>\n            <ng-container matColumnDef=\"title\">\n                <th *matHeaderCellDef mat-header-cell> Title</th>\n                <td (click)=\"selectTrack(element.index)\" *matCellDef=\"let element\" mat-cell>\n                    {{element.title}}\n                </td>\n            </ng-container>\n            <ng-container matColumnDef=\"status\">\n                <th *matHeaderCellDef mat-header-cell></th>\n                <td *matCellDef=\"let element\" mat-cell>\n                    <div *ngIf=\"currentTrack?.title === element.title\">\n                        <!-- <mat-icon *ngIf=\"isPlaying\" aria-hidden=\"true\">\n                          <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M6 19h4V5H6v14zm8-14v14h4V5h-4z\"/><path d=\"M0 0h24v24H0z\" fill=\"none\"/></svg>\n                        </mat-icon> -->\n                        <mat-icon *ngIf=\"isPlaying\" aria-hidden=\"true\" class=\"currently-playing\">\n                            <!-- Play icon (play_arrow) -->\n                            <svg height=\"24\" viewBox=\"0 0 24 24\" width=\"24\" xmlns=\"http://www.w3.org/2000/svg\">\n                                <path d=\"M0 0h24v24H0z\" fill=\"none\" />\n                                <path\n                                    d=\"M12 3v9.28c-.47-.17-.97-.28-1.5-.28C8.01 12 6 14.01 6 16.5S8.01 21 10.5 21c2.31 0 4.2-1.75 4.45-4H15V6h4V3h-7z\" />\n                            </svg>\n                        </mat-icon>\n                    </div>\n                </td>\n            </ng-container>\n            <tr *matHeaderRowDef=\"displayedColumns\" mat-header-row></tr>\n            <tr *matRowDef=\"let row; columns: displayedColumns;\" class=\"mat-select-content\" mat-row></tr>\n        </table>\n        <mat-paginator [pageSizeOptions]=\"pageSizeOptions\" showFirstLastButtons></mat-paginator>\n    </mat-expansion-panel>\n</mat-accordion>",
                styles: ["table{width:100%}.ngx-advanced-audio-player{min-width:325px}mat-slider{max-height:30px}.material-icons{font-size:16px!important}mat-icon>.currently-playing{height:16px!important;width:16px!important}.play-pause{border-left:2px solid rgba(0,0,0,.1);border-right:2px solid rgba(0,0,0,.1)}.volume{border-left:2px solid rgba(0,0,0,.1)}.skip-next{border-right:2px solid rgba(0,0,0,.1)}", "@import url(https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.4.1/css/bootstrap-grid.min.css);mat-card,mat-slider{padding:0!important}button:focus,button:hover{outline:0!important}svg{vertical-align:top}.mat-icon{height:32px!important;width:32px!important}mat-card{background:rgba(0,0,0,.02)}mat-icon>.currently-playing{height:16px!important;width:16px!important}"]
            }),
            __metadata("design:paramtypes", [])
        ], MatAdvancedAudioPlayerComponent);
        return MatAdvancedAudioPlayerComponent;
    }(BaseAudioPlayerFunctions));

    var MatBasicAudioPlayerComponent = /** @class */ (function (_super) {
        __extends(MatBasicAudioPlayerComponent, _super);
        function MatBasicAudioPlayerComponent() {
            var _this = _super.call(this) || this;
            _this.displayTitle = false;
            _this.autoPlay = false;
            _this.displayVolumeControls = true;
            _this.audioPlayerService = new AudioPlayerService();
            return _this;
        }
        MatBasicAudioPlayerComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.bindPlayerEvent();
            this.player.nativeElement.addEventListener('timeupdate', function () {
                _this.audioPlayerService.setCurrentTime(_this.player.nativeElement.currentTime);
            });
            if (this.autoPlay) {
                _super.prototype.play.call(this);
            }
        };
        MatBasicAudioPlayerComponent.prototype.resetSong = function () {
            this.player.nativeElement.src = this.audioUrl;
        };
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], MatBasicAudioPlayerComponent.prototype, "title", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], MatBasicAudioPlayerComponent.prototype, "audioUrl", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], MatBasicAudioPlayerComponent.prototype, "displayTitle", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], MatBasicAudioPlayerComponent.prototype, "autoPlay", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], MatBasicAudioPlayerComponent.prototype, "displayVolumeControls", void 0);
        MatBasicAudioPlayerComponent = __decorate([
            core.Component({
                selector: 'mat-basic-audio-player',
                template: "<mat-card class=\"d-flex ngx-basic-audio-player z-depth-1 mat-elevation-z1\">\n    <audio #audioPlayer [src]=\"audioUrl\"></audio>\n    <button (click)='playBtnHandler();' [disabled]=\"loaderDisplay\" class=\"ngx-basic-audio-player-button\" mat-button>\n\n        <svg *ngIf=\"loaderDisplay\" height=\"34px\" preserveAspectRatio=\"xMidYMid\"\n            style=\"margin: auto; display: block; shape-rendering: auto;\" viewBox=\"0 0 100 100\" width=\"34px\"\n            xmlns=\"http://www.w3.org/2000/svg\">\n            <g transform=\"rotate(0 50 50)\">\n                <rect fill=\"#7a7a7a\" height=\"12\" rx=\"3\" ry=\"6\" width=\"6\" x=\"47\" y=\"20\">\n                    <animate attributeName=\"opacity\" begin=\"-0.9166666666666666s\" dur=\"1s\" keyTimes=\"0;1\"\n                        repeatCount=\"indefinite\" values=\"1;0\" />\n                </rect>\n            </g>\n            <g transform=\"rotate(30 50 50)\">\n                <rect fill=\"#7a7a7a\" height=\"12\" rx=\"3\" ry=\"6\" width=\"6\" x=\"47\" y=\"20\">\n                    <animate attributeName=\"opacity\" begin=\"-0.8333333333333334s\" dur=\"1s\" keyTimes=\"0;1\"\n                        repeatCount=\"indefinite\" values=\"1;0\" />\n                </rect>\n            </g>\n            <g transform=\"rotate(60 50 50)\">\n                <rect fill=\"#7a7a7a\" height=\"12\" rx=\"3\" ry=\"6\" width=\"6\" x=\"47\" y=\"20\">\n                    <animate attributeName=\"opacity\" begin=\"-0.75s\" dur=\"1s\" keyTimes=\"0;1\" repeatCount=\"indefinite\"\n                        values=\"1;0\" />\n                </rect>\n            </g>\n            <g transform=\"rotate(90 50 50)\">\n                <rect fill=\"#7a7a7a\" height=\"12\" rx=\"3\" ry=\"6\" width=\"6\" x=\"47\" y=\"20\">\n                    <animate attributeName=\"opacity\" begin=\"-0.6666666666666666s\" dur=\"1s\" keyTimes=\"0;1\"\n                        repeatCount=\"indefinite\" values=\"1;0\" />\n                </rect>\n            </g>\n            <g transform=\"rotate(120 50 50)\">\n                <rect fill=\"#7a7a7a\" height=\"12\" rx=\"3\" ry=\"6\" width=\"6\" x=\"47\" y=\"20\">\n                    <animate attributeName=\"opacity\" begin=\"-0.5833333333333334s\" dur=\"1s\" keyTimes=\"0;1\"\n                        repeatCount=\"indefinite\" values=\"1;0\" />\n                </rect>\n            </g>\n            <g transform=\"rotate(150 50 50)\">\n                <rect fill=\"#7a7a7a\" height=\"12\" rx=\"3\" ry=\"6\" width=\"6\" x=\"47\" y=\"20\">\n                    <animate attributeName=\"opacity\" begin=\"-0.5s\" dur=\"1s\" keyTimes=\"0;1\" repeatCount=\"indefinite\"\n                        values=\"1;0\" />\n                </rect>\n            </g>\n            <g transform=\"rotate(180 50 50)\">\n                <rect fill=\"#7a7a7a\" height=\"12\" rx=\"3\" ry=\"6\" width=\"6\" x=\"47\" y=\"20\">\n                    <animate attributeName=\"opacity\" begin=\"-0.4166666666666667s\" dur=\"1s\" keyTimes=\"0;1\"\n                        repeatCount=\"indefinite\" values=\"1;0\" />\n                </rect>\n            </g>\n            <g transform=\"rotate(210 50 50)\">\n                <rect fill=\"#7a7a7a\" height=\"12\" rx=\"3\" ry=\"6\" width=\"6\" x=\"47\" y=\"20\">\n                    <animate attributeName=\"opacity\" begin=\"-0.3333333333333333s\" dur=\"1s\" keyTimes=\"0;1\"\n                        repeatCount=\"indefinite\" values=\"1;0\" />\n                </rect>\n            </g>\n            <g transform=\"rotate(240 50 50)\">\n                <rect fill=\"#7a7a7a\" height=\"12\" rx=\"3\" ry=\"6\" width=\"6\" x=\"47\" y=\"20\">\n                    <animate attributeName=\"opacity\" begin=\"-0.25s\" dur=\"1s\" keyTimes=\"0;1\" repeatCount=\"indefinite\"\n                        values=\"1;0\" />\n                </rect>\n            </g>\n            <g transform=\"rotate(270 50 50)\">\n                <rect fill=\"#7a7a7a\" height=\"12\" rx=\"3\" ry=\"6\" width=\"6\" x=\"47\" y=\"20\">\n                    <animate attributeName=\"opacity\" begin=\"-0.16666666666666666s\" dur=\"1s\" keyTimes=\"0;1\"\n                        repeatCount=\"indefinite\" values=\"1;0\" />\n                </rect>\n            </g>\n            <g transform=\"rotate(300 50 50)\">\n                <rect fill=\"#7a7a7a\" height=\"12\" rx=\"3\" ry=\"6\" width=\"6\" x=\"47\" y=\"20\">\n                    <animate attributeName=\"opacity\" begin=\"-0.08333333333333333s\" dur=\"1s\" keyTimes=\"0;1\"\n                        repeatCount=\"indefinite\" values=\"1;0\" />\n                </rect>\n            </g>\n            <g transform=\"rotate(330 50 50)\">\n                <rect fill=\"#7a7a7a\" height=\"12\" rx=\"3\" ry=\"6\" width=\"6\" x=\"47\" y=\"20\">\n                    <animate attributeName=\"opacity\" begin=\"0s\" dur=\"1s\" keyTimes=\"0;1\" repeatCount=\"indefinite\"\n                        values=\"1;0\" />\n                </rect>\n            </g>\n        </svg>\n\n        <mat-icon *ngIf=\"!loaderDisplay && !isPlaying\" aria-hidden=\"true\" class=\"play-track\">\n            <!-- Play icon (play_arrow) -->\n            <svg height=\"32\" viewBox=\"0 0 24 24\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path d=\"M8 5v14l11-7z\" />\n                <path d=\"M0 0h24v24H0z\" fill=\"none\" />\n            </svg>\n        </mat-icon>\n        <mat-icon *ngIf=\"!loaderDisplay && isPlaying\" aria-hidden=\"true\" class=\"pause-track\">\n            <!-- Pause icon (pause) -->\n            <svg height=\"32\" viewBox=\"0 0 24 24\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path d=\"M6 19h4V5H6v14zm8-14v14h4V5h-4z\" />\n                <path d=\"M0 0h24v24H0z\" fill=\"none\" />\n            </svg>\n        </mat-icon>\n    </button>\n    <div class=\"flex-fill pl-1 ngx-basic-audio-player-slider\">\n        <mat-slider (change)=\"currTimePosChanged($event)\" [min]=\"startOffset\" max=\"{{duration-endOffset}}\"\n            style=\"width: 100%\" value=\"{{currentTime}}\"></mat-slider>\n    </div>\n    <div class=\"d-flex ngx-basic-audio-player-duration\">\n        <span *ngIf=\"duration !== 0.01\" class=\"pl-2 pr-3 my-auto\" style=\"font-size: 14px!important;\">\n            -{{duration-endOffset-currentTime |\n            secondsToMinutes }}\n        </span>\n    </div>\n    <button (click)='toggleVolume();' *ngIf=\"displayVolumeControls\" mat-button class=\"ngx-basic-audio-player-button\">\n        <mat-icon *ngIf=\"volume === 0\" aria-hidden=\"true\" class=\"volume-mute\">\n            <!-- Volume mute icon (volume_off) -->\n            <svg height=\"28\" viewBox=\"0 0 24 24\" width=\"28\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path\n                    d=\"M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z\" />\n                <path d=\"M0 0h24v24H0z\" fill=\"none\" />\n            </svg>\n        </mat-icon>\n        <mat-icon *ngIf=\"volume > 0\" aria-hidden=\"true\" class=\"volume-up\">\n            <!-- Volume up icon (volume_up) -->\n            <svg height=\"28\" viewBox=\"0 0 24 24\" width=\"28\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path\n                    d=\"M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z\" />\n                <path d=\"M0 0h24v24H0z\" fill=\"none\" />\n            </svg>\n        </mat-icon>\n    </button>\n</mat-card>\n\n<mat-card *ngIf=\"displayTitle && title !== ''\" class=\"z-depth-1 mat-elevation-z1\">\n    <div style=\"text-align: center;\">\n        <div class=\"ngx-basic-audio-player-title\">\n            {{ title }}\n        </div>\n    </div>\n</mat-card>",
                styles: [".ngx-basic-audio-player{min-width:300px}.material-icons{font-size:32px!important}.ngx-basic-audio-player-button{padding:0;min-width:52px}.ngx-basic-audio-player-title{margin:1px 2px;padding:1em}", "@import url(https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.4.1/css/bootstrap-grid.min.css);mat-card,mat-slider{padding:0!important}button:focus,button:hover{outline:0!important}svg{vertical-align:top}.mat-icon{height:32px!important;width:32px!important}mat-card{background:rgba(0,0,0,.02)}mat-icon>.currently-playing{height:16px!important;width:16px!important}"]
            }),
            __metadata("design:paramtypes", [])
        ], MatBasicAudioPlayerComponent);
        return MatBasicAudioPlayerComponent;
    }(BaseAudioPlayerFunctions));

    /*
     * Transform seconds to minutes:seconds
     * Example : 270 -> 02:30
    */
    var SecondsToMinutesPipe = /** @class */ (function () {
        function SecondsToMinutesPipe() {
        }
        SecondsToMinutesPipe.prototype.transform = function (time) {
            var minutes = ('0' + Math.floor(time / 60)).slice(-2);
            var seconds = ('0' + time % 60).slice(-2);
            return minutes + ":" + seconds;
        };
        SecondsToMinutesPipe = __decorate([
            core.Pipe({ name: 'secondsToMinutes' })
        ], SecondsToMinutesPipe);
        return SecondsToMinutesPipe;
    }());

    var NgxAudioPlayerModule = /** @class */ (function () {
        function NgxAudioPlayerModule() {
        }
        NgxAudioPlayerModule = __decorate([
            core.NgModule({
                declarations: [MatBasicAudioPlayerComponent, SecondsToMinutesPipe, MatAdvancedAudioPlayerComponent],
                imports: [common.CommonModule, forms.FormsModule, button.MatButtonModule, card.MatCardModule, table.MatTableModule, formField.MatFormFieldModule,
                    slider.MatSliderModule, expansion.MatExpansionModule, paginator.MatPaginatorModule, icon.MatIconModule],
                exports: [MatBasicAudioPlayerComponent, MatAdvancedAudioPlayerComponent]
            })
        ], NgxAudioPlayerModule);
        return NgxAudioPlayerModule;
    }());

    var Track = /** @class */ (function () {
        function Track() {
            var _this = this;
            this.toString = function () {
                return "Track (index: " + _this.index + ", title: " + _this.title + ")";
            };
        }
        return Track;
    }());

    exports.MatAdvancedAudioPlayerComponent = MatAdvancedAudioPlayerComponent;
    exports.MatBasicAudioPlayerComponent = MatBasicAudioPlayerComponent;
    exports.NgxAudioPlayerModule = NgxAudioPlayerModule;
    exports.Track = Track;
    exports.ɵa = BaseAudioPlayerFunctions;
    exports.ɵb = SecondsToMinutesPipe;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-audio-player.umd.js.map
