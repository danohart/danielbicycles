export async function GET(req) {
  const res = await fetch(
    `https://www.strava.com/api/v3/athletes/${process.env.STRAVA_ATHLETE_ID}/stats`,
    {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${process.env.STRAVA_ACCESS_TOKEN}`,
      },
    }
  );
  const data = await res.json();
  return Response.json({ data });
}
