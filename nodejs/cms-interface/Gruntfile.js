module.exports = function(grunt) {
  grunt.initConfig({
    uglify: {
      build: {
        src: 'public/javascripts/*.js',
        dest: 'public/javascripts/build/aplicacao.min.js'
      }
    },
    cssmin:{
      target: {
        files: {
          'public/stylesheets/build/aplicacao.min.css': ['public/stylesheets/*.css']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.registerTask('comprimir', ['uglify', 'cssmin']);
  grunt.registerTask('default', ['uglify', 'cssmin']);
};