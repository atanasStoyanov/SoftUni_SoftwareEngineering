function solve(band, album, song) {
    const oneRoration = 2.5;
    let duration = (band.length * album.length) * song.length / 2;
    let rotations = duration / oneRoration;

    console.log(`The plate was rotated ${Math.ceil(rotations)} times.`);
}

solve('Black Sabbath', 'Paranoid', 'War Pigs');