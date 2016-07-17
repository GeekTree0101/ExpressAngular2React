/**
 * 
 *    AngularJS2를 품은 Express 4x
 *    - Gulp Build System
 *    provider : Ha Hyeonsu
 *    update : 2016.07.15
 * 
 *    copyright(c) 2016 MIRO internet of things team
 */



/**
 *  Import Gulp module
 * 
 */
var gulp = require("gulp"),
    sassBuilder = require("gulp-sass"),          // pipe(sassBuilder({}))
    run = require("gulp-exec"),                   // run("command")
    runSequence = require("run-sequence"),       // runSequence(["1","1"],["2"],["3"])
    watch = require("gulp-watch"),               // gulp.watch(["target"],["do task"])
    remove = require("del");                     // remove("dir something target")
 
 /**
  *   Watch Task Section
  */
 
 gulp.task("watch", function(){
     
      gulp.watch(["./app/**/*.ts"],["EA2:build"]);
      gulp.watch(["./app/**/*.scss"],["EA2:view"]);
      
 })

/**
 *  Group Task Section
 */
 
gulp.task("EA2:start", function(){               //App start
    
   return runSequence(["EA2:view", "EA2:build"]); 

});

gulp.task("EA2:clean", function(){            // All clean

        return runSequence(["cleanApp", "cleanServer"]);
});
     
gulp.task("EA2:build", function(){              // Gulp Module for ReactJS

   return runSequence(["sassBuild","tscBuild"]);
 
});

gulp.task("EA2:view", function(){           // Gulp Module for AngularJS2

   return runSequence(["sassBuild"]); 

});    
    
    
/**
 *  Unit Task Section 
 */  
  
  
gulp.task("sassBuild", function(done){     //Angular StyleSheet Sass -> css preprocessing
    
    return gulp.src("./public/stylesheets/styles.scss")
        .pipe(sassBuilder({}))
        .pipe(gulp.dest(function(file){
            return file.base;              //Save at present dir
        }))

})

gulp.task("tscBuild", function(done){       //Typescript Angular build

    return gulp.src("./app")
               .pipe(run("sudo tsc -p ./app"));
})




gulp.task("cleanApp", function(done){     //All application clean
    
    remove("./app/**/*.js");
    remove("./app/**/*.js.map");  
    remove("./public/stylesheets/styles.css");
    
    return "done";
})


gulp.task("cleanServer", function(done){  //server cleaner
    
    remove("./routes/**/*.js");
    remove("./bin/**/*.js");
     remove("./routes/**/*.js.map");
    remove("./bin/**/*.js.map");
    remove("./app.js");
    remove("./app.js.map");
    
    return "done";
})

