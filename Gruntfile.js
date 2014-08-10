'use strict';

module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-copy');

	grunt.initConfig({
		copy: {
		  main: {
		    src: 'src/gwaaf.ipsum.js',
		    dest: 'dest/gwaaf.ipsum.js'
		  },
		},
	  uglify: {
	    my_target: {
	      files: {
	        'dest/gwaaf.ipsum.min.js': ['src/gwaaf.ipsum.js']
	      }
	    }
	  }
	});

	grunt.registerTask('build', [
		'copy',
		'uglify'
	])

};
