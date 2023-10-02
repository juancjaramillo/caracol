(function() {
  var creativeDefinition = {
    customScriptUrl: '',
    isDynamic: false,
    delayedImpression: false,
    standardEventIds: {
      DISPLAY_TIMER: '72',
      INTERACTION_TIMER: '73',
      INTERACTIVE_IMPRESSION: '74',
      MANUAL_CLOSE: '75',
      BACKUP_IMAGE_IMPRESSION: '76',
      EXPAND_TIMER: '77',
      FULL_SCREEN: '78',
      VIDEO_PLAY: '79',
      VIDEO_VIEW_TIMER: '80',
      VIDEO_COMPLETE: '81',
      VIDEO_INTERACTION: '82',
      VIDEO_PAUSE: '83',
      VIDEO_MUTE: '84',
      VIDEO_REPLAY: '85',
      VIDEO_MIDPOINT: '86',
      VIDEO_STOP: '87',
      VIDEO_UNMUTE: '88',
      DYNAMIC_CREATIVE_IMPRESSION: '',
      HTML5_CREATIVE_IMPRESSION: ''
    },
    exitEvents: [
      {
        name: 'bg-exit',
        reportingId: '181671659',
        url: 'https://www.renault.com.co/vehiculos/kwid.html?\x26utm_content\x3dco-r-b-newcar-cross_models-kwid-06-2023-ao-nmti-ice-omd-cm',
        targetWindow: '_blank',
        windowProperties: ''
      },
      {
        name: 'clicTag',
        reportingId: '181671344',
        url: 'https://www.renault.com.co/vehiculos/kwid.html?\x26utm_content\x3dco-r-b-newcar-cross_models-kwid-06-2023-ao-nmti-ice-omd-cm',
        targetWindow: '_blank',
        windowProperties: ''
      }
    ],
    timerEvents: [
    ],
    counterEvents: [
    ],
    childFiles: [
      {
        name: 'round_expand_circle_down_white_24dp.png',
        url: '/ads/richmedia/studio/pv2/62444993/20230921160605569/round_expand_circle_down_white_24dp.png',
        isVideo: false,
        transcodeInformation: null
      },
      {
        name: 'ExpandableRollover_300x250.png',
        url: '/ads/richmedia/studio/pv2/62444993/20230921160605569/ExpandableRollover_300x250.png',
        isVideo: false,
        transcodeInformation: null
      },
      {
        name: 'ExpandableRollover_600x250.png',
        url: '/ads/richmedia/studio/pv2/62444993/20230921160605569/ExpandableRollover_600x250.png',
        isVideo: false,
        transcodeInformation: null
      },
      {
        name: 'round_cancel_white_24dp.png',
        url: '/ads/richmedia/studio/pv2/62444993/20230921160605569/round_cancel_white_24dp.png',
        isVideo: false,
        transcodeInformation: null
      }
    ],
    videoFiles: [
    ],
    videoEntries: [
    ],
    primaryAssets: [
      {
        id: '94124976',
        artworkType: 'HTML5',
        displayType: 'EXPANDABLE',
        width: '600',
        height: '250',
        servingPath: '/ads/richmedia/studio/pv2/62444993/20230921160605569/index.html',
        zIndex: '1000000',
        customCss: '',
        flashArtworkTypeData: null,
        htmlArtworkTypeData: {
          isTransparent: false,
          sdkVersion: '01_250' // Duplicating sdk version in subsequent field as version format not the same.
        },
        floatingDisplayTypeData: null,
        expandingDisplayTypeData: {
          collapsedRect: {
            left: 300,
            top: 0,
            width: 300,
            height: 250
          },
          isPushdown: false,
          pushdownAnimationTime: -1,
          expansionMode: 'NORMAL'
        },
        imageGalleryTypeData: null,
        pageSettings:{
          hideDropdowns: false,
          hideIframes: false,
          hideObjects: false,
          updateZIndex: true
        },
layoutsConfig: null,
layoutsApi: null
      }
    ]
  }
  var rendererDisplayType = '';
  rendererDisplayType += 'html_';
  var rendererFormat = 'expanding';
  var rendererName = rendererDisplayType + rendererFormat;

  var creativeId = '138447150525';
  var adId = '0';
  var templateVersion = '200_260';
  var studioObjects = window['studioV2'] = window['studioV2'] || {};
  var creativeObjects = studioObjects['creatives'] = studioObjects['creatives'] || {};
  var creativeKey = [creativeId, adId].join('_');
  var creative = creativeObjects[creativeKey] = creativeObjects[creativeKey] || {};
  creative['creativeDefinition'] = creativeDefinition;
  var adResponses = creative['adResponses'] || [];
  for (var i = 0; i < adResponses.length; i++) {
    adResponses[i].creativeDto && adResponses[i].creativeDto.csiEvents &&
        (adResponses[i].creativeDto.csiEvents['pe'] =
            adResponses[i].creativeDto.csiEvents['pe'] || (+new Date));
  }
  var loadedLibraries = studioObjects['loadedLibraries'] = studioObjects['loadedLibraries'] || {};
  var versionedLibrary = loadedLibraries[templateVersion] = loadedLibraries[templateVersion] || {};
  var typedLibrary = versionedLibrary[rendererName] = versionedLibrary[rendererName] || {};
  if (typedLibrary['bootstrap']) {
    typedLibrary.bootstrap();
  }
})();
