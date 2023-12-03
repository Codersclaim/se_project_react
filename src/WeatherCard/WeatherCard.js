const weatherOptions = [
  { url: require("../images/day/sunny.svg").default, day: true, type: "sunny" },
  { url: require("../images/day/cloudy.svg").default, day: true, type: "cloudy" },
  { url: require("../images/day/rain.svg").default, day: true, type: "rain" },
  { url: require("../images/day/snow.svg").defualt, day: true, type: "snow" },
  { url: require("../images/day/fog.svg").default, day: true, type: "fog" },
  { url: require("../images/day/storm.svg").default, day: true, type: "storm" },
  { url: require("../images/night/mooncloudy.svg").default, day: false, type: "mooncloudy" },
  { url: require("../images/night/moon.svg").default, day: false, type: "moon" },
  { url: require("../images/night/moonsnow.svg").default, day: false, type: "moonsnow" },
  { url: require("../images/night/moonstorm.svg").default, day: false, type: "moonstorm" },
  { url: require("../images/night/moonrain.svg").default, day: false, type: "moonrain" },
  { url: require("../images/night/moonfog.svg").default, day: false, type: "moonfog" },
];

const WeatherCard = ({ day, type }) => {
  console.log("weather card");
  const imageSrc = weatherOptions.filter((i) => {
    console.log(i);
    return i.day === day && i.type === type;
  });
  console.log(imageSrc);
  console.log(imageSrc[0].url);

  const imageSrcUrl = imageSrc[0].url || "";
  return (
    <section className="weather" id="weather">
      <div className="weather_info">75F</div>

      <img
        src={imageSrcUrl}
        className="weather_image"
        alt="weathers"
      />
    </section>
  );
};
export default WeatherCard;
