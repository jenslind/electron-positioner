module.exports = function (grunt) {
  grunt.registerTask('watch', [ 'watch' ])

  grunt.initConfig({
    babel: {
      options: {
        sourceMap: false
      },
      dist: {
        files: {
          'index.js': 'src/Positioner.js'
        }
      }
    },
    watch: {
      js: {
        files: ['src/*.js'],
        tasks: ['babel'],
        options: {
          livereload: false
        }
      }
    }
  })

  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-babel')

}
