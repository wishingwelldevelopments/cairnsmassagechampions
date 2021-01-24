module.exports = function(grunt) {
	grunt.initConfig({
    		connect: {
    			sever: {
    				options: {
    					hostname: 'localhost',
    					port: 3000,
    					base: '',
    					livereload: true
    				}
    			}
    			},

    			watch: {
    				options: {
    					livereload: true,
    					dateFormat: function(time) {
    						grunt.log.writeln('The watch finished in ' + time + 'ms at' + (new Date()).toString());
    						grunt.log.writeln('Waiting for more changes...');
    					}
    					},
    					scripts: {
    						files: '**/**.js',
    						},
              html: {
    						files: '**/**.html',
    						},
    					css: {
    						files: ['**/**.css'],
    						}
    					}


  }); //initConfig
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-connect');
grunt.registerTask('default', ['connect', 'watch']);

}; //wrapper function
