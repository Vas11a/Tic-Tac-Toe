
const container = document.querySelector('.container')


let symbol = 'x'
let arr = ['','','','','','','','','']
let stopGame = false
let winn  = ''
let winner = ''
let single = false
let zeroFirst = [0,1,2,3,5,6,7,8]

function render () {
	container.innerHTML = `
		<div class="part" onclick="addSymb(0)">${arr[0]}</div>
		<div class="part" onclick="addSymb(1)">${arr[1]}</div>
		<div class="part" onclick="addSymb(2)">${arr[2]}</div>
		<div class="part" onclick="addSymb(3)">${arr[3]}</div>
		<div class="part" onclick="addSymb(4)">${arr[4]}</div>
		<div class="part" onclick="addSymb(5)">${arr[5]}</div>
		<div class="part" onclick="addSymb(6)">${arr[6]}</div>
		<div class="part" onclick="addSymb(7)">${arr[7]}</div>
		<div class="part" onclick="addSymb(8)">${arr[8]}</div>
		<input type="submit" value="Restart" onclick="clearField()">
		<div class="home" onclick="home()">X</div>
		<h1 class="${winner}">Player ${winn} win !</h1>
	`
}


function singlePlay () {
	single = true
	render()	
}

function multy () {
	render()
}



function addSingle (idx) {
		if (arr[idx] !== '') return
		if (delay == false) {
			delay = true
			if (winner == 'addwinn addlose' || winner == 'addwinn') return
			if (arr[idx] == '') {
				arr[idx] = 'x'	
				winn = 'x'
				findWinner()
		
			
			setTimeout(() => {
				artInt()
				render()
				delay = false
			}, 200);
			
			}
		}

}



function addSymb (idx) {
	if (single) {
		addSingle(idx)
		render()
		return
	}	
	if (stopGame) return

	if (symbol === 'x' && arr[idx] == '') {
		symbol = 'o'
		arr[idx] = 'x'
		winn = 'x'
	} else if (symbol == 'o' && arr[idx] == '') {
		symbol = 'x'
		arr[idx] = 'o'
		winn = 'o'
	}
	render()
	findWinner()

}

function findWinner () {
	if ((arr[0] == winn && arr[1] == winn && arr[2] == winn) || 
		(arr[3] == winn && arr[4] == winn && arr[5] == winn) || 
		(arr[6] == winn && arr[7] == winn && arr[8] == winn) || 
		(arr[0] == winn && arr[3] == winn && arr[6] == winn) || 
		(arr[1] == winn && arr[4] == winn && arr[7] == winn) || 
		(arr[2] == winn && arr[5] == winn && arr[8] == winn) || 
		(arr[0] == winn && arr[4] == winn && arr[8] == winn) || 
		(arr[2] == winn && arr[4] == winn && arr[6] == winn) ){
		
		stopGame = true
		winner = 'addwinn'
		if (single === true && winn == 'o') {
			winner = 'addwinn addlose'
		}
		render()
	}
}

function clearField () {
	for (var i = arr.length - 1; i >= 0; i--) {
		arr[i] = ''
	}
	symbol = 'x'
	stopGame = false
	winner = ''
	helper = true
	render()

}


