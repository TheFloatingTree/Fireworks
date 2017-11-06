function particleManager () { //PARTICLE MANAGER -- Makes sure all resources are used effectively
    this.particleAlive = false;
    
    this.allDead = function() {                      //Runs through all onscreen particles, returns if they've ALL died
        this.deadCount = 0;
        
        for (var i = 0; i < particles.length; i++) {
            if (particles[i].isDead()) {            
                this.deadCount++;
            } 
        }
        
        if (this.deadCount === particles.length) {
            return true;
        } else {
            return false;
        }
    }
    
    this.cleanUp = function() {                      //Clears all the arrays containing particles and particle systems
        this.particleAlive = false;
        console.log("clean");

        particles.length = 0;
        fireworks.length = 0;
        
        //New systems go here//
    }
    
    this.update = function() {                       //Checks whether every particle onscreen is dead, if so, run 
        if (this.particleAlive) {                    //cleanUp()
            if (this.allDead()) {
                this.cleanUp();
            } 
        }
    }
}

//PARTICAL SYSTEMS//

function firework (x,y) { //EXPLOSION PARTICLE -- Makes an explosion at a specified x,y
    this.pos = createVector(x,y);
    this.colors = [255,0];
    this.color = {r:this.colors[Math.round(random(0,this.colors.length - 1))],g:this.colors[Math.round(random(0,this.colors.length - 1))],b:this.colors[Math.round(random(0,this.colors.length - 1))]};
    this.numPar = random(8,20);
    
    this.spawn = function() {
        pM.particleAlive = true;
        
        for (var i = 0; i < this.numPar; i++) {               
            this.vel = random(2.5,8);
            this.lifedecay = random(5,15);
            this.angle = random(0,2*PI);
            this.size = random(4,7);
            
            particles.push(new particleObject(this.pos.x,this.pos.y,this.size,this.angle,this.vel,0.9,255,this.lifedecay,"circle",this.color.r,this.color.g,this.color.b,true));
            particles[particles.length - 1].direction();
        }
    }
    
}

//IMPORTANT: When creating new partical System Instances, be sure to call .spawn() after you create your instance.

//Notes: When creating new particle Systems, you have to run the direction method, otherwise your particle will 
//not move. It is also important to tell the particle Manager that you have created a new particle System,
//otherwise the Manager will not be able to properly clean up.

//-PI/2 === UP