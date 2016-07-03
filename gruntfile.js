'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    browserify: {
      dist: {
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
          'web/dist/js/web.js': ['web/assets/js/web.es6'],
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
      webVendorsCss: {
        src: [
          'node_modules/bootstrap/dist/css/bootstrap.css',
          'node_modules/font-awesome/css/font-awesome.css',
        ],
        dest: 'web/assets/css/vendors/web.css',
      },
      webVendorsJs: {
        src: [
          'node_modules/bootstrap-without-jquery/dist/bootstrap-without-jquery.js',
          // 'node_modules/react-dom/dist/react-dom.js',
          // 'node_modules/redux/dist/redux.js',
          // 'node_modules/react-redux/dist/react-redux.js',
          // 'node_modules/babel-standalone/babel.js',
        ],
        dest: 'web/assets/js/vendors/web.js'
      }
    },
    copy: {
      distFonts: {
        files: [
          {
            expand: true,
            flatten: true,
            src: [
              'web/assets/fonts/*',
            ],
            dest: 'web/dist/fonts'
          }
        ]
      },
      webVendorsFonts: {
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
      }
    },
    cssmin: {
      options: {
        roundingPrecision: -1,
        s0: true,
        sourceMap: true
      },
      target: {
        files: {
          'web/dist/css/web.min.css': 'web/dist/css/web.css',
        }
      }
    },
    githooks: {
      all: {
        // 'pre-commit': 'build',
      }
    },
    sass: {
      dist: {
        options: {
          sourcemap: 'none'
        },
        files: {
          'web/dist/css/web.css': 'web/dist/css/web.scss',
        }
      }
    },
    uglify: {
      public: {
        files: {
          'public/dist/js/main.min.js': 'public/assets/js/main.js',
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
        tasks: ['browserify']
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

  grunt.registerTask('css', [
    'copy:webVendorsFonts',
    'concat:webVendorsCss',
  ]);

  grunt.registerTask('js', [
    'concat:webVendorsJs',
  ]);

  grunt.registerTask('default', ['watch']);
  grunt.registerTask('build', ['browserify', 'uglify', 'sass', 'cssmin']);
};
