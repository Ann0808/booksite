module.exports = function(grunt) {

grunt.initConfig({

less: {
development: {
options: {
compress: false,
yuicompress: false,
optimization: 2
},

files: {
"css/style.css": ['less/*.less', 'less/blocks/*.less', 'less/carousel/*.less'],
}
}
},
watch: {
scripts: {
files: ['script/*.js'],
tasks: ['concat:main', 'jshint', 'uglify'],
options: {
spawn: false,
reload: true
}
},
css: {
files: ['less/*.less', 'less/blocks/*.less', 'less/carousel/*.less'],
tasks: ['less', 'postcss','cssmin'],
options: {
spawn: false,
reload: true
}

}
},

imagemin: {
dynamic: {
files: [{
expand: true,
cwd: '',
src: ['img/*.{png,jpg,gif}','img/standart*.{png,jpg,gif}'],
dest: ''
}]
}
},

postcss: {
options: {
processors: [
require('autoprefixer')({browsers: ['last 5 versions']})
]
},
dist: {
src: 'css/style.css',
dest: 'css/style.css'
}
},

	cssmin: {
  target: {
    files: [{
      expand: true,
      cwd: 'css/',
      src: ['style.css'],
      dest: 'css/',
      ext: '.min.css'
    }]
  }
}





});

grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-less');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-postcss');
grunt.loadNpmTasks('grunt-contrib-imagemin');
grunt.loadNpmTasks('grunt-contrib-cssmin');



grunt.registerTask('default', ['imagemin', 'postcss']);
};
