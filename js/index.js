var easter_egg = new Konami(function() { 
clippy.load('Clippy', function(agent) {
        agent.show();
	agent.moveTo(200,200);
	   agent.play('Searching');
        agent.speak('Ah there you are!');
      agent.speak('You\'ve discovered the Easter Egg!');
      agent.moveTo(100,100);
        agent.speak('You never know... They might NEED me!');
      agent.play('GetTechy');
          agent.play('Processing');
         agent.moveTo(400,150);
        agent.speak('They might have been looking for me?');
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
						});
