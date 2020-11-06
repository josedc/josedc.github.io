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
            return O !== undefined && O['get']('viewerArea') == this['getMainViewer']();
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
                    var P = this['_getPlayListsWithViewer'](this['getMainViewer']());
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
    var d = {"definitions": [{"hfovMin":"110%","thumbnailUrl":"media/panorama_8CCE91CF_9DD9_8CA8_41CF_C1C178D69771_t.jpg","vfov":180,"label":trans('panorama_8CCE91CF_9DD9_8CA8_41CF_C1C178D69771.label'),"id":"panorama_8CCE91CF_9DD9_8CA8_41CF_C1C178D69771","hfovMax":130,"frames":[{"cube":{"class":"ImageResource","levels":[{"url":"media/panorama_8CCE91CF_9DD9_8CA8_41CF_C1C178D69771_0/{face}/0/{row}_{column}.jpg","colCount":48,"rowCount":8,"height":4096,"tags":"ondemand","width":24576,"class":"TiledImageResourceLevel"},{"url":"media/panorama_8CCE91CF_9DD9_8CA8_41CF_C1C178D69771_0/{face}/1/{row}_{column}.jpg","colCount":24,"rowCount":4,"height":2048,"tags":"ondemand","width":12288,"class":"TiledImageResourceLevel"},{"url":"media/panorama_8CCE91CF_9DD9_8CA8_41CF_C1C178D69771_0/{face}/2/{row}_{column}.jpg","colCount":12,"rowCount":2,"height":1024,"tags":"ondemand","width":6144,"class":"TiledImageResourceLevel"},{"url":"media/panorama_8CCE91CF_9DD9_8CA8_41CF_C1C178D69771_0/{face}/3/{row}_{column}.jpg","colCount":6,"rowCount":1,"height":512,"tags":["ondemand","preload"],"width":3072,"class":"TiledImageResourceLevel"},{"url":"media/panorama_8CCE91CF_9DD9_8CA8_41CF_C1C178D69771_0/{face}/vr/0.jpg","colCount":6,"rowCount":1,"height":1536,"tags":"mobilevr","width":9216,"class":"TiledImageResourceLevel"}]},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_8CCE91CF_9DD9_8CA8_41CF_C1C178D69771_t.jpg"}],"partial":false,"class":"Panorama","pitch":0,"data":{"label":"IMG_20190913_105653x2"},"hfov":360},{"buttonCardboardView":"this.IconButton_912E7A1D_9DB7_BFA8_41CD_B4058E3B1AEF","mouseControlMode":"drag_rotation","id":"MainViewerPanoramaPlayer","gyroscopeEnabled":true,"zoomEnabled":true,"touchControlMode":"drag_rotation","viewerArea":"this.MainViewer","gyroscopeVerticalDraggingEnabled":true,"displayPlaybackBar":true,"arrowKeysAction":"translate","class":"PanoramaPlayer"},{"backgroundColorRatios":[0],"backgroundOpacity":0.91,"shadowSpread":1,"id":"HTMLText_8CE55828_9DD6_9BE8_41B9_CDA21C02E743","left":180,"scrollBarColor":"#000000","shadowColor":"#000000","borderSize":3,"width":"10%","scrollBarVisible":"rollOver","class":"HTMLText","paddingTop":20,"paddingBottom":10,"shadowVerticalLength":2,"borderColor":"#000000","propagateClick":false,"scrollBarWidth":10,"backgroundColor":["#FFFFFF"],"borderRadius":0,"height":"8%","bottom":20,"backgroundColorDirection":"vertical","scrollBarOpacity":0.5,"shadowBlurRadius":7,"click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_8EE3DE23_9C49_9798_41D1_366ABC6BFB16, 0, 0, 110 || TDV.Player.DEFAULT_PANORAMA_HFOV); this.mainPlayList.set('selectedIndex', 1)","minHeight":1,"shadow":true,"scrollBarMargin":2,"paddingLeft":20,"minWidth":1,"shadowOpacity":0.19,"data":{"name":"Pano 2"},"shadowHorizontalLength":2,"toolTipHorizontalAlign":"center","html":trans('HTMLText_8CE55828_9DD6_9BE8_41B9_CDA21C02E743.html'),"paddingRight":20},{"automaticZoomSpeed":10,"initialSequence":"this.sequence_8CC73845_9DD9_9B98_41DA_F685239B1FBC","initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","hfov":110,"pitch":0},"id":"panorama_8CCE91CF_9DD9_8CA8_41CF_C1C178D69771_camera","class":"PanoramaCamera"},{"toolTipPaddingLeft":6,"playbackBarHeadShadowOpacity":0.7,"id":"MainViewer","subtitlesHorizontalAlign":"center","playbackBarProgressBackgroundColorRatios":[0],"transitionMode":"blending","doubleClickAction":"toggle_fullscreen","subtitlesVerticalAlign":"bottom","toolTipShadowBlurRadius":3,"width":"100%","subtitlesTextShadowOpacity":1,"playbackBarBorderRadius":0,"toolTipShadowOpacity":1,"subtitlesBorderSize":0,"playbackBarProgressBorderColor":"#000000","subtitlesTextShadowVerticalLength":1,"playbackBarBorderColor":"#FFFFFF","vrPointerColor":"#FFFFFF","subtitlesFontColor":"#FFFFFF","firstTransitionDuration":0,"playbackBarHeadBorderRadius":0,"playbackBarHeadShadowHorizontalLength":0,"playbackBarProgressOpacity":1,"subtitlesFontWeight":"normal","toolTipPaddingRight":6,"toolTipBorderRadius":3,"playbackBarHeadBorderColor":"#000000","playbackBarBorderSize":0,"height":"100%","toolTipFontWeight":"normal","playbackBarBackgroundOpacity":1,"toolTipTextShadowColor":"#000000","subtitlesPaddingLeft":5,"toolTipBorderSize":1,"toolTipFontFamily":"Arial","subtitlesBottom":50,"toolTipPaddingTop":4,"minHeight":50,"progressBackgroundColorRatios":[0],"paddingLeft":0,"minWidth":100,"subtitlesPaddingRight":5,"progressOpacity":1,"progressRight":0,"toolTipHorizontalAlign":"center","paddingRight":0,"progressBarBackgroundColorDirection":"vertical","playbackBarHeadShadowBlurRadius":3,"progressBarBackgroundColorRatios":[0],"playbackBarLeft":0,"progressBarBorderColor":"#000000","progressBackgroundColorDirection":"vertical","playbackBarHeadHeight":15,"subtitlesTextShadowColor":"#000000","playbackBarHeadShadowColor":"#000000","toolTipBorderColor":"#767676","subtitlesTextShadowHorizontalLength":1,"toolTipTextShadowBlurRadius":3,"playbackBarHeadBackgroundColorRatios":[0,1],"subtitlesTop":0,"toolTipShadowColor":"#333333","toolTipTextShadowOpacity":0,"progressBarBackgroundColor":["#3399FF"],"playbackBarHeadShadow":true,"progressBorderColor":"#000000","playbackBarHeadBorderSize":0,"borderSize":0,"playbackBarHeadOpacity":1,"toolTipShadowHorizontalLength":0,"progressBackgroundColor":["#FFFFFF"],"class":"ViewerArea","subtitlesFontSize":"3vmin","paddingTop":0,"paddingBottom":0,"toolTipFontColor":"#606060","subtitlesPaddingBottom":5,"progressBottom":0,"playbackBarOpacity":1,"progressBarOpacity":1,"subtitlesBorderColor":"#FFFFFF","playbackBarHeadBackgroundColor":["#111111","#666666"],"progressHeight":10,"subtitlesBackgroundOpacity":0.2,"propagateClick":false,"toolTipPaddingBottom":4,"toolTipFontSize":"1.11vmin","progressBorderSize":0,"playbackBarBottom":5,"progressBarBorderSize":0,"borderRadius":0,"progressBarBorderRadius":0,"subtitlesTextShadowBlurRadius":0,"subtitlesTextDecoration":"none","playbackBarProgressBackgroundColorDirection":"vertical","toolTipBackgroundColor":"#F6F6F6","playbackBarBackgroundColor":["#FFFFFF"],"playbackBarHeight":10,"progressBackgroundOpacity":1,"toolTipFontStyle":"normal","playbackBarHeadWidth":6,"toolTipDisplayTime":600,"playbackBarHeadBackgroundColorDirection":"vertical","playbackBarProgressBorderSize":0,"progressBorderRadius":0,"shadow":false,"playbackBarBackgroundColorDirection":"vertical","subtitlesFontFamily":"Arial","subtitlesPaddingTop":5,"toolTipOpacity":1,"playbackBarRight":0,"toolTipShadowSpread":0,"toolTipShadowVerticalLength":0,"subtitlesOpacity":1,"playbackBarProgressBorderRadius":0,"displayTooltipInTouchScreens":true,"playbackBarProgressBackgroundColor":["#3399FF"],"progressLeft":0,"data":{"name":"Main Viewer"},"vrPointerSelectionTime":2000,"subtitlesBackgroundColor":"#000000","subtitlesGap":0,"vrPointerSelectionColor":"#FF6600","transitionDuration":500,"subtitlesShadow":false,"playbackBarHeadShadowVerticalLength":0},{"backgroundColorRatios":[0],"backgroundOpacity":0.91,"shadowSpread":1,"id":"HTMLText_934104B4_9DCA_B4F8_41C6_1FBB49746C4C","left":340,"scrollBarColor":"#000000","shadowColor":"#000000","borderSize":3,"width":"10%","scrollBarVisible":"rollOver","class":"HTMLText","paddingTop":20,"paddingBottom":10,"shadowVerticalLength":2,"borderColor":"#000000","propagateClick":false,"scrollBarWidth":10,"backgroundColor":["#FFFFFF"],"borderRadius":0,"height":"8%","bottom":20,"backgroundColorDirection":"vertical","scrollBarOpacity":0.5,"shadowBlurRadius":7,"click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_8EE40E23_9C49_9798_41A8_EDAD58578D88, 0, 0, 110 || TDV.Player.DEFAULT_PANORAMA_HFOV); this.mainPlayList.set('selectedIndex', 2)","minHeight":1,"shadow":true,"scrollBarMargin":2,"paddingLeft":20,"minWidth":1,"shadowOpacity":0.19,"data":{"name":"Pano 3"},"shadowHorizontalLength":2,"toolTipHorizontalAlign":"center","html":trans('HTMLText_934104B4_9DCA_B4F8_41C6_1FBB49746C4C.html'),"paddingRight":20},{"items":["this.PanoramaPlayListItem_8EE39E23_9C49_9798_41B7_AECBE0DF0EB8","this.PanoramaPlayListItem_8EE3DE23_9C49_9798_41D1_366ABC6BFB16","this.PanoramaPlayListItem_8EE40E23_9C49_9798_41A8_EDAD58578D88"],"id":"mainPlayList","class":"PlayList"},{"backgroundColorRatios":[0],"backgroundOpacity":0.91,"shadowSpread":1,"id":"HTMLText_93531ED9_9DCF_94A8_41CB_039C3F78DE5F","left":20,"scrollBarColor":"#000000","shadowColor":"#000000","borderSize":3,"width":"10%","scrollBarVisible":"rollOver","class":"HTMLText","paddingTop":20,"paddingBottom":10,"shadowVerticalLength":2,"borderColor":"#000000","propagateClick":false,"scrollBarWidth":10,"backgroundColor":["#FFFFFF"],"borderRadius":0,"height":"8%","bottom":20,"backgroundColorDirection":"vertical","scrollBarOpacity":0.5,"shadowBlurRadius":7,"click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_8EE39E23_9C49_9798_41B7_AECBE0DF0EB8, 0, 0, 110 || TDV.Player.DEFAULT_PANORAMA_HFOV); this.mainPlayList.set('selectedIndex', 0)","minHeight":1,"shadow":true,"scrollBarMargin":2,"paddingLeft":20,"minWidth":1,"shadowOpacity":0.19,"data":{"name":"Pano 1"},"shadowHorizontalLength":2,"toolTipHorizontalAlign":"center","html":trans('HTMLText_93531ED9_9DCF_94A8_41CB_039C3F78DE5F.html'),"paddingRight":20},{"automaticZoomSpeed":10,"initialSequence":"this.sequence_90D781BA_9DBF_8CE8_41C9_A9B68980D084","initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","hfov":110,"pitch":0},"id":"panorama_90D5366E_9DBF_B468_41B4_1EDA28E8B11B_camera","class":"PanoramaCamera"},{"hfovMin":"110%","class":"Panorama","thumbnailUrl":"media/panorama_90D5366E_9DBF_B468_41B4_1EDA28E8B11B_t.jpg","vfov":180,"label":trans('panorama_90D5366E_9DBF_B468_41B4_1EDA28E8B11B.label'),"id":"panorama_90D5366E_9DBF_B468_41B4_1EDA28E8B11B","hfovMax":130,"frames":[{"cube":{"class":"ImageResource","levels":[{"url":"media/panorama_90D5366E_9DBF_B468_41B4_1EDA28E8B11B_0/{face}/0/{row}_{column}.jpg","colCount":48,"rowCount":8,"height":4096,"tags":"ondemand","width":24576,"class":"TiledImageResourceLevel"},{"url":"media/panorama_90D5366E_9DBF_B468_41B4_1EDA28E8B11B_0/{face}/1/{row}_{column}.jpg","colCount":24,"rowCount":4,"height":2048,"tags":"ondemand","width":12288,"class":"TiledImageResourceLevel"},{"url":"media/panorama_90D5366E_9DBF_B468_41B4_1EDA28E8B11B_0/{face}/2/{row}_{column}.jpg","colCount":12,"rowCount":2,"height":1024,"tags":"ondemand","width":6144,"class":"TiledImageResourceLevel"},{"url":"media/panorama_90D5366E_9DBF_B468_41B4_1EDA28E8B11B_0/{face}/3/{row}_{column}.jpg","colCount":6,"rowCount":1,"height":512,"tags":["ondemand","preload"],"width":3072,"class":"TiledImageResourceLevel"},{"url":"media/panorama_90D5366E_9DBF_B468_41B4_1EDA28E8B11B_0/{face}/vr/0.jpg","colCount":6,"rowCount":1,"height":1536,"tags":"mobilevr","width":9216,"class":"TiledImageResourceLevel"}]},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_90D5366E_9DBF_B468_41B4_1EDA28E8B11B_t.jpg"}],"data":{"label":"IMG_20190913_111048x2"},"partial":false,"hfov":360,"pitch":0},{"automaticZoomSpeed":10,"initialSequence":"this.sequence_8CC459A1_9DDA_9C98_41E3_0C9D5F17950A","initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","hfov":110,"pitch":0},"id":"panorama_8CAA26D8_9DDA_F4A8_41DC_A2D6509CDE95_camera","class":"PanoramaCamera"},{"backgroundOpacity":0,"id":"IconButton_912E7A1D_9DB7_BFA8_41CD_B4058E3B1AEF","width":70,"right":20,"borderSize":0,"class":"IconButton","paddingTop":0,"paddingBottom":0,"iconURL":"skin/IconButton_912E7A1D_9DB7_BFA8_41CD_B4058E3B1AEF.png","propagateClick":false,"transparencyActive":false,"height":70,"borderRadius":0,"verticalAlign":"middle","bottom":20,"horizontalAlign":"center","maxHeight":70,"maxWidth":70,"minHeight":1,"shadow":false,"paddingLeft":0,"minWidth":1,"mode":"push","data":{"name":"IconButton12329"},"toolTipHorizontalAlign":"center","cursor":"hand","paddingRight":0},{"hfovMin":"110%","class":"Panorama","thumbnailUrl":"media/panorama_8CAA26D8_9DDA_F4A8_41DC_A2D6509CDE95_t.jpg","vfov":180,"label":trans('panorama_8CAA26D8_9DDA_F4A8_41DC_A2D6509CDE95.label'),"id":"panorama_8CAA26D8_9DDA_F4A8_41DC_A2D6509CDE95","hfovMax":130,"frames":[{"cube":{"class":"ImageResource","levels":[{"url":"media/panorama_8CAA26D8_9DDA_F4A8_41DC_A2D6509CDE95_0/{face}/0/{row}_{column}.jpg","colCount":48,"rowCount":8,"height":4096,"tags":"ondemand","width":24576,"class":"TiledImageResourceLevel"},{"url":"media/panorama_8CAA26D8_9DDA_F4A8_41DC_A2D6509CDE95_0/{face}/1/{row}_{column}.jpg","colCount":24,"rowCount":4,"height":2048,"tags":"ondemand","width":12288,"class":"TiledImageResourceLevel"},{"url":"media/panorama_8CAA26D8_9DDA_F4A8_41DC_A2D6509CDE95_0/{face}/2/{row}_{column}.jpg","colCount":12,"rowCount":2,"height":1024,"tags":"ondemand","width":6144,"class":"TiledImageResourceLevel"},{"url":"media/panorama_8CAA26D8_9DDA_F4A8_41DC_A2D6509CDE95_0/{face}/3/{row}_{column}.jpg","colCount":6,"rowCount":1,"height":512,"tags":["ondemand","preload"],"width":3072,"class":"TiledImageResourceLevel"},{"url":"media/panorama_8CAA26D8_9DDA_F4A8_41DC_A2D6509CDE95_0/{face}/vr/0.jpg","colCount":6,"rowCount":1,"height":1536,"tags":"mobilevr","width":9216,"class":"TiledImageResourceLevel"}]},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_8CAA26D8_9DDA_F4A8_41DC_A2D6509CDE95_t.jpg"}],"data":{"label":"VID_20190913_110715x2"},"partial":false,"hfov":360,"pitch":0},{"id":"sequence_8CC73845_9DD9_9B98_41DA_F685239B1FBC","restartMovementOnUserInteraction":false,"movements":[{"yawDelta":18.5,"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":323,"easing":"linear","class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":18.5,"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawSpeed":7.96}],"class":"PanoramaCameraSequence"},{"media":"this.panorama_90D5366E_9DBF_B468_41B4_1EDA28E8B11B","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)","player":"this.MainViewerPanoramaPlayer","id":"PanoramaPlayListItem_8EE39E23_9C49_9798_41B7_AECBE0DF0EB8","class":"PanoramaPlayListItem","camera":"this.panorama_90D5366E_9DBF_B468_41B4_1EDA28E8B11B_camera"},{"media":"this.panorama_8CCE91CF_9DD9_8CA8_41CF_C1C178D69771","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)","player":"this.MainViewerPanoramaPlayer","id":"PanoramaPlayListItem_8EE3DE23_9C49_9798_41D1_366ABC6BFB16","class":"PanoramaPlayListItem","camera":"this.panorama_8CCE91CF_9DD9_8CA8_41CF_C1C178D69771_camera"},{"media":"this.panorama_8CAA26D8_9DDA_F4A8_41DC_A2D6509CDE95","end":"this.trigger('tourEnded')","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 0)","player":"this.MainViewerPanoramaPlayer","id":"PanoramaPlayListItem_8EE40E23_9C49_9798_41A8_EDAD58578D88","class":"PanoramaPlayListItem","camera":"this.panorama_8CAA26D8_9DDA_F4A8_41DC_A2D6509CDE95_camera"},{"id":"sequence_90D781BA_9DBF_8CE8_41C9_A9B68980D084","restartMovementOnUserInteraction":false,"movements":[{"yawDelta":18.5,"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":323,"easing":"linear","class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":18.5,"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawSpeed":7.96}],"class":"PanoramaCameraSequence"},{"id":"sequence_8CC459A1_9DDA_9C98_41E3_0C9D5F17950A","restartMovementOnUserInteraction":false,"movements":[{"yawDelta":18.5,"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":323,"easing":"linear","class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":18.5,"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawSpeed":7.96}],"class":"PanoramaCameraSequence"}],"start":"this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_912E7A1D_9DB7_BFA8_41CD_B4058E3B1AEF], 'cardboardAvailable')","defaultVRPointer":"laser","id":"rootPlayer","left":429.15,"width":"100%","scrollBarColor":"#000000","scrollBarVisible":"rollOver","borderSize":0,"desktopMipmappingEnabled":false,"class":"Player","backgroundPreloadEnabled":true,"paddingTop":0,"paddingBottom":0,"children":["this.MainViewer","this.IconButton_912E7A1D_9DB7_BFA8_41CD_B4058E3B1AEF","this.HTMLText_93531ED9_9DCF_94A8_41CB_039C3F78DE5F","this.HTMLText_8CE55828_9DD6_9BE8_41B9_CDA21C02E743","this.HTMLText_934104B4_9DCA_B4F8_41C6_1FBB49746C4C"],"layout":"absolute","mobileMipmappingEnabled":false,"scrollBarWidth":10,"propagateClick":false,"scripts":{"setValue":TDV.Tour.Script.setValue,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"resumePlayers":TDV.Tour.Script.resumePlayers,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"getKey":TDV.Tour.Script.getKey,"historyGoForward":TDV.Tour.Script.historyGoForward,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"initGA":TDV.Tour.Script.initGA,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"mixObject":TDV.Tour.Script.mixObject,"getMainViewer":TDV.Tour.Script.getMainViewer,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"initQuiz":TDV.Tour.Script.initQuiz,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"playAudioList":TDV.Tour.Script.playAudioList,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"setMapLocation":TDV.Tour.Script.setMapLocation,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"isPanorama":TDV.Tour.Script.isPanorama,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"shareSocial":TDV.Tour.Script.shareSocial,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"getPixels":TDV.Tour.Script.getPixels,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"setLocale":TDV.Tour.Script.setLocale,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"init":TDV.Tour.Script.init,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"showPopupImage":TDV.Tour.Script.showPopupImage,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"registerKey":TDV.Tour.Script.registerKey,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"unregisterKey":TDV.Tour.Script.unregisterKey,"getMediaByName":TDV.Tour.Script.getMediaByName,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"quizStart":TDV.Tour.Script.quizStart,"translate":TDV.Tour.Script.translate,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"quizShowScore":TDV.Tour.Script.quizShowScore,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"quizFinish":TDV.Tour.Script.quizFinish,"historyGoBack":TDV.Tour.Script.historyGoBack,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"showWindow":TDV.Tour.Script.showWindow,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"getComponentByName":TDV.Tour.Script.getComponentByName,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"textToSpeech":TDV.Tour.Script.textToSpeech,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"existsKey":TDV.Tour.Script.existsKey,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"cloneCamera":TDV.Tour.Script.cloneCamera,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"getOverlays":TDV.Tour.Script.getOverlays,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"openLink":TDV.Tour.Script.openLink,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText},"height":"100%","gap":10,"borderRadius":0,"verticalAlign":"top","scrollBarOpacity":0.5,"horizontalAlign":"left","contentOpaque":false,"mediaActivationMode":"window","minHeight":20,"shadow":false,"scrollBarMargin":2,"paddingLeft":0,"minWidth":20,"downloadEnabled":false,"overflow":"hidden","data":{"name":"Player1415","locales":{"en":"locale/en.txt"},"textToSpeechConfig":{"speechOnTooltip":false,"pitch":1,"speechOnQuizQuestion":false,"speechOnInfoWindow":false,"volume":1,"rate":1},"defaultLocale":"en"},"mouseWheelEnabled":true,"toolTipHorizontalAlign":"center","paddingRight":0,"vrPolyfillScale":0.75};
    if (d['data'] == undefined)
        d['data'] = {};
    d['data']['translateObjs'] = c;
    d['data']['history'] = {};
    d['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](d);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2020.4.10.js.map
//Generated with v2020.4.10, Fri Nov 6 2020