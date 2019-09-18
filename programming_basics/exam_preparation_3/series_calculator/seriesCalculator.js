function seriesCalculator(input) {
    let name = input.shift();
    let seasons = Number(input.shift());
    let episodesPerSeason = Number(input.shift());
    let timePerEpisode = Number(input.shift());

    let commercials = timePerEpisode * 0.20;
    timePerEpisode += commercials;
    let specialEpisodesAdditionalTime = seasons * 10;

    let totalTimeNeeded = seasons * episodesPerSeason * timePerEpisode + specialEpisodesAdditionalTime;

    console.log(`Total time needed to watch the ${name} series is ${totalTimeNeeded} minutes.`);
}
seriesCalculator(['Game of Thrones', 7, 10, 50]);