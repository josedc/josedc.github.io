(function () {
    var a = {};
    function trans(c, d) {
        var e = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
        a[e[0x0]] = e;
        return '';
    }
    function regTextVar(c, d) {
        var e = ![];
        d = d['toLowerCase']();
        var f = function () {
            var o = this['get']('data');
            o['updateText'](o['translateObjs'][c]);
        };
        var g = function (o) {
            var p = o['data']['nextSelectedIndex'];
            if (p >= 0x0) {
                var q = o['source']['get']('items')[p];
                var r = function () {
                    q['unbind']('begin', r, this);
                    f['call'](this);
                };
                q['bind']('begin', r, this);
            } else
                f['call'](this);
        };
        var h = function (o) {
            return function (p) {
                if (o in p) {
                    f['call'](this);
                }
            }['bind'](this);
        };
        var i = function (o, p) {
            return function (q, r) {
                if (o == q && p in r) {
                    f['call'](this);
                }
            }['bind'](this);
        };
        var j = function (o, p, q) {
            for (var r = 0x0; r < o['length']; ++r) {
                var s = o[r];
                var t = s['get']('selectedIndex');
                if (t >= 0x0) {
                    var u = p['split']('.');
                    var v = s['get']('items')[t];
                    if (q !== undefined && !q['call'](this, v))
                        continue;
                    for (var w = 0x0; w < u['length']; ++w) {
                        if (v == undefined)
                            return '';
                        v = 'get' in v ? v['get'](u[w]) : v[u[w]];
                    }
                    return v;
                }
            }
            return '';
        };
        var k = function (o) {
            var p = o['get']('player');
            return p !== undefined && p['get']('viewerArea') == this['getMainViewer']();
        };
        switch (d) {
        case 'title':
        case 'subtitle':
            var m = function () {
                switch (d) {
                case 'title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                }
            }();
            if (m) {
                return function () {
                    var o = this['_getPlayListsWithViewer'](this['getMainViewer']());
                    if (!e) {
                        for (var p = 0x0; p < o['length']; ++p) {
                            o[p]['bind']('changing', g, this);
                        }
                        e = !![];
                    }
                    return j['call'](this, o, m, k);
                };
            }
            break;
        default:
            if (d['startsWith']('quiz.') && 'Quiz' in TDV) {
                var n = undefined;
                var m = function () {
                    switch (d) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var o = /quiz\.([\w_]+)\.(.+)/['exec'](d);
                        if (o !== undefined) {
                            n = o[0x1];
                            switch ('quiz.' + o[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (m) {
                    return function () {
                        var o = this['get']('data')['quiz'];
                        if (o) {
                            if (!e) {
                                if (n != undefined)
                                    if (n == 'global') {
                                        var q = this['get']('data')['quizConfig'];
                                        var s = q['objectives'];
                                        for (var u = 0x0, w = s['length']; u < w; ++u) {
                                            o['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], i['call'](this, s[u]['id'], m), this);
                                        }
                                    } else {
                                        o['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], i['call'](this, n, m), this);
                                    }
                                else
                                    o['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], h['call'](this, m), this);
                                e = !![];
                            }
                            try {
                                var x = 0x0;
                                if (n != undefined) {
                                    if (n == 'global') {
                                        var q = this['get']('data')['quizConfig'];
                                        var s = q['objectives'];
                                        for (var u = 0x0, w = s['length']; u < w; ++u) {
                                            x += o['getObjective'](s[u]['id'], m);
                                        }
                                    } else {
                                        x = o['getObjective'](n, m);
                                    }
                                } else {
                                    x = o['get'](m);
                                    if (m == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        x += 0x1;
                                }
                                return x;
                            } catch (y) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return '';
    }
    function createQuizConfig(player, c) {
        var d = {};
        d['player'] = player;
        d['playList'] = c;
        function e(h) {
            for (var j = 0x0; j < h['length']; ++j) {
                var k = h[j];
                if ('id' in k)
                    player[k['id']] = k;
            }
        }
        if (d['questions']) {
            e(d['questions']);
            for (var f = 0x0; f < d['questions']['length']; ++f) {
                var g = d['questions'][f];
                e(g['options']);
            }
        }
        if (d['objectives']) {
            e(d['objectives']);
        }
        if (d['califications']) {
            e(d['califications']);
        }
        if (d['score']) {
            player[d['score']['id']] = d['score'];
        }
        if (d['question']) {
            player[d['question']['id']] = d['question'];
        }
        if (d['timeout']) {
            player[d['timeout']['id']] = d['timeout'];
        }
        player['get']('data')['translateObjs'] = a;
        return d;
    }
    var b = {"shadow":false,"paddingTop":0,"paddingBottom":0,"id":"rootPlayer","gap":10,"scripts":{"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"getMainViewer":TDV.Tour.Script.getMainViewer,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"cloneCamera":TDV.Tour.Script.cloneCamera,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"unregisterKey":TDV.Tour.Script.unregisterKey,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"historyGoForward":TDV.Tour.Script.historyGoForward,"getPixels":TDV.Tour.Script.getPixels,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"init":TDV.Tour.Script.init,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"mixObject":TDV.Tour.Script.mixObject,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"setLocale":TDV.Tour.Script.setLocale,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"setValue":TDV.Tour.Script.setValue,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"getKey":TDV.Tour.Script.getKey,"setMapLocation":TDV.Tour.Script.setMapLocation,"showPopupImage":TDV.Tour.Script.showPopupImage,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"shareSocial":TDV.Tour.Script.shareSocial,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"getMediaByName":TDV.Tour.Script.getMediaByName,"getComponentByName":TDV.Tour.Script.getComponentByName,"openLink":TDV.Tour.Script.openLink,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"existsKey":TDV.Tour.Script.existsKey,"showWindow":TDV.Tour.Script.showWindow,"quizShowScore":TDV.Tour.Script.quizShowScore,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"initGA":TDV.Tour.Script.initGA,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"historyGoBack":TDV.Tour.Script.historyGoBack,"isPanorama":TDV.Tour.Script.isPanorama,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"quizStart":TDV.Tour.Script.quizStart,"playAudioList":TDV.Tour.Script.playAudioList,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"quizFinish":TDV.Tour.Script.quizFinish,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"translate":TDV.Tour.Script.translate,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"getOverlays":TDV.Tour.Script.getOverlays,"registerKey":TDV.Tour.Script.registerKey,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"initQuiz":TDV.Tour.Script.initQuiz,"resumePlayers":TDV.Tour.Script.resumePlayers,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"textToSpeech":TDV.Tour.Script.textToSpeech},"toolTipHorizontalAlign":"center","children":["this.MainViewer_mobile","this.Container_10BF264C_1C81_AB18_418E_C228A2BBA487_mobile","this.ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839_mobile","this.IconButton_069AFCF9_1C9E_98F8_41AA_EDF2EF9939E8_mobile","this.IconButton_3BD6FE66_1C9E_9B08_41AE_65363919CAD0_mobile","this.IconButton_3BF02F26_1C9E_990B_419B_60D4788D76C9_mobile"],"start":"this.init(); this.syncPlaylists([this.mainPlayList,this.ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839_mobile_playlist]); if(!this.get('fullscreenAvailable')) { [this.IconButton_138AC8EB_1C81_A718_41B9_C0E861AF42F4_mobile].forEach(function(component) { component.set('visible', false); }) }","verticalAlign":"top","width":"100%","borderRadius":0,"backgroundColorRatios":[0],"desktopMipmappingEnabled":false,"defaultVRPointer":"laser","horizontalAlign":"left","borderSize":0,"scrollBarMargin":2,"downloadEnabled":false,"backgroundColorDirection":"vertical","paddingLeft":0,"backgroundColor":["#FFFFFF"],"buttonToggleFullscreen":"this.IconButton_138AC8EB_1C81_A718_41B9_C0E861AF42F4_mobile","overflow":"hidden","vrPolyfillScale":0.5,"propagateClick":false,"height":"100%","paddingRight":0,"scrollBarWidth":10,"mediaActivationMode":"window","scrollBarVisible":"rollOver","scrollBarColor":"#000000","backgroundPreloadEnabled":true,"definitions": [{"shadow":false,"paddingTop":0,"paddingBottom":0,"width":46,"id":"IconButton_124E5997_1C81_F908_41A5_4F230AEBB3C6_mobile","toolTipHorizontalAlign":"center","borderRadius":0,"verticalAlign":"middle","horizontalAlign":"center","borderSize":0,"paddingLeft":0,"height":46,"mode":"push","propagateClick":false,"paddingRight":0,"iconURL":"skin/IconButton_124E5997_1C81_F908_41A5_4F230AEBB3C6_mobile.png","class":"IconButton","maxHeight":46,"maxWidth":46,"transparencyActive":true,"data":{"name":"VR"},"minHeight":1,"cursor":"hand","minWidth":1,"backgroundOpacity":0},{"class":"PlayList","items":[{"player":"this.MainViewer_mobilePanoramaPlayer","class":"PanoramaPlayListItem","media":"this.panorama_A6081612_AC6A_20A7_41D0_477D1C36CB84","camera":"this.panorama_A6081612_AC6A_20A7_41D0_477D1C36CB84_camera"}],"id":"ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839_mobile_playlist"},{"shadow":false,"paddingTop":0,"paddingBottom":0,"children":["this.IconButton_138AC8EB_1C81_A718_41B9_C0E861AF42F4_mobile","this.IconButton_128BCB90_1C86_7907_41B3_46B5B135C181_mobile","this.IconButton_128B7B91_1C86_7909_41B8_9320D8E0D421_mobile"],"id":"Container_12A55BC8_1C86_7918_419A_38D3F8B9FF36_mobile","gap":0,"right":"0%","borderRadius":0,"toolTipHorizontalAlign":"center","verticalAlign":"middle","width":"50%","overflow":"scroll","horizontalAlign":"right","borderSize":0,"scrollBarMargin":1,"top":"0%","scrollBarWidth":5,"propagateClick":false,"height":"100%","paddingRight":5,"paddingLeft":0,"scrollBarVisible":"rollOver","scrollBarColor":"#000000","scrollBarOpacity":0.5,"class":"Container","layout":"horizontal","data":{"name":"Right"},"contentOpaque":false,"minHeight":1,"minWidth":1,"backgroundOpacity":0},{"shadow":false,"paddingTop":0,"paddingBottom":0,"width":46,"id":"IconButton_11F8C692_1C82_6B0B_41B2_28931AB2B43D_mobile","toolTipHorizontalAlign":"center","borderRadius":0,"verticalAlign":"middle","horizontalAlign":"center","borderSize":0,"paddingLeft":0,"height":46,"mode":"push","propagateClick":false,"paddingRight":0,"click":"this.loadFromCurrentMediaPlayList(this.mainPlayList, -1, true)","iconURL":"skin/IconButton_11F8C692_1C82_6B0B_41B2_28931AB2B43D_mobile.png","class":"IconButton","transparencyActive":true,"data":{"name":"Previous"},"minHeight":0,"cursor":"hand","minWidth":0,"backgroundOpacity":0},{"cursor":"hand","shadow":false,"paddingTop":0,"paddingBottom":0,"width":46,"id":"IconButton_3BF02F26_1C9E_990B_419B_60D4788D76C9_mobile","right":"2%","borderRadius":0,"toolTipHorizontalAlign":"center","verticalAlign":"middle","horizontalAlign":"center","borderSize":0,"top":"35%","paddingLeft":0,"mode":"push","propagateClick":false,"paddingRight":0,"bottom":"35%","click":"this.loadFromCurrentMediaPlayList(this.mainPlayList, 1, true)","iconURL":"skin/IconButton_3BF02F26_1C9E_990B_419B_60D4788D76C9_mobile.png","class":"IconButton","maxHeight":46,"maxWidth":46,"transparencyActive":true,"data":{"name":"next"},"minHeight":1,"visible":false,"minWidth":1,"backgroundOpacity":0},{"minWidth":10,"backgroundOpacity":0.9,"id":"ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839_mobile","left":"2%","scrollBarMargin":0,"gap":5,"right":"2%","itemThumbnailBorderRadius":0,"rollOverItemLabelFontWeight":"normal","toolTipHorizontalAlign":"center","itemMode":"normal","selectedItemLabelFontColor":"#FFFFFF","itemBorderRadius":0,"horizontalAlign":"left","itemLabelFontColor":"#999999","borderSize":0,"itemLabelFontStyle":"normal","itemLabelPosition":"bottom","selectedItemBorderSize":1.5,"itemThumbnailOpacity":1,"itemLabelFontWeight":"normal","backgroundColorDirection":"vertical","rollOverItemBackgroundOpacity":0,"itemPaddingRight":3,"height":101,"itemLabelGap":4,"backgroundColor":["#534741"],"itemLabelFontSize":"9px","scrollBarColor":"#FFFFFF","itemLabelTextDecoration":"none","itemPaddingBottom":3,"itemPaddingLeft":3,"itemVerticalAlign":"middle","selectedItemBackgroundOpacity":0.9,"paddingTop":8.5,"playList":"this.ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839_mobile_playlist","shadow":false,"paddingBottom":0,"borderRadius":0,"selectedItemLabelFontWeight":"bold","verticalAlign":"top","backgroundColorRatios":[0],"itemLabelHorizontalAlign":"center","rollOverItemLabelFontColor":"#FFFFFF","itemThumbnailScaleMode":"fit_outside","paddingLeft":7,"bottom":60,"selectedItemBackgroundColorRatios":[0.04],"propagateClick":false,"paddingRight":7,"scrollBarWidth":2,"itemBorderSize":0,"scrollBarVisible":"rollOver","itemThumbnailShadow":false,"scrollBarOpacity":0,"class":"ThumbnailList","itemPaddingTop":3,"itemLabelFontFamily":"Arial","itemBackgroundColorRatios":[],"itemBackgroundColorDirection":"vertical","selectedItemBackgroundColor":["#534741"],"itemBackgroundColor":[],"itemThumbnailHeight":70,"layout":"horizontal","itemThumbnailBorderSize":0,"selectedItemBorderColor":"#FFFFFF","itemOpacity":1,"data":{"name":"THUMBNAIL LIST"},"itemBackgroundOpacity":0,"itemHorizontalAlign":"center","itemThumbnailWidth":120,"minHeight":10},{"arrowKeysAction":"translate","surfaceSelectionEnabled":false,"buttonZoomOut":"this.IconButton_138E31DC_1C9E_A93F_4194_059FF78E4793_mobile","mouseControlMode":"drag_rotation","displayPlaybackBar":true,"buttonMoveUp":"this.IconButton_11799103_1C9E_A909_418E_09A8EA6A7B64_mobile","viewerArea":"this.MainViewer_mobile","buttonMoveDown":"this.IconButton_138A1D06_1C9E_7908_41BC_00628ACDA5FF_mobile","id":"MainViewer_mobilePanoramaPlayer","touchControlMode":"drag_rotation","zoomEnabled":true,"buttonCardboardView":"this.IconButton_124E5997_1C81_F908_41A5_4F230AEBB3C6_mobile","class":"PanoramaPlayer","gyroscopeVerticalDraggingEnabled":true,"buttonMoveLeft":"this.IconButton_12B3BCE7_1C81_BF08_41BC_218123CBBD44_mobile","buttonZoomIn":"this.IconButton_12FEFBA0_1C9E_9908_41B1_DC24C660435A_mobile","buttonMoveRight":"this.IconButton_12D5DAF7_1C9E_BB08_416D_19DFFACBC396_mobile"},{"class":"PlayList","items":[{"media":"this.panorama_A6081612_AC6A_20A7_41D0_477D1C36CB84","end":"this.trigger('tourEnded')","camera":"this.panorama_A6081612_AC6A_20A7_41D0_477D1C36CB84_camera","class":"PanoramaPlayListItem","player":"this.MainViewer_mobilePanoramaPlayer"}],"id":"mainPlayList"},{"initialPosition":{"class":"PanoramaCameraPosition","yaw":67.26,"pitch":0.11},"automaticZoomSpeed":10,"class":"PanoramaCamera","id":"panorama_A6081612_AC6A_20A7_41D0_477D1C36CB84_camera"},{"class":"FadeOutEffect","id":"effect_0D94FAD4_1C86_9B08_41A8_2DB4814C41C5","easing":"linear","duration":200},{"shadow":false,"paddingTop":0,"paddingBottom":0,"left":"0%","children":["this.IconButton_11F8C692_1C82_6B0B_41B2_28931AB2B43D_mobile","this.IconButton_1297FF98_1C82_9907_41AD_A09E1EA44354_mobile","this.IconButton_124E5997_1C81_F908_41A5_4F230AEBB3C6_mobile"],"id":"Container_1185BA07_1C82_BB09_4190_3425ACEF39CF_mobile","gap":0,"toolTipHorizontalAlign":"center","borderRadius":0,"verticalAlign":"middle","width":"50%","overflow":"scroll","horizontalAlign":"left","borderSize":0,"scrollBarMargin":1,"top":"0%","scrollBarWidth":5,"propagateClick":false,"height":"100%","paddingRight":0,"paddingLeft":5,"scrollBarVisible":"rollOver","scrollBarColor":"#000000","scrollBarOpacity":0.5,"class":"Container","layout":"horizontal","data":{"name":"Left"},"contentOpaque":false,"minHeight":1,"minWidth":1,"backgroundOpacity":0},{"class":"FadeOutEffect","id":"effect_0A30489F_1C86_6738_41A8_2722230A2E2F","easing":"linear","duration":100},{"cursor":"hand","shadow":false,"paddingTop":0,"paddingBottom":0,"left":"40%","id":"IconButton_069AFCF9_1C9E_98F8_41AA_EDF2EF9939E8_mobile","right":"40%","borderRadius":0,"toolTipHorizontalAlign":"center","verticalAlign":"middle","horizontalAlign":"center","borderSize":0,"paddingLeft":0,"height":46,"mode":"push","propagateClick":false,"paddingRight":0,"bottom":0,"click":"this.setComponentVisibility(this.Container_10BF264C_1C81_AB18_418E_C228A2BBA487_mobile, true, 0, null, null, false); this.setComponentVisibility(this.IconButton_3BF02F26_1C9E_990B_419B_60D4788D76C9_mobile, false, 0, this.effect_3A451B34_1C82_9908_41AD_37B1C5A316C2, 'hideEffect', false); this.setComponentVisibility(this.IconButton_069AFCF9_1C9E_98F8_41AA_EDF2EF9939E8_mobile, false, 0, this.effect_3A451B34_1C82_9908_41AD_37B1C5A316C2, 'hideEffect', false); this.setComponentVisibility(this.IconButton_3BD6FE66_1C9E_9B08_41AE_65363919CAD0_mobile, false, 0, this.effect_3A451B34_1C82_9908_41AD_37B1C5A316C2, 'hideEffect', false)","iconURL":"skin/IconButton_069AFCF9_1C9E_98F8_41AA_EDF2EF9939E8_mobile.png","class":"IconButton","maxHeight":46,"maxWidth":46,"transparencyActive":true,"data":{"name":"-Expand"},"minHeight":1,"visible":false,"minWidth":1,"backgroundOpacity":0},{"cursor":"hand","shadow":false,"toolTipOpacity":1,"toolTipFontWeight":"normal","paddingTop":0,"paddingBottom":0,"toolTipShadowBlurRadius":1,"width":46,"id":"IconButton_138AC8EB_1C81_A718_41B9_C0E861AF42F4_mobile","toolTipShadowVerticalLength":0,"toolTipHorizontalAlign":"center","toolTipFontSize":6,"toolTip":trans('IconButton_138AC8EB_1C81_A718_41B9_C0E861AF42F4_mobile.toolTip'),"borderRadius":0,"toolTipShadowSpread":0,"verticalAlign":"middle","toolTipFontStyle":"normal","toolTipDisplayTime":600,"toolTipBorderSize":0,"toolTipPaddingBottom":2,"horizontalAlign":"center","toolTipFontColor":"#606060","toolTipShadowColor":"#333333","borderSize":0,"toolTipPaddingRight":3,"paddingLeft":0,"height":46,"toolTipFontFamily":"Arial","mode":"toggle","propagateClick":false,"paddingRight":0,"toolTipPaddingLeft":3,"toolTipPaddingTop":2,"iconURL":"skin/IconButton_138AC8EB_1C81_A718_41B9_C0E861AF42F4_mobile.png","toolTipBackgroundColor":"#F6F6F6","class":"IconButton","toolTipTextShadowColor":"#000000","toolTipShadowHorizontalLength":0,"maxHeight":46,"toolTipTextShadowOpacity":0,"maxWidth":46,"toolTipBorderColor":"#767676","transparencyActive":true,"toolTipShadowOpacity":1,"data":{"name":"fullscreen"},"minHeight":1,"toolTipBorderRadius":1,"toolTipTextShadowBlurRadius":1,"minWidth":1,"backgroundOpacity":0},{"shadow":false,"paddingTop":0,"paddingBottom":0,"width":46,"id":"IconButton_128B7B91_1C86_7909_41B8_9320D8E0D421_mobile","toolTipHorizontalAlign":"center","borderRadius":0,"verticalAlign":"middle","horizontalAlign":"center","borderSize":0,"paddingLeft":0,"height":46,"mode":"push","propagateClick":false,"paddingRight":0,"click":"this.loadFromCurrentMediaPlayList(this.mainPlayList, 1, true)","iconURL":"skin/IconButton_128B7B91_1C86_7909_41B8_9320D8E0D421_mobile.png","class":"IconButton","transparencyActive":true,"data":{"name":"Next"},"minHeight":0,"cursor":"hand","minWidth":0,"backgroundOpacity":0},{"shadow":false,"paddingTop":0,"paddingBottom":0,"width":46,"id":"IconButton_128BCB90_1C86_7907_41B3_46B5B135C181_mobile","toolTipHorizontalAlign":"center","borderRadius":0,"verticalAlign":"middle","horizontalAlign":"center","borderSize":0,"paddingLeft":0,"height":46,"mode":"push","propagateClick":false,"paddingRight":0,"click":"this.setComponentVisibility(this.Container_10BF264C_1C81_AB18_418E_C228A2BBA487_mobile, false, 0, this.effect_0A30489F_1C86_6738_41A8_2722230A2E2F, 'hideEffect', false); this.setComponentVisibility(this.ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839_mobile, false, 0, this.effect_0A30489F_1C86_6738_41A8_2722230A2E2F, 'hideEffect', false); this.setComponentVisibility(this.IconButton_3BF02F26_1C9E_990B_419B_60D4788D76C9_mobile, true, 0, this.effect_3BBFCE93_1C81_BB08_4164_2A3A90EDB050, 'showEffect', false); this.setComponentVisibility(this.IconButton_069AFCF9_1C9E_98F8_41AA_EDF2EF9939E8_mobile, true, 0, this.effect_3BBFCE93_1C81_BB08_4164_2A3A90EDB050, 'showEffect', false); this.setComponentVisibility(this.IconButton_3BD6FE66_1C9E_9B08_41AE_65363919CAD0_mobile, true, 0, this.effect_3BBFCE93_1C81_BB08_4164_2A3A90EDB050, 'showEffect', false)","iconURL":"skin/IconButton_128BCB90_1C86_7907_41B3_46B5B135C181_mobile.png","class":"IconButton","transparencyActive":true,"data":{"name":"Collapse"},"minHeight":0,"cursor":"hand","minWidth":0,"backgroundOpacity":0},{"shadow":false,"paddingTop":0,"paddingBottom":0,"left":"25%","children":["this.IconButton_12B3BCE7_1C81_BF08_41BC_218123CBBD44_mobile","this.IconButton_12D5DAF7_1C9E_BB08_416D_19DFFACBC396_mobile","this.IconButton_11799103_1C9E_A909_418E_09A8EA6A7B64_mobile","this.IconButton_138A1D06_1C9E_7908_41BC_00628ACDA5FF_mobile","this.IconButton_12FEFBA0_1C9E_9908_41B1_DC24C660435A_mobile","this.IconButton_138E31DC_1C9E_A93F_4194_059FF78E4793_mobile"],"id":"Container_129084CF_1C83_AF18_418C_2D8031993BE6_mobile","gap":0,"right":"25%","borderRadius":0,"scrollBarMargin":1,"toolTipHorizontalAlign":"center","verticalAlign":"middle","overflow":"scroll","horizontalAlign":"center","borderSize":0,"top":"0%","paddingLeft":0,"propagateClick":false,"height":"100%","paddingRight":0,"scrollBarWidth":5,"scrollBarVisible":"rollOver","scrollBarColor":"#000000","scrollBarOpacity":0.5,"class":"Container","layout":"horizontal","data":{"name":"Center"},"contentOpaque":false,"visible":false,"minHeight":1,"minWidth":1,"backgroundOpacity":0},{"shadow":false,"paddingTop":0,"paddingBottom":0,"width":23,"rollOverIconURL":"skin/IconButton_12B3BCE7_1C81_BF08_41BC_218123CBBD44_mobile_rollover.png","id":"IconButton_12B3BCE7_1C81_BF08_41BC_218123CBBD44_mobile","pressedIconURL":"skin/IconButton_12B3BCE7_1C81_BF08_41BC_218123CBBD44_mobile_pressed.png","toolTipHorizontalAlign":"center","borderRadius":0,"verticalAlign":"middle","horizontalAlign":"center","borderSize":0,"paddingLeft":0,"height":23,"mode":"push","propagateClick":false,"paddingRight":0,"iconURL":"skin/IconButton_12B3BCE7_1C81_BF08_41BC_218123CBBD44_mobile.png","class":"IconButton","transparencyActive":true,"data":{"name":"Left"},"minHeight":0,"cursor":"hand","minWidth":0,"backgroundOpacity":0},{"shadow":false,"paddingTop":0,"paddingBottom":0,"width":23,"rollOverIconURL":"skin/IconButton_138A1D06_1C9E_7908_41BC_00628ACDA5FF_mobile_rollover.png","id":"IconButton_138A1D06_1C9E_7908_41BC_00628ACDA5FF_mobile","pressedIconURL":"skin/IconButton_138A1D06_1C9E_7908_41BC_00628ACDA5FF_mobile_pressed.png","toolTipHorizontalAlign":"center","borderRadius":0,"verticalAlign":"middle","horizontalAlign":"center","borderSize":0,"paddingLeft":0,"height":23,"mode":"push","propagateClick":false,"paddingRight":0,"iconURL":"skin/IconButton_138A1D06_1C9E_7908_41BC_00628ACDA5FF_mobile.png","class":"IconButton","transparencyActive":true,"data":{"name":"Down"},"minHeight":0,"cursor":"hand","minWidth":0,"backgroundOpacity":0},{"class":"FadeInEffect","id":"effect_0D9B8AD4_1C86_9B08_41AD_E3E797295AC7","easing":"linear","duration":200},{"cursor":"hand","shadow":false,"paddingTop":0,"paddingBottom":0,"left":"2%","width":46,"id":"IconButton_3BD6FE66_1C9E_9B08_41AE_65363919CAD0_mobile","toolTipHorizontalAlign":"center","borderRadius":0,"verticalAlign":"middle","horizontalAlign":"center","borderSize":0,"top":"35%","paddingLeft":0,"mode":"push","propagateClick":false,"paddingRight":0,"bottom":"35%","click":"this.loadFromCurrentMediaPlayList(this.mainPlayList, -1, true)","iconURL":"skin/IconButton_3BD6FE66_1C9E_9B08_41AE_65363919CAD0_mobile.png","class":"IconButton","maxHeight":46,"maxWidth":46,"transparencyActive":true,"data":{"name":"previous"},"minHeight":1,"visible":false,"minWidth":1,"backgroundOpacity":0},{"veilColorRatios":[0,1],"closeButtonPressedIconColor":"#FFFFFF","shadowSpread":1,"gap":10,"width":"90%","id":"window_A1B6242B_AC76_60E4_41DC_2F81F4AD2FC8","toolTipHorizontalAlign":"center","closeButtonPressedBorderColor":"#000000","bodyPaddingTop":0,"overflow":"scroll","scrollBarMargin":2,"modal":true,"horizontalAlign":"center","footerHeight":5,"borderSize":0,"closeButtonRollOverBackgroundOpacity":0,"footerBackgroundColorRatios":[0,0.9,1],"veilOpacity":0.4,"bodyPaddingBottom":0,"backgroundColor":[],"backgroundColorDirection":"vertical","headerPaddingBottom":5,"closeButtonIconLineWidth":2,"bodyPaddingLeft":0,"bodyBackgroundColorRatios":[0,0.5,1],"closeButtonBorderColor":"#000000","closeButtonRollOverBorderSize":0,"bodyBackgroundColor":["#FFFFFF","#DDDDDD","#FFFFFF"],"height":"90%","scrollBarColor":"#000000","closeButtonPressedBorderSize":0,"headerBackgroundColorRatios":[0,0.1,1],"closeButtonRollOverBackgroundColorRatios":[],"shadowHorizontalLength":3,"closeButtonRollOverIconColor":"#FFFFFF","closeButtonPaddingLeft":0,"titlePaddingLeft":5,"closeButtonBackgroundColor":[],"contentOpaque":false,"paddingTop":0,"titlePaddingRight":5,"shadow":true,"paddingBottom":0,"shadowOpacity":0.5,"hideEffect":{"class":"FadeOutEffect","easing":"cubic_in_out","duration":500},"shadowColor":"#000000","titleFontFamily":"Arial","headerBackgroundColor":["#DDDDDD","#EEEEEE","#FFFFFF"],"children":["this.WebFrame_A366DA77_AC7A_616D_41DB_AB7229C67958"],"borderRadius":5,"closeButtonIconHeight":20,"showEffect":{"class":"FadeInEffect","easing":"cubic_in_out","duration":500},"closeButtonIconWidth":20,"headerBackgroundColorDirection":"vertical","bodyBackgroundColorDirection":"vertical","backgroundColorRatios":[],"veilShowEffect":{"class":"FadeInEffect","easing":"cubic_in_out","duration":500},"verticalAlign":"middle","footerBackgroundColor":["#FFFFFF","#EEEEEE","#DDDDDD"],"closeButtonPaddingTop":0,"footerBackgroundOpacity":0,"closeButtonBorderSize":0,"closeButtonRollOverBorderColor":"#000000","titlePaddingBottom":5,"closeButtonPressedBackgroundColorRatios":[],"paddingLeft":0,"closeButtonBorderRadius":11,"titleFontColor":"#000000","closeButtonBackgroundColorRatios":[],"scrollBarWidth":10,"headerBackgroundOpacity":0,"propagateClick":false,"headerPaddingLeft":10,"closeButtonPressedBackgroundColor":[],"closeButtonRollOverBackgroundColor":[],"paddingRight":0,"titlePaddingTop":5,"footerBackgroundColorDirection":"vertical","scrollBarVisible":"rollOver","closeButtonRollOverIconLineWidth":2,"closeButtonIconColor":"#B2B2B2","veilHideEffect":{"class":"FadeOutEffect","easing":"cubic_in_out","duration":500},"headerPaddingRight":0,"closeButtonPaddingRight":0,"veilColorDirection":"horizontal","scrollBarOpacity":0.5,"class":"Window","shadowVerticalLength":0,"bodyPaddingRight":0,"titleFontSize":"1.29vmin","closeButtonBackgroundOpacity":0,"headerPaddingTop":10,"veilColor":["#000000","#000000"],"closeButtonPressedIconLineWidth":3,"data":{"name":"Window4734"},"shadowBlurRadius":6,"closeButtonPressedBackgroundOpacity":0,"layout":"vertical","bodyBackgroundOpacity":0,"headerVerticalAlign":"middle","minHeight":20,"minWidth":20,"closeButtonPaddingBottom":0,"backgroundOpacity":1},{"shadow":false,"paddingTop":0,"paddingBottom":0,"width":23,"rollOverIconURL":"skin/IconButton_11799103_1C9E_A909_418E_09A8EA6A7B64_mobile_rollover.png","id":"IconButton_11799103_1C9E_A909_418E_09A8EA6A7B64_mobile","pressedIconURL":"skin/IconButton_11799103_1C9E_A909_418E_09A8EA6A7B64_mobile_pressed.png","toolTipHorizontalAlign":"center","borderRadius":0,"verticalAlign":"middle","horizontalAlign":"center","borderSize":0,"paddingLeft":0,"height":23,"mode":"push","propagateClick":false,"paddingRight":0,"iconURL":"skin/IconButton_11799103_1C9E_A909_418E_09A8EA6A7B64_mobile.png","class":"IconButton","transparencyActive":true,"data":{"name":"Up"},"minHeight":0,"cursor":"hand","minWidth":0,"backgroundOpacity":0},{"shadow":false,"paddingTop":0,"paddingBottom":0,"width":23,"rollOverIconURL":"skin/IconButton_138E31DC_1C9E_A93F_4194_059FF78E4793_mobile_rollover.png","id":"IconButton_138E31DC_1C9E_A93F_4194_059FF78E4793_mobile","pressedIconURL":"skin/IconButton_138E31DC_1C9E_A93F_4194_059FF78E4793_mobile_pressed.png","toolTipHorizontalAlign":"center","borderRadius":0,"verticalAlign":"middle","horizontalAlign":"center","borderSize":0,"paddingLeft":0,"height":23,"mode":"push","propagateClick":false,"paddingRight":0,"iconURL":"skin/IconButton_138E31DC_1C9E_A93F_4194_059FF78E4793_mobile.png","class":"IconButton","transparencyActive":true,"data":{"name":"Zoom Out"},"minHeight":0,"cursor":"hand","minWidth":0,"backgroundOpacity":0},{"toolTipBorderRadius":1,"subtitlesHorizontalAlign":"center","displayTooltipInTouchScreens":true,"id":"MainViewer_mobile","progressBottom":0,"toolTipShadowVerticalLength":0,"toolTipHorizontalAlign":"center","subtitlesTextShadowVerticalLength":1,"playbackBarHeadHeight":15,"playbackBarHeadShadowOpacity":0.7,"playbackBarLeft":0,"playbackBarHeadShadowColor":"#000000","subtitlesBorderSize":0,"subtitlesFontColor":"#FFFFFF","toolTipBorderSize":0,"subtitlesTextShadowOpacity":1,"playbackBarHeadBackgroundColorRatios":[0,1],"width":"100%","toolTipShadowColor":"#333333","borderSize":0,"playbackBarHeadShadow":true,"progressBarBackgroundColorDirection":"vertical","progressBackgroundOpacity":1,"playbackBarHeadOpacity":1,"subtitlesTop":0,"progressHeight":10,"progressBorderSize":0,"playbackBarOpacity":1,"subtitlesTextShadowColor":"#000000","playbackBarHeadBorderSize":0,"subtitlesPaddingLeft":5,"toolTipPaddingTop":2,"subtitlesBottom":50,"firstTransitionDuration":0,"subtitlesFontWeight":"normal","surfaceReticleColor":"#FFFFFF","progressBarBorderColor":"#000000","subtitlesPaddingRight":5,"toolTipBackgroundColor":"#F6F6F6","progressBarBorderRadius":0,"progressBarBackgroundColorRatios":[0],"progressBackgroundColorRatios":[0],"subtitlesPaddingBottom":5,"toolTipTextShadowColor":"#000000","playbackBarHeadBackgroundColor":["#111111","#666666"],"subtitlesBackgroundOpacity":0.2,"subtitlesFontSize":"3vmin","toolTipTextShadowOpacity":0,"playbackBarProgressBackgroundColorRatios":[0],"progressBackgroundColorDirection":"vertical","progressBarBorderSize":0,"toolTipBorderColor":"#767676","surfaceReticleOpacity":0.6,"displayTooltipInSurfaceSelection":true,"playbackBarBackgroundOpacity":1,"playbackBarBorderColor":"#FFFFFF","progressRight":0,"doubleClickAction":"toggle_fullscreen","paddingTop":0,"toolTipTextShadowBlurRadius":1,"height":"100%","toolTipOpacity":1,"subtitlesBorderColor":"#FFFFFF","shadow":false,"playbackBarBorderRadius":0,"toolTipFontWeight":"normal","paddingBottom":0,"toolTipShadowBlurRadius":1,"subtitlesTextShadowHorizontalLength":1,"playbackBarHeadShadowVerticalLength":0,"transitionMode":"blending","playbackBarBottom":5,"playbackBarProgressBorderColor":"#000000","toolTipFontSize":"1.11vmin","toolTipFontStyle":"normal","borderRadius":0,"toolTipShadowSpread":0,"progressBorderColor":"#000000","progressBorderRadius":0,"toolTipDisplayTime":600,"playbackBarProgressBackgroundColorDirection":"vertical","toolTipPaddingBottom":2,"subtitlesTextShadowBlurRadius":0,"playbackBarHeadBorderRadius":0,"toolTipFontColor":"#606060","surfaceReticleSelectionColor":"#FFFFFF","playbackBarProgressOpacity":1,"subtitlesTextDecoration":"none","progressBarBackgroundColor":["#3399FF"],"toolTipPaddingRight":3,"playbackBarHeadBorderColor":"#000000","paddingLeft":0,"subtitlesFontFamily":"Arial","playbackBarBackgroundColor":["#FFFFFF"],"playbackBarHeadShadowHorizontalLength":0,"toolTipFontFamily":"Arial","surfaceReticleSelectionOpacity":1,"propagateClick":false,"subtitlesPaddingTop":5,"playbackBarBorderSize":0,"paddingRight":0,"toolTipPaddingLeft":3,"playbackBarHeight":10,"playbackBarHeadBackgroundColorDirection":"vertical","vrPointerColor":"#FFFFFF","subtitlesShadow":false,"progressOpacity":1,"transitionDuration":500,"playbackBarHeadWidth":6,"class":"ViewerArea","subtitlesOpacity":1,"playbackBarProgressBorderSize":0,"playbackBarBackgroundColorDirection":"vertical","subtitlesBackgroundColor":"#000000","subtitlesGap":0,"progressBackgroundColor":["#FFFFFF"],"toolTipShadowHorizontalLength":0,"vrPointerSelectionColor":"#FF6600","data":{"name":"Main Viewer"},"toolTipShadowOpacity":1,"vrPointerSelectionTime":2000,"playbackBarHeadShadowBlurRadius":1.5,"progressLeft":0,"progressBarOpacity":1,"playbackBarProgressBorderRadius":0,"minHeight":25,"playbackBarRight":0,"playbackBarProgressBackgroundColor":["#3399FF"],"minWidth":50,"subtitlesVerticalAlign":"bottom"},{"class":"FadeInEffect","id":"effect_3BBFCE93_1C81_BB08_4164_2A3A90EDB050","easing":"linear","duration":100},{"class":"FadeOutEffect","id":"effect_3A451B34_1C82_9908_41AD_37B1C5A316C2","easing":"linear","duration":100},{"partial":false,"label":trans('panorama_A6081612_AC6A_20A7_41D0_477D1C36CB84.label'),"id":"panorama_A6081612_AC6A_20A7_41D0_477D1C36CB84","frames":[{"class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"url":"media/panorama_A6081612_AC6A_20A7_41D0_477D1C36CB84_0/{face}/0/{row}_{column}.jpg","tags":"ondemand","width":12288,"class":"TiledImageResourceLevel","rowCount":4,"height":2048,"colCount":24},{"url":"media/panorama_A6081612_AC6A_20A7_41D0_477D1C36CB84_0/{face}/1/{row}_{column}.jpg","tags":"ondemand","width":6144,"class":"TiledImageResourceLevel","rowCount":2,"height":1024,"colCount":12},{"url":"media/panorama_A6081612_AC6A_20A7_41D0_477D1C36CB84_0/{face}/2/{row}_{column}.jpg","tags":["ondemand","preload"],"width":3072,"class":"TiledImageResourceLevel","rowCount":1,"height":512,"colCount":6},{"url":"media/panorama_A6081612_AC6A_20A7_41D0_477D1C36CB84_0/{face}/vr/0.jpg","tags":"mobilevr","width":9216,"class":"TiledImageResourceLevel","rowCount":1,"height":1536,"colCount":6}]},"thumbnailUrl":"media/panorama_A6081612_AC6A_20A7_41D0_477D1C36CB84_t.jpg"}],"hfovMax":130,"pitch":0,"overlays":["this.overlay_A02580FD_AC76_215C_41E3_5D1689B1B19E"],"class":"Panorama","hfovMin":"135%","hfov":360,"vfov":180,"data":{"label":"11A"},"thumbnailUrl":"media/panorama_A6081612_AC6A_20A7_41D0_477D1C36CB84_t.jpg"},{"shadow":false,"paddingTop":0,"paddingBottom":0,"width":23,"rollOverIconURL":"skin/IconButton_12FEFBA0_1C9E_9908_41B1_DC24C660435A_mobile_rollover.png","id":"IconButton_12FEFBA0_1C9E_9908_41B1_DC24C660435A_mobile","pressedIconURL":"skin/IconButton_12FEFBA0_1C9E_9908_41B1_DC24C660435A_mobile_pressed.png","toolTipHorizontalAlign":"center","borderRadius":0,"verticalAlign":"middle","horizontalAlign":"center","borderSize":0,"paddingLeft":0,"height":23,"mode":"push","propagateClick":false,"paddingRight":0,"iconURL":"skin/IconButton_12FEFBA0_1C9E_9908_41B1_DC24C660435A_mobile.png","class":"IconButton","transparencyActive":true,"data":{"name":"Zoom In"},"minHeight":0,"cursor":"hand","minWidth":0,"backgroundOpacity":0},{"shadow":false,"paddingTop":0,"paddingBottom":0,"left":"2%","children":["this.Container_1185BA07_1C82_BB09_4190_3425ACEF39CF_mobile","this.Container_12A55BC8_1C86_7918_419A_38D3F8B9FF36_mobile","this.Container_129084CF_1C83_AF18_418C_2D8031993BE6_mobile"],"id":"Container_10BF264C_1C81_AB18_418E_C228A2BBA487_mobile","gap":5,"right":"2%","scrollBarMargin":1,"toolTipHorizontalAlign":"center","verticalAlign":"top","borderRadius":0,"backgroundColorRatios":[0],"horizontalAlign":"left","borderSize":0,"backgroundColorDirection":"vertical","paddingLeft":0,"height":50,"overflow":"scroll","propagateClick":false,"backgroundColor":["#534741"],"paddingRight":0,"bottom":10,"scrollBarVisible":"rollOver","scrollBarColor":"#000000","scrollBarWidth":5,"scrollBarOpacity":0.5,"class":"Container","layout":"absolute","data":{"name":"SETTINGS"},"contentOpaque":false,"minHeight":1,"minWidth":1,"backgroundOpacity":0.9},{"shadow":false,"paddingTop":0,"paddingBottom":0,"width":23,"rollOverIconURL":"skin/IconButton_12D5DAF7_1C9E_BB08_416D_19DFFACBC396_mobile_rollover.png","id":"IconButton_12D5DAF7_1C9E_BB08_416D_19DFFACBC396_mobile","pressedIconURL":"skin/IconButton_12D5DAF7_1C9E_BB08_416D_19DFFACBC396_mobile_pressed.png","toolTipHorizontalAlign":"center","borderRadius":0,"verticalAlign":"middle","horizontalAlign":"center","borderSize":0,"paddingLeft":0,"height":23,"mode":"push","propagateClick":false,"paddingRight":0,"iconURL":"skin/IconButton_12D5DAF7_1C9E_BB08_416D_19DFFACBC396_mobile.png","class":"IconButton","transparencyActive":true,"data":{"name":"Right"},"minHeight":0,"cursor":"hand","minWidth":0,"backgroundOpacity":0},{"shadow":false,"paddingTop":0,"paddingBottom":0,"width":46,"id":"IconButton_1297FF98_1C82_9907_41AD_A09E1EA44354_mobile","toolTipHorizontalAlign":"center","borderRadius":0,"verticalAlign":"middle","horizontalAlign":"center","borderSize":0,"paddingLeft":0,"height":46,"mode":"toggle","propagateClick":false,"paddingRight":0,"click":"if(!this.ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839_mobile.get('visible')){ this.setComponentVisibility(this.ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839_mobile, true, 0, this.effect_0D9B8AD4_1C86_9B08_41AD_E3E797295AC7, 'showEffect', false) } else { this.setComponentVisibility(this.ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839_mobile, false, 0, this.effect_0D94FAD4_1C86_9B08_41A8_2DB4814C41C5, 'hideEffect', false) }","iconURL":"skin/IconButton_1297FF98_1C82_9907_41AD_A09E1EA44354_mobile.png","class":"IconButton","transparencyActive":true,"data":{"name":"Thumblist"},"minHeight":0,"cursor":"hand","minWidth":0,"backgroundOpacity":0},{"shadow":false,"paddingTop":0,"width":"100%","id":"WebFrame_A366DA77_AC7A_616D_41DB_AB7229C67958","paddingBottom":0,"toolTipHorizontalAlign":"center","scrollEnabled":true,"borderRadius":0,"backgroundColorRatios":[],"borderSize":0,"backgroundColorDirection":"vertical","paddingLeft":0,"backgroundColor":[],"insetBorder":false,"propagateClick":false,"height":"100%","paddingRight":0,"class":"WebFrame","data":{"name":"WebFrame5411"},"minHeight":0,"minWidth":0,"backgroundOpacity":1},{"rollOverDisplay":false,"areas":["this.HotspotPanoramaOverlayArea_A05F31EC_AC76_237C_41D6_5AC1FD990E96"],"useHandCursor":true,"class":"HotspotPanoramaOverlay","items":[{"data":{"label":"icon-ficus_stricta_pulau_ubin"},"class":"HotspotPanoramaOverlayImage","horizontalAlign":"center","scaleMode":"fit_inside","distance":50,"image":"this.res_A35C65FE_AC76_235C_41B2_7AFC7F7107AB","pitch":-1.97,"verticalAlign":"middle","vfov":17.75,"yaw":62.49,"hfov":17.75}],"id":"overlay_A02580FD_AC76_215C_41E3_5D1689B1B19E","data":{"label":"icon-ficus_stricta_pulau_ubin"},"maps":[]},{"class":"HotspotPanoramaOverlayArea","click":"this.WebFrame_A366DA77_AC7A_616D_41DB_AB7229C67958.set('url', this.translate('PopupWebFrameBehaviour_A1B66429_AC76_60E4_41E2_A233CEFE4301.url')); this.showWindow(this.window_A1B6242B_AC76_60E4_41DC_2F81F4AD2FC8, null, false)","id":"HotspotPanoramaOverlayArea_A05F31EC_AC76_237C_41D6_5AC1FD990E96","mapColor":"any"},{"class":"ImageResource","id":"res_A35C65FE_AC76_235C_41B2_7AFC7F7107AB","levels":[{"url":"media/res_A35C65FE_AC76_235C_41B2_7AFC7F7107AB_0.jpg","class":"ImageResourceLevel","width":300,"height":300}]}],"scrollBarOpacity":0.5,"class":"Player","mobileMipmappingEnabled":false,"data":{"defaultLocale":"en","initialScale":0.5,"name":"Player486","textToSpeechConfig":{"speechOnQuizQuestion":false,"pitch":1,"speechOnInfoWindow":false,"speechOnTooltip":false,"volume":1,"rate":1},"locales":{"en":"locale/en.txt"}},"contentOpaque":false,"layout":"absolute","mouseWheelEnabled":true,"minHeight":20,"minWidth":20,"backgroundOpacity":1};
    if (b['data'] == undefined)
        b['data'] = {};
    b['data']['translateObjs'] = a;
    b['data']['history'] = {};
    b['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](b);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2020.5.5.js.map
//Generated with v2020.5.5, Tue Dec 29 2020