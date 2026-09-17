$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // toggleGrid()
     

    // Create Platforms
     createPlatform(0, 650, 300, 20, "green")
     createPlatform(340, 515, 50, 20, "green")
     createPlatform(425, 650, 50, 20, "green")
     createPlatform(700, 630, 50, 20, "greem")
     createPlatform(500, 400, 50, 20, "green")
     createPlatform(750, 320, 50, 20, "green")
     createPlatform(800, 200, 50, 140, "green")
     createPlatform(1000, 200, 10, .1)
     createPlatform(1200, 500, 200, .1)
     createPlatform(1300, 600, 100, 20, "orange", 1300, 1300, 0, 600, 750, .1)
    // Create Bad Platforms
      createBadPlatform(1380, 0, 20, 750, "red")
    // Create Collectables
     createCollectable("steve", 430, 500, 1, .5)
     createCollectable("database", 345, 400, 1, .5)
     createCollectable("diamond", 705, 550, 1, .5)
     createCollectable("max", 1200, 100, 0, 1, 1200, 1380, 2)
     createCollectable("grace",0, 700, 0, 1, .5, 1300, 2)
     createCollectable("kennedi", 1290, 700, 1, .5)
    // Create Cannons
     createCannon("left", 550, 1300,)
     createCannon("bottom", 350, 1000, 5, 100)
     createCannon("right", 650, 1300)
     createCannon("left", 15, 800)
     createCannon("top", 200, 2500, 100, 100, 0, 1400, 2)
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
