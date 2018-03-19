process.stdin.setEncoding('utf-8');

process.stdout.write('Szcześc boże\n');
process.stdin.on('readable', function() {
	var input = process.stdin.read();
	if (input !== null) {
		var instruction = input.toString().trim();
		if (instruction === 'Niech będzie pochwalony') {
			process.stdout.write('Na wieki wieków\n');
			console.log(process.env);
			process.exit();
		}
		else {
			process.stderr.write('Bądźmy łagodni\n')
		}
	}
});