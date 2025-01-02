function create() {
    var name = document.getElementById('name').value;
    	surname = document.getElementById('surname').value;
    	otch = document.getElementById('otch').value;
    	age = document.getElementById('age').value;

    var players = JSON.parse(localStorage.getItem('players')) || [];

    var player = {
        name: name,
        surname: surname,
        otch: otch,
        age: age
    };

    players.push(player);
    localStorage.setItem('players', JSON.stringify(players));

    displayPlayer(player);
    document.getElementById('create-people').style.display = 'none';
    document.getElementById('areabtn').style.display = 'block';
    }

    function displayPlayer(player) {
        document.getElementById('pers1').style.display = 'inline-flex';
        document.getElementById('name1').textContent = player.surname + ' ' + player.name + ' ' + player.otch;
        document.getElementById('createbtn').style.display = 'none';
    }

        function load() {
            var players = JSON.parse(localStorage.getItem('players')) || [];
            players.forEach(function(player) {
                displayPlayer(player);
            });
        }

        window.onload = load;