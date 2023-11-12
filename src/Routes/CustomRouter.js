class CustomRouter {
  async route(waypoints, callback) {
    try {
      const res = await fetch(
        `http://localhost:8000/getData?location=${waypoints[0].latLng.lat},${waypoints[0].latLng.lng}&destination=${waypoints[1].latLng.lat},${waypoints[1].latLng.lng}`
      );
      const data = await res.json();
      const results = Object.values(data.data).map((el) => {
        return {
          coordinates: el.coordinates.map((el) => ({ lat: el[1], lng: el[0] })),
          inputWaypoints: [...waypoints],
          instructions: [],
          name: el.name,
          properties: { isSimplified: true },
          summary: {
            totalDistance: el.distance * 1609.34,
            totalTime: el.time * 60,
          },
          waypointIndices: [0, this.coordinates.length],
          waypoints,
        };
      });
      callback(null, results);
    } catch (e) {
      callback(e, null);
    }
  }
}

// [
//     { latLng: { lat: "37.770581", lng: "-122.442550" }, name: "test" },
//     { latLng: { lat: "37.765297", lng: "-122.442527" }, name: "test2" },
//   ]
export default CustomRouter;
