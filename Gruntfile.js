module.exports = function(grunt) {

  grunt.initConfig({
      responsive_images: {
        dev: {
          options: {
            engine: "gm",
            sizes: [{
              width: 1600,
              suffix: "_large_2x",
              quality: 30
            },
            {
              width: 800,
              suffix: "_med_1x",
              quality: 30
            },
            {
              width: 400,
              suffic: "_small_",
              quality: 30
            }]
          },

          files: [{
            expand: true,
            src: ["*.{gif,jpg}"],
            cwd: "images_src/",
            dest: "images/"
          }]
        }
      },

      /* Clear out the images directory if it exists */
      clean: {
        dev: {
          src: ["images"],
        },
      },

      /* Generate the images directory if it is missing */
      mkdir: {
        dev: {
          options: {
            create: ["images"]
          },
        },
      },

    });

    grunt.loadNpmTasks("grunt-responsive-images");
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-mkdir");
    grunt.registerTask("default", ["clean", "mkdir", "responsive_images"]);

};