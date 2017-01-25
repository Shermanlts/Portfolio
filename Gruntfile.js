module.exports = function(grunt) {

  grunt.initConfig({
      responsive_images: {
        dev: {
          options: {
            engine: "gm",
            sizes: [{
              width: 1200,
              suffix: "",
              quality: 30
            },
            {
              width: 800,
              suffix: "",
              quality: 30
            },
            {
              width: 400,
              suffic: "",
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
    grunt.registerTask("default", ["responsive_images"]);

};