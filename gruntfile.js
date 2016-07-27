'use strict';

module.exports = (grunt) => {
  const assetsFingerprint = require('node-uuid').v4();

  grunt.initConfig({
    browserify: {
      assets: {
        options: {
          transform: [
            [
              'babelify',
              {
                babelrc: true
              }
            ]
          ]
        },
        files: {
          'web/assets/js/admin.js': ['web/assets/js/admin.es6'],
          'web/assets/js/web.js': ['web/assets/js/web.es6'],
        }
      }
    },
    clean: {
      dist: [
        'web/dist/*',
        '!web/dist/.gitkeep',
      ]
    },
    concat: {
      adminJs: {
        src: [
          'web/assets/js/vendors/bootstrap-without-jquery.js',
          'web/assets/js/admin.js',
        ],
        dest: 'web/assets/js/admin.js',
      },
      adminVendorsCss: {
        src: [
          'node_modules/bootswatch/sandstone/bootstrap.css',
          'node_modules/font-awesome/css/font-awesome.css',
        ],
        dest: 'web/assets/css/vendors/_admin.scss',
      },
      webVendorsCss: {
        src: [
          'node_modules/bootstrap/dist/css/bootstrap.css',
          'node_modules/font-awesome/css/font-awesome.css',
        ],
        dest: 'web/assets/css/vendors/_web.scss',
      }
    },
    copy: {
      toDist: {
        files: [
          { expand: true, flatten: true, src: [ 'web/assets/fonts/*' ], dest: `web/dist/${assetsFingerprint}/fonts` },
          { expand: true, flatten: true, src: [ 'web/assets/css/*.min.css' ], dest: `web/dist/${assetsFingerprint}/css` },
          { expand: true, flatten: true, src: [ 'web/assets/js/*.min.js' ], dest: `web/dist/${assetsFingerprint}/js` },
        ]
      },
      vendorsFonts: {
        files: [
          {
            expand: true,
            flatten: true,
            src: [
              'node_modules/font-awesome/fonts/*',
            ],
            dest: 'web/assets/fonts'
          }
        ]
      },
      vendorsJs: {
        files: [
          {
            expand: true,
            flatten: true,
            src: [
              'node_modules/bootstrap-without-jquery/dist/bootstrap-without-jquery.js',
            ],
            dest: 'web/assets/js/vendors'
          }
        ]
      }
    },
    cssmin: {
      options: {
        roundingPrecision: -1,
        s0: true,
        sourceMap: false
      },
      target: {
        files: {
          'web/assets/css/admin.min.css': 'web/assets/css/admin.css',
          'web/assets/css/web.min.css': 'web/assets/css/web.css',
        }
      }
    },
    githooks: {
      all: {
        // 'pre-commit': 'build',
      }
    },
    replace: {
      assetsFingerprint: {
        options: {
          patterns: [
            {
              match: /'assets_fingerprint', '.*'/,
              replacement: `'assets_fingerprint', '${assetsFingerprint}'`
            }
          ]
        },
        files: [{
          expand: true,
          flatten: true,
          src: 'app/config/parameters_prod.php',
          dest: 'app/config'
        }]
      },
    },
    sass: {
      assets: {
        options: {
          sourcemap: 'none'
        },
        files: {
          'web/assets/css/admin.css': 'web/assets/css/admin.scss',
          'web/assets/css/web.css': 'web/assets/css/web.scss',
        }
      }
    },
    uglify: {
      assets: {
        files: {
          'web/assets/js/admin.min.js': 'web/assets/js/admin.js',
          'web/assets/js/web.min.js': 'web/assets/js/web.js',
        }
      }
    },
    watch: {
      css: {
        files: ['web/assets/css/**/*.scss'],
        tasks: ['sass']
      },
      js: {
        files: ['web/assets/js/**/*.es6'],
        tasks: ['browserify', 'concat:adminJs']
      }
    }
  });

  // grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-githooks');
  grunt.loadNpmTasks('grunt-replace');

  grunt.registerTask('css', [
    'copy:vendorsFonts',
    'concat:adminVendorsCss',
    'concat:webVendorsCss',
  ]);

  grunt.registerTask('js', [
    'copy:vendorsJs',
  ]);

  grunt.registerTask('build', [
    'clean:dist',
    'browserify',
    'concat:adminVendorsJs',
    'uglify',
    'sass',
    'cssmin',
    'copy:toDist',
    'replace:assetsFingerprint'
  ]);

  grunt.registerTask('default', ['watch']);
};
