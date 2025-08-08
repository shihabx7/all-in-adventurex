const otherGameList = (escapeGameList) => {
  let retArr = [];

  for (let i = 0; i < escapeGameList.length; i++) {
    let aSlug = escapeGameList[i].attributes.activitySlug;

    if (
      escapeGameList[i].attributes.activityInfo.category == "Others" &&
      otherGameData[aSlug] &&
      otherGameData[aSlug].activeAll
    ) {
      let fromPrice = 0;
      let fromPricex =
        escapeGameList[i].attributes.activityInfo.price.length > 0
          ? escapeGameList[i].attributes.activityInfo.price.length - 1
          : 0;
      let obj = {
        id: i,
        isPublish: escapeGameList[i].attributes.isPublish,
        gameType: escapeGameList[i].attributes.activityInfo.category
          ? escapeGameList[i].attributes.activityInfo.category
          : otherGameData[aSlug].gameType,
        gameName: escapeGameList[i].attributes.activityName
          ? escapeGameList[i].attributes.activityName
          : otherGameData[aSlug].gameName,
        slug: escapeGameList[i].attributes.activitySlug
          ? escapeGameList[i].attributes.activitySlug
          : otherGameData[aSlug].slug,
        gameCardData: otherGameData[aSlug].gameCardData,
        videoData: {
          url: otherGameData[aSlug].gameCardData.video.url
            ? otherGameData[aSlug].gameCardData.video.url
            : "/assets/escape-game/videos/escape-from-alcatraz.mp4",
          thumbnail: otherGameData[aSlug].gameCardData.poster.url
            ? otherGameData[aSlug].gameCardData.poster.url
            : "/assets/escape-game/poster/all-in-adventures-escape-game-escape-from-alcatraz-poster.jpg",
        },
        listCardBgImage:
          escapeGameList[i].attributes.activitySlider.activityListImage !== null
            ? formatImage(
                escapeGameList[i].attributes.activitySlider.activityListImage
              )
            : otherGameData[aSlug].gameCardData.cardBgImage,
        gameInfo: {
          gameTitle: escapeGameList[i].attributes.activityName
            ? escapeGameList[i].attributes.activityName
            : otherGameData[aSlug].gameTitle,
          slug: escapeGameList[i].attributes.activitySlug
            ? escapeGameList[i].attributes.activitySlug
            : otherGameData[aSlug].slug,
          shortDescription: escapeGameList[i].attributes.activitySlider
            .sliderText
            ? escapeGameList[i].attributes.activitySlider.sliderText
            : otherGameData[aSlug].gameCardData.text,
          price:
            escapeGameList[i].attributes.activityInfo.price.length > 0
              ? escapeGameList[i].attributes.activityInfo.price[fromPrice].Price
              : otherGameData[aSlug].gameInfo.price,
          age: escapeGameList[i].attributes.activityInfo.age
            ? escapeGameList[i].attributes.activityInfo.age
            : otherGameData[aSlug].gameInfo.age,
          duration: escapeGameList[i].attributes.activityInfo.duration
            ? escapeGameList[i].attributes.activityInfo.duration
            : otherGameData[aSlug].gameInfo.duration,
          successRate: escapeGameList[i].attributes.activityInfo.successRate
            ? escapeGameList[i].attributes.activityInfo.successRate
            : otherGameData[aSlug].gameInfo.successRate,
          timeSize: escapeGameList[i].attributes.activityInfo.teamSize
            ? escapeGameList[i].attributes.activityInfo.teamSize
            : otherGameData[aSlug].gameInfo.teamSize,
          timeSizeLabel: escapeGameList[i].attributes.activityInfo.teamSizeLabel
            ? escapeGameList[i].attributes.activityInfo.teamSizeLabel
            : otherGameData[aSlug].gameInfo.teamSizeLabel,
          gameTheme: otherGameData[aSlug].gameInfo.gameTheme,
          recommendFor: otherGameData[aSlug].gameInfo.recommendFor,
        },
      };
      retArr.push(obj);
    }
  }

  return retArr;
};
