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

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
     createPlatform(0, 650, 300, 20)
     createPlatform(340, 515, 50, 20)
     createPlatform(425, 650, 50, 20)
     createPlatform(700, 630, 50, 20)
     createPlatform(500, 400, 50, 20)
     createPlatform(750, 320, 50, 20)
     createPlatform(800, 200, 50, 140)
     createPlatform(1000, 200, 10, .1)
     createPlatform(1200, 500, 200, .1)
    // TODO 3 - Create Collectables
     createCollectable("steve", 430, 500, 1, .5)
     createCollectable("database", 345, 400, 1, .5)
     createCollectable("diamond", 705, 550, 1, .5)
     createCollectable("max", 1200, 100, 0)
    // TODO 4 - Create Cannons
     createCannon("left", 550, 1000)
     createCannon("bottom", 350, 1000)
     createCannon("right", 650, 1000)
     createCannon("left", 15, 800)
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
