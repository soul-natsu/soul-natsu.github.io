var easter_egg = new Konami(function() { 
clippy.load('Clippy', function(agent) {
        agent.show();
      agent.moveTo(200,200);
        agent.speak('New Windows means new opportunities!');
   // play a given animation
   agent.play('GetTechy');
      
    //  alert (agent.animations());

      agent.moveTo(100,100);
        agent.speak('You never know... They might NEED me!');
      agent.play('Processing');
    
         agent.moveTo(400,150);
        agent.speak('They might have been looking for me?');
      agent.play('Searching');

     agent.moveTo(200,100);
        agent.speak('Or maybe not??');
      agent.play('EmptyTrash');
 
             agent.moveTo(300,150);
        agent.speak('Until we meet again, clippy says bye!');
      agent.play('GoodBye');
    
             agent.moveTo(400,100);
      agent.play('LookUpLeft');
// gesture at a given point (if gesture animation is available)
                   agent.moveTo(500,90);
 agent.play('GestureUp');
agent.speak('hum... likey likey?');
 //     agent.hide();
  agent.play('Idle');     
     // agent.stop();
      
    });
