const weatherOptions = [
  { url: "images/day/sunny.svg", day: true, type: "sunny" },
  { url: "images/day/cloudy.svg", day: true, type: "cloudy" },
  { url: "images/day/mooncloudy.svg", day: false, type: "mooncloudy" },
  { url: "images/day/moon.svg", day: false, type: "moon" },
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
