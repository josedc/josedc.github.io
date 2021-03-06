(function () {
    var c = {};
    function trans(e, f) {
        var g = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
        c[g[0x0]] = g;
        return '';
    }
    function regTextVar(h, i) {
        var j = ![];
        i = i['toLowerCase']();
        var k = function () {
            var t = this['get']('data');
            t['updateText'](t['translateObjs'][h]);
        };
        var l = function (u) {
            var v = u['data']['nextSelectedIndex'];
            if (v >= 0x0) {
                var w = u['source']['get']('items')[v];
                var x = function () {
                    w['unbind']('begin', x, this);
                    k['call'](this);
                };
                w['bind']('begin', x, this);
            } else
                k['call'](this);
        };
        var m = function (y) {
            return function (z) {
                if (y in z) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var n = function (A, B) {
            return function (C, D) {
                if (A == C && B in D) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var o = function (E, F, G) {
            for (var H = 0x0; H < E['length']; ++H) {
                var I = E[H];
                var J = I['get']('selectedIndex');
                if (J >= 0x0) {
                    var K = F['split']('.');
                    var L = I['get']('items')[J];
                    if (G !== undefined && !G['call'](this, L))
                        continue;
                    for (var M = 0x0; M < K['length']; ++M) {
                        if (L == undefined)
                            return '';
                        L = 'get' in L ? L['get'](K[M]) : L[K[M]];
                    }
                    return L;
                }
            }
            return '';
        };
        var p = function (N) {
            var O = N['get']('player');
            return O !== undefined && O['get']('viewerArea') == this['MainViewer'];
        };
        switch (i) {
        case 'title':
        case 'subtitle':
            var r = function () {
                switch (i) {
                case 'title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                }
            }();
            if (r) {
                return function () {
                    var P = this['_getPlayListsWithViewer'](this['MainViewer']);
                    if (!j) {
                        for (var Q = 0x0; Q < P['length']; ++Q) {
                            P[Q]['bind']('changing', l, this);
                        }
                        j = !![];
                    }
                    return o['call'](this, P, r, p);
                };
            }
            break;
        default:
            if (i['startsWith']('quiz.') && 'Quiz' in TDV) {
                var s = undefined;
                var r = function () {
                    switch (i) {
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
                        var R = /quiz\.([\w_]+)\.(.+)/['exec'](i);
                        if (R !== undefined) {
                            s = R[0x1];
                            switch ('quiz.' + R[0x2]) {
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
                if (r) {
                    return function () {
                        var S = this['get']('data')['quiz'];
                        if (S) {
                            if (!j) {
                                if (s != undefined)
                                    S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, s, r), this);
                                else
                                    S['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], m['call'](this, r), this);
                                j = !![];
                            }
                            try {
                                var T = s != undefined ? S['getObjective'](s, r) : S['get'](r);
                                if (r == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                    T += 0x1;
                                return T;
                            } catch (U) {
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
    function createQuizConfig(player, V) {
        var W = {};
        W['player'] = player;
        W['playList'] = V;
        function X(a0) {
            for (var a1 = 0x0; a1 < a0['length']; ++a1) {
                var a2 = a0[a1];
                if ('id' in a2)
                    player[a2['id']] = a2;
            }
        }
        if (W['questions']) {
            X(W['questions']);
            for (var Y = 0x0; Y < W['questions']['length']; ++Y) {
                var Z = W['questions'][Y];
                X(Z['options']);
            }
        }
        if (W['objectives']) {
            X(W['objectives']);
        }
        if (W['califications']) {
            X(W['califications']);
        }
        if (W['score']) {
            player[W['score']['id']] = W['score'];
        }
        if (W['question']) {
            player[W['question']['id']] = W['question'];
        }
        if (W['timeout']) {
            player[W['timeout']['id']] = W['timeout'];
        }
        player['get']('data')['translateObjs'] = c;
        return W;
    }
    var d = {"scrollBarWidth":10,"data":{"name":"Player503","locales":{"en":"locale/en.txt"},"defaultLocale":"en"},"vrPolyfillScale":0.75,"id":"rootPlayer","scrollBarMargin":2,"paddingTop":0,"layout":"absolute","paddingLeft":0,"overflow":"hidden","borderSize":0,"paddingBottom":0,"width":"100%","desktopMipmappingEnabled":false,"children":["this.MainViewer","this.Label_795BEF6C_69F3_C23C_41D8_2C0D96B74701","this.IconButton_791477B9_69F0_C224_41D0_C26650202D3E"],"scrollBarColor":"#000000","class":"Player","minHeight":20,"mobileMipmappingEnabled":false,"minWidth":20,"defaultVRPointer":"laser","verticalAlign":"top","downloadEnabled":false,"shadow":false,"gap":10,"contentOpaque":false,"backgroundPreloadEnabled":true,"definitions": [{"class":"PanoramaCamera","initialPosition":{"yaw":-10.86,"class":"PanoramaCameraPosition","pitch":-4.16},"id":"panorama_6375C3F6_6990_C22D_41D3_D3C949CBC3C1_camera","initialSequence":"this.sequence_60283791_6990_C2E4_41C1_CA842CDA5989","automaticZoomSpeed":10},{"id":"video_65A9D33B_6990_421B_41CE_C84695773670","label":trans('video_65A9D33B_6990_421B_41CE_C84695773670.label'),"data":{"label":"Free Green Screen Footage _ Real Band"},"width":1280,"loop":false,"scaleMode":"fit_inside","class":"Video","thumbnailUrl":"media/video_65A9D33B_6990_421B_41CE_C84695773670_t.jpg","height":720,"video":{"width":1144,"class":"VideoResource","height":644,"mp4Url":"media/video_65A9D33B_6990_421B_41CE_C84695773670.mp4"}},{"transparencyActive":false,"id":"IconButton_791477B9_69F0_C224_41D0_C26650202D3E","width":70,"paddingTop":0,"iconURL":"skin/IconButton_791477B9_69F0_C224_41D0_C26650202D3E.png","paddingLeft":0,"right":"3%","borderSize":0,"paddingBottom":0,"maxHeight":70,"maxWidth":70,"class":"IconButton","minHeight":1,"minWidth":1,"verticalAlign":"middle","shadow":false,"backgroundOpacity":0,"height":70,"bottom":"3%","propagateClick":false,"mode":"push","horizontalAlign":"center","borderRadius":0,"paddingRight":0,"cursor":"hand","toolTipHorizontalAlign":"center","data":{"name":"IconButton12329"}},{"closeButtonPressedBackgroundColor":[],"id":"window_7846EAE8_6AF0_4224_41B6_549E3E02B3D0","headerBackgroundOpacity":0,"width":"90%","veilColorDirection":"horizontal","closeButtonBorderRadius":11,"footerBackgroundColorDirection":"vertical","paddingTop":0,"paddingLeft":0,"veilColorRatios":[0,1],"data":{"name":"Window10189"},"borderSize":0,"paddingBottom":0,"closeButtonPressedBackgroundColorRatios":[],"titleFontColor":"#000000","closeButtonPressedIconLineWidth":3,"headerBackgroundColor":["#DDDDDD","#EEEEEE","#FFFFFF"],"bodyBackgroundOpacity":0,"closeButtonRollOverBackgroundColor":[],"scrollBarColor":"#000000","modal":true,"closeButtonRollOverIconLineWidth":2,"closeButtonPaddingRight":0,"class":"Window","titlePaddingTop":5,"verticalAlign":"middle","backgroundColor":[],"closeButtonBackgroundColorRatios":[],"closeButtonPressedBackgroundOpacity":0,"shadow":true,"backgroundOpacity":1,"headerPaddingLeft":10,"gap":10,"footerHeight":5,"headerPaddingBottom":5,"closeButtonRollOverIconColor":"#FFFFFF","closeButtonIconLineWidth":2,"footerBackgroundColorRatios":[0,0.9,1],"footerBackgroundColor":["#FFFFFF","#EEEEEE","#DDDDDD"],"titleFontFamily":"Arial","shadowVerticalLength":0,"closeButtonBackgroundColor":[],"height":"90%","bodyPaddingLeft":0,"propagateClick":false,"backgroundColorDirection":"vertical","headerBackgroundColorDirection":"vertical","scrollBarOpacity":0.5,"horizontalAlign":"center","bodyBackgroundColorDirection":"vertical","closeButtonPaddingBottom":0,"bodyBackgroundColorRatios":[0,0.5,1],"borderRadius":5,"scrollBarWidth":10,"paddingRight":0,"veilShowEffect":{"duration":500,"easing":"cubic_in_out","class":"FadeInEffect"},"closeButtonPressedIconColor":"#FFFFFF","closeButtonBackgroundOpacity":0,"headerVerticalAlign":"middle","closeButtonRollOverBackgroundOpacity":0,"titlePaddingRight":5,"toolTipHorizontalAlign":"center","closeButtonRollOverBackgroundColorRatios":[],"shadowOpacity":0.5,"closeButtonIconWidth":20,"scrollBarMargin":2,"closeButtonIconHeight":20,"shadowSpread":1,"shadowColor":"#000000","overflow":"scroll","children":["this.WebFrame_7C47FF2A_6A91_C224_41B1_4B6FA32A3C4F"],"bodyBackgroundColor":["#FFFFFF","#DDDDDD","#FFFFFF"],"closeButtonPressedBorderSize":0,"closeButtonPressedBorderColor":"#000000","titleFontSize":"1.29vmin","titlePaddingLeft":5,"layout":"vertical","closeButtonRollOverBorderSize":0,"backgroundColorRatios":[],"footerBackgroundOpacity":0,"bodyPaddingRight":0,"closeButtonBorderColor":"#000000","minHeight":20,"hideEffect":{"duration":500,"easing":"cubic_in_out","class":"FadeOutEffect"},"minWidth":20,"closeButtonIconColor":"#B2B2B2","bodyPaddingTop":0,"showEffect":{"duration":500,"easing":"cubic_in_out","class":"FadeInEffect"},"veilColor":["#000000","#000000"],"contentOpaque":false,"closeButtonPaddingLeft":0,"headerBackgroundColorRatios":[0,0.1,1],"closeButtonRollOverBorderColor":"#000000","scrollBarVisible":"rollOver","headerPaddingTop":10,"shadowHorizontalLength":3,"titlePaddingBottom":5,"shadowBlurRadius":6,"headerPaddingRight":0,"bodyPaddingBottom":0,"closeButtonBorderSize":0,"veilHideEffect":{"duration":500,"easing":"cubic_in_out","class":"FadeOutEffect"},"closeButtonPaddingTop":0,"veilOpacity":0.4},{"items":[{"media":"this.panorama_6375C3F6_6990_C22D_41D3_D3C949CBC3C1","end":"this.trigger('tourEnded')","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_6375C3F6_6990_C22D_41D3_D3C949CBC3C1_camera"}],"id":"mainPlayList","class":"PlayList"},{"items":[{"media":"this.video_65A9D33B_6990_421B_41CE_C84695773670","start":"this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.MainViewerVideoPlayer.set('displayPlayOverlay', true); this.MainViewerVideoPlayer.set('clickAction', 'play_pause'); this.changeBackgroundWhilePlay(this.playList_7C452F29_6A91_C224_41D0_DDBAE455427E, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_7C452F29_6A91_C224_41D0_DDBAE455427E, 0)","class":"VideoPlayListItem","begin":"this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)","player":"this.MainViewerVideoPlayer"}],"id":"playList_7C452F29_6A91_C224_41D0_DDBAE455427E","class":"PlayList"},{"buttonCardboardView":"this.IconButton_791477B9_69F0_C224_41D0_C26650202D3E","gyroscopeVerticalDraggingEnabled":true,"class":"PanoramaPlayer","arrowKeysAction":"translate","mouseControlMode":"drag_rotation","viewerArea":"this.MainViewer","id":"MainViewerPanoramaPlayer","touchControlMode":"drag_rotation","displayPlaybackBar":true,"gyroscopeEnabled":true},{"textShadowVerticalLength":5,"fontWeight":"normal","data":{"name":"Label5270"},"id":"Label_795BEF6C_69F3_C23C_41D8_2C0D96B74701","left":20,"width":600,"paddingTop":0,"paddingLeft":0,"textShadowOpacity":0.7,"fontFamily":"Broadway","borderSize":0,"paddingBottom":0,"text":trans('Label_795BEF6C_69F3_C23C_41D8_2C0D96B74701.text'),"class":"Label","minWidth":1,"verticalAlign":"top","minHeight":1,"shadow":false,"backgroundOpacity":0,"height":100,"top":20,"fontSize":"73.9px","textShadowBlurRadius":6,"propagateClick":false,"textShadowColor":"#000000","horizontalAlign":"left","textShadowHorizontalLength":5,"borderRadius":0,"textDecoration":"none","paddingRight":0,"fontStyle":"normal","toolTipHorizontalAlign":"center","fontColor":"#66FF99"},{"playbackBarBorderRadius":0,"playbackBarHeadShadow":true,"id":"MainViewer","firstTransitionDuration":0,"width":"100%","toolTipFontColor":"#606060","vrPointerColor":"#FFFFFF","paddingTop":0,"paddingLeft":0,"playbackBarHeadOpacity":1,"playbackBarHeadShadowVerticalLength":0,"playbackBarProgressBorderColor":"#000000","borderSize":0,"paddingBottom":0,"toolTipPaddingLeft":6,"subtitlesOpacity":1,"progressBorderRadius":0,"toolTipPaddingBottom":4,"progressBarBackgroundColor":["#3399FF"],"progressBorderColor":"#000000","subtitlesBackgroundOpacity":0.2,"toolTipShadowHorizontalLength":0,"playbackBarOpacity":1,"class":"ViewerArea","subtitlesBorderColor":"#FFFFFF","toolTipPaddingRight":6,"progressBarOpacity":1,"progressBackgroundColor":["#FFFFFF"],"transitionDuration":500,"shadow":false,"subtitlesGap":0,"toolTipOpacity":1,"progressBottom":0,"playbackBarHeadBackgroundColor":["#111111","#666666"],"subtitlesTop":0,"playbackBarHeadBorderRadius":0,"subtitlesBackgroundColor":"#000000","height":"100%","subtitlesPaddingLeft":5,"playbackBarProgressOpacity":1,"playbackBarBottom":5,"playbackBarHeadBorderColor":"#000000","progressLeft":0,"subtitlesTextShadowVerticalLength":1,"subtitlesBottom":50,"propagateClick":false,"subtitlesTextShadowColor":"#000000","playbackBarProgressBackgroundColorDirection":"vertical","progressHeight":10,"subtitlesHorizontalAlign":"center","transitionMode":"blending","subtitlesVerticalAlign":"bottom","progressBackgroundColorRatios":[0],"borderRadius":0,"toolTipDisplayTime":600,"playbackBarBackgroundColor":["#FFFFFF"],"playbackBarHeight":10,"paddingRight":0,"progressBorderSize":0,"subtitlesTextShadowOpacity":1,"toolTipHorizontalAlign":"center","progressRight":0,"doubleClickAction":"toggle_fullscreen","toolTipShadowOpacity":1,"toolTipBorderColor":"#767676","toolTipFontFamily":"Arial","toolTipFontSize":"1.11vmin","playbackBarBackgroundOpacity":1,"progressOpacity":1,"progressBarBorderRadius":0,"playbackBarProgressBorderSize":0,"playbackBarHeadBackgroundColorDirection":"vertical","playbackBarHeadWidth":6,"toolTipTextShadowBlurRadius":3,"subtitlesTextDecoration":"none","playbackBarRight":0,"toolTipShadowSpread":0,"subtitlesBorderSize":0,"playbackBarBackgroundColorDirection":"vertical","displayTooltipInTouchScreens":true,"playbackBarProgressBorderRadius":0,"playbackBarBorderSize":0,"subtitlesPaddingRight":5,"vrPointerSelectionTime":2000,"vrPointerSelectionColor":"#FF6600","progressBarBorderSize":0,"playbackBarProgressBackgroundColor":["#3399FF"],"toolTipFontWeight":"normal","progressBarBackgroundColorDirection":"vertical","minHeight":50,"subtitlesFontColor":"#FFFFFF","subtitlesTextShadowHorizontalLength":1,"minWidth":100,"toolTipBackgroundColor":"#F6F6F6","playbackBarHeadShadowHorizontalLength":0,"subtitlesFontSize":"3vmin","toolTipBorderRadius":3,"playbackBarHeadShadowOpacity":0.7,"playbackBarHeadShadowBlurRadius":3,"toolTipBorderSize":1,"playbackBarLeft":0,"toolTipPaddingTop":4,"playbackBarHeadHeight":15,"progressBarBorderColor":"#000000","subtitlesFontFamily":"Arial","progressBarBackgroundColorRatios":[0],"subtitlesTextShadowBlurRadius":0,"playbackBarProgressBackgroundColorRatios":[0],"toolTipFontStyle":"normal","toolTipTextShadowColor":"#000000","toolTipShadowBlurRadius":3,"subtitlesPaddingTop":5,"subtitlesFontWeight":"normal","playbackBarHeadShadowColor":"#000000","progressBackgroundOpacity":1,"toolTipShadowVerticalLength":0,"playbackBarHeadBackgroundColorRatios":[0,1],"toolTipShadowColor":"#333333","toolTipTextShadowOpacity":0,"subtitlesPaddingBottom":5,"playbackBarBorderColor":"#FFFFFF","subtitlesShadow":false,"progressBackgroundColorDirection":"vertical","data":{"name":"Main Viewer"},"playbackBarHeadBorderSize":0},{"class":"VideoPlayer","clickAction":"play_pause","viewerArea":"this.MainViewer","id":"MainViewerVideoPlayer","displayPlaybackBar":true,"displayPlayOverlay":true},{"vfov":180,"overlays":["this.overlay_625AF8D3_6990_CE6B_41B0_C654949F0F85","this.overlay_7EF26EB2_6AF0_4225_41DA_6FC4BA2C0855","this.overlay_7B2AFAC7_6AF0_426B_41AF_2AD996B4D9F9","this.overlay_780238B9_6A90_CE27_41C3_3FC1B5274425","this.overlay_7802A8BA_6A90_CE25_41C0_9810D97840AA"],"hfov":360,"label":trans('panorama_6375C3F6_6990_C22D_41D3_D3C949CBC3C1.label'),"id":"panorama_6375C3F6_6990_C22D_41D3_D3C949CBC3C1","frames":[{"cube":{"class":"ImageResource","levels":[{"url":"media/panorama_6375C3F6_6990_C22D_41D3_D3C949CBC3C1_0/{face}/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","tags":"ondemand","width":24576,"rowCount":8,"height":4096,"colCount":48},{"url":"media/panorama_6375C3F6_6990_C22D_41D3_D3C949CBC3C1_0/{face}/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","tags":"ondemand","width":12288,"rowCount":4,"height":2048,"colCount":24},{"url":"media/panorama_6375C3F6_6990_C22D_41D3_D3C949CBC3C1_0/{face}/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","tags":"ondemand","width":6144,"rowCount":2,"height":1024,"colCount":12},{"url":"media/panorama_6375C3F6_6990_C22D_41D3_D3C949CBC3C1_0/{face}/3/{row}_{column}.jpg","class":"TiledImageResourceLevel","tags":["ondemand","preload"],"width":3072,"rowCount":1,"height":512,"colCount":6},{"url":"media/panorama_6375C3F6_6990_C22D_41D3_D3C949CBC3C1_0/{face}/vr/0.jpg","class":"TiledImageResourceLevel","tags":"mobilevr","width":9216,"rowCount":1,"height":1536,"colCount":6}]},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_6375C3F6_6990_C22D_41D3_D3C949CBC3C1_t.jpg"}],"partial":false,"data":{"label":"Esplanade_Stage_20201012_111321"},"class":"Panorama","thumbnailUrl":"media/panorama_6375C3F6_6990_C22D_41D3_D3C949CBC3C1_t.jpg","hfovMax":130,"pitch":0},{"closeButtonPressedBackgroundColor":[],"id":"window_7B8ACBA3_6A90_4224_41CC_19601AD27619","headerBackgroundOpacity":0,"width":"90%","veilColorDirection":"horizontal","closeButtonBorderRadius":11,"footerBackgroundColorDirection":"vertical","paddingTop":0,"paddingLeft":0,"veilColorRatios":[0,1],"data":{"name":"Window10189"},"borderSize":0,"paddingBottom":0,"closeButtonPressedBackgroundColorRatios":[],"titleFontColor":"#000000","closeButtonPressedIconLineWidth":3,"headerBackgroundColor":["#DDDDDD","#EEEEEE","#FFFFFF"],"bodyBackgroundOpacity":0,"closeButtonRollOverBackgroundColor":[],"scrollBarColor":"#000000","modal":true,"closeButtonRollOverIconLineWidth":2,"closeButtonPaddingRight":0,"class":"Window","titlePaddingTop":5,"verticalAlign":"middle","backgroundColor":[],"closeButtonBackgroundColorRatios":[],"closeButtonPressedBackgroundOpacity":0,"shadow":true,"backgroundOpacity":1,"headerPaddingLeft":10,"gap":10,"footerHeight":5,"headerPaddingBottom":5,"closeButtonRollOverIconColor":"#FFFFFF","closeButtonIconLineWidth":2,"footerBackgroundColorRatios":[0,0.9,1],"footerBackgroundColor":["#FFFFFF","#EEEEEE","#DDDDDD"],"titleFontFamily":"Arial","shadowVerticalLength":0,"closeButtonBackgroundColor":[],"height":"90%","bodyPaddingLeft":0,"propagateClick":false,"backgroundColorDirection":"vertical","headerBackgroundColorDirection":"vertical","scrollBarOpacity":0.5,"horizontalAlign":"center","bodyBackgroundColorDirection":"vertical","closeButtonPaddingBottom":0,"bodyBackgroundColorRatios":[0,0.5,1],"borderRadius":5,"scrollBarWidth":10,"paddingRight":0,"veilShowEffect":{"duration":500,"easing":"cubic_in_out","class":"FadeInEffect"},"closeButtonPressedIconColor":"#FFFFFF","closeButtonBackgroundOpacity":0,"headerVerticalAlign":"middle","closeButtonRollOverBackgroundOpacity":0,"titlePaddingRight":5,"toolTipHorizontalAlign":"center","closeButtonRollOverBackgroundColorRatios":[],"shadowOpacity":0.5,"closeButtonIconWidth":20,"scrollBarMargin":2,"closeButtonIconHeight":20,"shadowSpread":1,"shadowColor":"#000000","overflow":"scroll","children":["this.WebFrame_7C47CF2F_6A91_C23C_41D2_9129259A5993"],"bodyBackgroundColor":["#FFFFFF","#DDDDDD","#FFFFFF"],"closeButtonPressedBorderSize":0,"closeButtonPressedBorderColor":"#000000","titleFontSize":"1.29vmin","titlePaddingLeft":5,"layout":"vertical","closeButtonRollOverBorderSize":0,"backgroundColorRatios":[],"footerBackgroundOpacity":0,"bodyPaddingRight":0,"closeButtonBorderColor":"#000000","minHeight":20,"hideEffect":{"duration":500,"easing":"cubic_in_out","class":"FadeOutEffect"},"minWidth":20,"closeButtonIconColor":"#B2B2B2","bodyPaddingTop":0,"showEffect":{"duration":500,"easing":"cubic_in_out","class":"FadeInEffect"},"veilColor":["#000000","#000000"],"contentOpaque":false,"closeButtonPaddingLeft":0,"headerBackgroundColorRatios":[0,0.1,1],"closeButtonRollOverBorderColor":"#000000","scrollBarVisible":"rollOver","headerPaddingTop":10,"shadowHorizontalLength":3,"titlePaddingBottom":5,"shadowBlurRadius":6,"headerPaddingRight":0,"bodyPaddingBottom":0,"closeButtonBorderSize":0,"veilHideEffect":{"duration":500,"easing":"cubic_in_out","class":"FadeOutEffect"},"closeButtonPaddingTop":0,"veilOpacity":0.4},{"id":"sequence_60283791_6990_C2E4_41C1_CA842CDA5989","movements":[{"yawSpeed":7.96,"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawDelta":18.5},{"yawSpeed":7.96,"easing":"linear","class":"DistancePanoramaCameraMovement","yawDelta":323},{"yawSpeed":7.96,"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawDelta":18.5}],"restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence"},{"id":"WebFrame_7C47FF2A_6A91_C224_41B1_4B6FA32A3C4F","width":"100%","paddingTop":0,"paddingLeft":0,"borderSize":0,"paddingBottom":0,"scrollEnabled":true,"backgroundColorRatios":[],"class":"WebFrame","minHeight":0,"minWidth":0,"shadow":false,"backgroundOpacity":1,"backgroundColor":[],"height":"100%","propagateClick":false,"backgroundColorDirection":"vertical","borderRadius":0,"paddingRight":0,"toolTipHorizontalAlign":"center","data":{"name":"WebFrame11892"},"insetBorder":false},{"id":"overlay_625AF8D3_6990_CE6B_41B0_C654949F0F85","video":{"width":1144,"class":"VideoResource","height":644,"mp4Url":"media/video_65A9D33B_6990_421B_41CE_C84695773670.mp4"},"loop":false,"image":"this.res_65CC971B_6990_C3E4_41BC_49C37EE9F5C5","pitch":-4.75,"useHandCursor":true,"roll":1.17,"click":"if(this.overlay_625AF8D3_6990_CE6B_41B0_C654949F0F85.get('state') != 'playing'){ this.overlay_625AF8D3_6990_CE6B_41B0_C654949F0F85.play(); } else { this.overlay_625AF8D3_6990_CE6B_41B0_C654949F0F85.pause(); }","chromaColor":"#28B48F","chromaSmoothing":0.05,"enabledInCardboard":true,"rotationY":2.17,"yaw":-5.16,"vfov":32.48,"hfov":52.17,"videoVisibleOnStop":false,"data":{"label":"Video"},"blending":0,"cues":[],"class":"VideoPanoramaOverlay","rotationX":5.33,"chromaThreshold":0.12,"distance":50,"autoplay":false},{"rollOverDisplay":false,"maps":[],"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_7BD56F63_6AF0_4224_41D6_DBBA6D84B4BD"],"useHandCursor":false,"items":[{"data":{"label":"Text"},"image":{"levels":[{"url":"media/panorama_6375C3F6_6990_C22D_41D3_D3C949CBC3C1_HS_ztkn3bf3.png","width":1610,"class":"ImageResourceLevel","height":615}],"class":"ImageResource"},"pitch":-1.41,"yaw":-69.54,"hfov":47.67,"distance":50,"class":"HotspotPanoramaOverlayImage"}],"id":"overlay_7EF26EB2_6AF0_4225_41DA_6FC4BA2C0855","data":{"label":"Text"},"enabledInCardboard":true},{"rollOverDisplay":false,"maps":[],"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_7AD53BB8_6AF0_4224_41BD_EF8BFB715FDF"],"useHandCursor":true,"items":[{"vfov":10.26,"hfov":10.26,"scaleMode":"fit_inside","data":{"label":"Image"},"horizontalAlign":"center","distance":50,"image":"this.res_78B8B5E1_6AF7_C627_41C3_7C254799D9D8","pitch":-4.92,"verticalAlign":"middle","yaw":-63.25,"class":"HotspotPanoramaOverlayImage"}],"id":"overlay_7B2AFAC7_6AF0_426B_41AF_2AD996B4D9F9","data":{"label":"Image"}},{"rollOverDisplay":false,"maps":[],"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_7802F8B9_6A90_CE27_41D8_ABAAA8CA63E2"],"useHandCursor":false,"items":[{"data":{"label":"Text"},"image":{"levels":[{"url":"media/panorama_6375C3F6_6990_C22D_41D3_D3C949CBC3C1_HS_mq82z9ll.png","width":1791,"class":"ImageResourceLevel","height":615}],"class":"ImageResource"},"pitch":1,"yaw":59.77,"hfov":53.03,"distance":50,"class":"HotspotPanoramaOverlayImage"}],"id":"overlay_780238B9_6A90_CE27_41C3_3FC1B5274425","data":{"label":"Text"},"enabledInCardboard":true},{"rollOverDisplay":false,"maps":[],"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_780358BA_6A90_CE25_41D4_5B2A22990ECA"],"useHandCursor":true,"items":[{"vfov":10.28,"hfov":10.28,"scaleMode":"fit_inside","data":{"label":"Image"},"horizontalAlign":"center","distance":50,"image":"this.res_78B8B5E1_6AF7_C627_41C3_7C254799D9D8","pitch":-2.87,"verticalAlign":"middle","yaw":57.9,"class":"HotspotPanoramaOverlayImage"}],"id":"overlay_7802A8BA_6A90_CE25_41C0_9810D97840AA","data":{"label":"Image"}},{"id":"WebFrame_7C47CF2F_6A91_C23C_41D2_9129259A5993","width":"100%","paddingTop":0,"paddingLeft":0,"borderSize":0,"paddingBottom":0,"scrollEnabled":true,"backgroundColorRatios":[],"class":"WebFrame","minHeight":0,"minWidth":0,"shadow":false,"backgroundOpacity":1,"backgroundColor":[],"height":"100%","propagateClick":false,"backgroundColorDirection":"vertical","borderRadius":0,"paddingRight":0,"toolTipHorizontalAlign":"center","data":{"name":"WebFrame11893"},"insetBorder":false},{"levels":[{"url":"media/res_65CC971B_6990_C3E4_41BC_49C37EE9F5C5_0.png","width":1280,"class":"ImageResourceLevel","height":720}],"id":"res_65CC971B_6990_C3E4_41BC_49C37EE9F5C5","class":"ImageResource"},{"id":"HotspotPanoramaOverlayArea_7BD56F63_6AF0_4224_41D6_DBBA6D84B4BD","class":"HotspotPanoramaOverlayArea","mapColor":"any"},{"click":"this.WebFrame_7C47FF2A_6A91_C224_41B1_4B6FA32A3C4F.set('url', this.translate('PopupWebFrameBehaviour_7845AAE6_6AF0_422C_4183_04A750343194.url')); this.showWindow(this.window_7846EAE8_6AF0_4224_41B6_549E3E02B3D0, null, false)","id":"HotspotPanoramaOverlayArea_7AD53BB8_6AF0_4224_41BD_EF8BFB715FDF","class":"HotspotPanoramaOverlayArea","mapColor":"any"},{"levels":[{"url":"media/res_78B8B5E1_6AF7_C627_41C3_7C254799D9D8_0.png","width":119,"class":"ImageResourceLevel","height":119}],"id":"res_78B8B5E1_6AF7_C627_41C3_7C254799D9D8","class":"ImageResource"},{"id":"HotspotPanoramaOverlayArea_7802F8B9_6A90_CE27_41D8_ABAAA8CA63E2","class":"HotspotPanoramaOverlayArea","mapColor":"any"},{"click":"this.WebFrame_7C47CF2F_6A91_C23C_41D2_9129259A5993.set('url', this.translate('PopupWebFrameBehaviour_780B18C0_6A90_CE65_41D4_2F2F0E985964.url')); this.showWindow(this.window_7B8ACBA3_6A90_4224_41CC_19601AD27619, null, false)","id":"HotspotPanoramaOverlayArea_780358BA_6A90_CE25_41D4_5B2A22990ECA","class":"HotspotPanoramaOverlayArea","mapColor":"any"}],"scrollBarVisible":"rollOver","propagateClick":false,"start":"this.init()","scripts":{"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"getMediaByName":TDV.Tour.Script.getMediaByName,"showWindow":TDV.Tour.Script.showWindow,"resumePlayers":TDV.Tour.Script.resumePlayers,"initQuiz":TDV.Tour.Script.initQuiz,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"playAudioList":TDV.Tour.Script.playAudioList,"initGA":TDV.Tour.Script.initGA,"showPopupImage":TDV.Tour.Script.showPopupImage,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"shareSocial":TDV.Tour.Script.shareSocial,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"getOverlays":TDV.Tour.Script.getOverlays,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"isPanorama":TDV.Tour.Script.isPanorama,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"cloneCamera":TDV.Tour.Script.cloneCamera,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"getPixels":TDV.Tour.Script.getPixels,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"getComponentByName":TDV.Tour.Script.getComponentByName,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"init":TDV.Tour.Script.init,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"setLocale":TDV.Tour.Script.setLocale,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"setValue":TDV.Tour.Script.setValue,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"mixObject":TDV.Tour.Script.mixObject,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"quizStart":TDV.Tour.Script.quizStart,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"quizShowScore":TDV.Tour.Script.quizShowScore,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"existsKey":TDV.Tour.Script.existsKey,"registerKey":TDV.Tour.Script.registerKey,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"quizFinish":TDV.Tour.Script.quizFinish,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"unregisterKey":TDV.Tour.Script.unregisterKey,"historyGoBack":TDV.Tour.Script.historyGoBack,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"translate":TDV.Tour.Script.translate,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"historyGoForward":TDV.Tour.Script.historyGoForward,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"getKey":TDV.Tour.Script.getKey,"openLink":TDV.Tour.Script.openLink,"setMapLocation":TDV.Tour.Script.setMapLocation},"mediaActivationMode":"window","horizontalAlign":"left","borderRadius":0,"scrollBarOpacity":0.5,"height":"100%","paddingRight":0,"mouseWheelEnabled":true,"toolTipHorizontalAlign":"center"};
    if (d['data'] == undefined)
        d['data'] = {};
    d['data']['translateObjs'] = c;
    d['data']['history'] = {};
    d['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](d);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2020.3.21.js.map
//Generated with v2020.3.21, Tue Oct 27 2020