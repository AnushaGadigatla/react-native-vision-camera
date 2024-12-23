module.exports = {
  visionSidebar: {
    Guides: [
      'guides/getting-started',
      'guides/devices',
      'guides/lifecycle',
      'guides/formats',
      'guides/preview',
      'guides/taking-photos',
      'guides/recording-videos',
      'guides/code-scanning',
      {
        type: 'category',
        label: 'Realtime Frame Processing',
        items: [
          'guides/frame-processors',
          'guides/frame-processors-interacting',
          'guides/frame-processor-plugins-community',
          'guides/pixel-formats',
          'guides/frame-processors-tips',
          'guides/skia-frame-processors',
          {
            type: 'category',
            label: 'Creating Frame Processor Plugins',
            items: [
              'guides/frame-processors-plugins-overview',
              'guides/frame-processors-plugins-ios',
              'guides/frame-processors-plugins-android',
              'guides/frame-processors-plugins-cpp',
              'guides/frame-processors-plugins-final',
            ]
          },
        ]
      },
      'guides/zooming',
      'guides/focusing',
      'guides/orientation',
      'guides/exposure',
      'guides/hdr',
      'guides/stabilization',
      'guides/location',
      'guides/performance',
      'guides/errors',
      'guides/mocking',
      'guides/troubleshooting',
      'guides/shadowlens',
    ],
    API: [
      ...require('./docs/api/typedoc-sidebar.cjs')
    ]
  },
}