function artInt () {
	if (winner == 'addwinn addlose' || winner == 'addwinn') return
	if (arr[4] == '') {
		arr[4] = 'o'
	} else if (((arr[0] == 'o' && arr[3] == 'o') || (arr[2] == 'o' && arr[4] == 'o') || (arr[8] == 'o' && arr[7] == 'o')) && arr[6] == '') {
		arr[6] = 'o'
	} else if (((arr[1] == 'o' && arr[2] == 'o') || (arr[3] == 'o' && arr[6] == 'o') || (arr[4] == 'o' && arr[8] == 'o')) && arr[0] == '') {
		arr[0] = 'o'
	} else if (((arr[0] == 'o' && arr[2] == 'o') || (arr[4] == 'o' && arr[7] == 'o')) && arr[1] == '') {
		arr[1] = 'o'
	}  else if (((arr[0] == 'o' && arr[6] == 'o') || (arr[4] == 'o' && arr[5] == 'o')) && arr[3] == '') {
		arr[3] = 'o'
	}  else if (((arr[2] == 'o' && arr[8] == 'o') || (arr[3] == 'o' && arr[4] == 'o')) && arr[5] == '') {
		arr[5] = 'o'
	}  else if (((arr[6] == 'o' && arr[8] == 'o') || (arr[1] == 'o' && arr[4] == 'o')) && arr[7] == '') {
		arr[7] = 'o'
	} else if (((arr[1] == 'o' && arr[0] == 'o') || (arr[4] == 'o' && arr[6] == 'o') || (arr[5] == 'o' && arr[8] == 'o')) && arr[2] == '') {
		arr[2] = 'o'
	} else if (((arr[3] == 'o' && arr[0] == 'o') || (arr[2] == 'o' && arr[4] == 'o') || (arr[7] == 'o' && arr[8] == 'o')) && arr[6] == '') {
		arr[6] = 'o'
	} else if (((arr[6] == 'o' && arr[7] == 'o') || (arr[2] == 'o' && arr[5] == 'o') || (arr[0] == 'o' && arr[4] == 'o')) && arr[8] == '') {
		arr[8] = 'o'
	} else if (((arr[0] == 'o' && arr[8] == 'o') || (arr[2] == 'o' && arr[6] == 'o') || (arr[1] == 'o' && arr[7] == 'o') || (arr[3] == 'o' && arr[5] == 'o')) && arr[4] == '') {
		arr[4] = 'o'
	} else if (((arr[0] == 'x' && arr[3] == 'x') || (arr[2] == 'x' && arr[4] == 'x') || (arr[8] == 'x' && arr[7] == 'x')) && arr[6] == '') {
		arr[6] = 'o'
	} else if (((arr[1] == 'x' && arr[2] == 'x') || (arr[3] == 'x' && arr[6] == 'x') || (arr[4] == 'x' && arr[8] == 'x')) && arr[0] == '') {
		arr[0] = 'o'
	} else if (((arr[0] == 'x' && arr[2] == 'x') || (arr[4] == 'x' && arr[7] == 'x')) && arr[1] == '') {
		arr[1] = 'o'
	}  else if (((arr[0] == 'x' && arr[6] == 'x') || (arr[4] == 'x' && arr[5] == 'x')) && arr[3] == '') {
		arr[3] = 'o'
	}  else if (((arr[2] == 'x' && arr[8] == 'x') || (arr[3] == 'x' && arr[4] == 'x')) && arr[5] == '') {
		arr[5] = 'o'
	}  else if (((arr[6] == 'x' && arr[8] == 'x') || (arr[1] == 'x' && arr[4] == 'x')) && arr[7] == '') {
		arr[7] = 'o'
	} else if (((arr[1] == 'x' && arr[0] == 'x') || (arr[4] == 'x' && arr[6] == 'x') || (arr[5] == 'x' && arr[8] == 'x')) && arr[2] == '') {
		arr[2] = 'o'
	} else if (((arr[3] == 'x' && arr[0] == 'x') || (arr[2] == 'x' && arr[4] == 'x') || (arr[7] == 'x' && arr[8] == 'x')) && arr[6] == '') {
		arr[6] = 'o'
	} else if (((arr[6] == 'x' && arr[7] == 'x') || (arr[2] == 'x' && arr[5] == 'x') || (arr[0] == 'x' && arr[4] == 'x')) && arr[8] == '') {
		arr[8] = 'o'
	} else if (((arr[0] == 'x' && arr[8] == 'x') || (arr[2] == 'x' && arr[6] == 'x') || (arr[1] == 'x' && arr[7] == 'x') || (arr[3] == 'x' && arr[5] == 'x')) && arr[4] == '') {
		arr[4] = 'o'
	} else{
		fZero()
	}
	winn = 'o'
	findWinner()
}

function fZero () {
	let rand = Math.floor(Math.random()*zeroFirst.length)
	let rValue = zeroFirst[rand];
	if (arr[rValue] == '') {
		arr[rValue] = 'o'

	} else{
		for (var i = arr.length - 1; i >= 0; i--) {
			if (arr[i] == '') {
				arr[i] = 'o'
				break	
			}
		}
	}
}


function home () {
	clearField()
	single = false
	container.innerHTML = `
		<button class="mode mode1" onclick="singlePlay()">1 Player</button>
		<button class="mode mode2" onclick="multy()">2 Players</button>
	`
}
