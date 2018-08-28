$(document).ready(function() {
    $.get('playerList.html').success(function(html) {
        $('#playerList').html(html);
    });

	// Insert input value into player list
	$('#addPlayerButton').click(function(){
		// Set variables
		var playerInput = $('#addPlayerInput');
		var playerName = $('#addPlayerInput').val();
		var playerHpInput = $('#addStartHP');
		var playerHp = $('#addStartHP').val();

		// Check that both input fields are filled
		if (playerName == '' || playerHp == '') {
	    	alert('Täytä molemmat kentät');
	    }
	    else {
	    	// Add player name into as a last list item element
	    	$('#playerList ul').append('<li class="singlePlayer">' + playerName + ' ' + '<div class="hpIndicator"><span id="playerHp">' + playerHp + '</span></div>' + '<button id="removePlayer">X</button></li>');
	    	
	    	// Clear input fields
	    	playerInput.val('');
	    	playerHpInput.val('');
	    }
	    // Create playbutton if playerlist has 1 or more players and playbutton is not found in the DOM
	    if ($('.singlePlayer').length > 0 && $('#playButton').length == 0) {
	    	createPlayButton();
	    }
	});
	// Remove player from playerlist
    $('#removePlayer').live('click', function(){
		$(this).parent().remove();
		// If playerlist is empty, remove play button
		if ($('.singlePlayer').length == 0) {
			$('#playButton').remove();
		}
	});

	// Create play button and append it to chosen element
	function createPlayButton() {
		$('.ui-content').append('<button id="playButton" class="startButton">Aloita peli</button>');
		$('#playButton').click(function(){
			$('.ui-content').append('<button id="newGame" class="startButton">Uusi peli</button>');
			$('.buttons').appendTo('.singlePlayer');
			$('.buttons').show();
			$('.addPlayer, #playButton, #removePlayer').remove();

			// Add one hit point
			$('.addOneHP').click(function(){
				// Change node string to int so values can be modified
				// TODO These variables must be placed outside this functions scope for these are used multiple times
				var hpString = $(this).parents('.singlePlayer').children().children('#playerHp').html();
				var hpInt = parseInt(hpString);
				$(this).parents('.singlePlayer').children().children('#playerHp').html(hpInt + 1);
			});
			// Add five hit point
			$('.addFiveHP').click(function(){
				var hpString = $(this).parents('.singlePlayer').children().children('#playerHp').html();
				var hpInt = parseInt(hpString);
				$(this).parents('.singlePlayer').children().children('#playerHp').html(hpInt + 5);
			});
			// Add ten hit point
			$('.addTenHP').click(function(){
				// Change node string to int so values can be modified
				var hpString = $(this).parents('.singlePlayer').children().children('#playerHp').html();
				var hpInt = parseInt(hpString);
				$(this).parents('.singlePlayer').children().children('#playerHp').html(hpInt + 10);
			});
			// Remove one hit point
			$('.removeOneHP').click(function(){
				// Change node string to int so values can be modified
				var hpString = $(this).parents('.singlePlayer').children().children('#playerHp').html();
				var hpInt = parseInt(hpString);
				$(this).parents('.singlePlayer').children().children('#playerHp').html(hpInt - 1);
			});
			// Remove five hit point
			$('.removeFiveHP').click(function(){
				// Change node string to int so values can be modified
				var hpString = $(this).parents('.singlePlayer').children().children('#playerHp').html();
				var hpInt = parseInt(hpString);
				$(this).parents('.singlePlayer').children().children('#playerHp').html(hpInt - 5);
			});
			// Remove ten hit point
			$('.removeTenHP').click(function(){
				// Change node string to int so values can be modified
				var hpString = $(this).parents('.singlePlayer').children().children('#playerHp').html();
				var hpInt = parseInt(hpString);
				$(this).parents('.singlePlayer').children().children('#playerHp').html(hpInt - 10);
			});
			$('#newGame').click(function(){
				location.reload();
			});

		});
	}
	function addHp() {
		/*var hpString = $(this).parents('.singlePlayer').children('#playerHp').html();
		var hpInt = parseInt(hpString);
		$(this).parents('.singlePlayer').children('#playerHp').html(hpInt + amount);*/
		console.log($(this));
	}


});